import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
const SECRET_KEY = 'meraz-2026-secret-key-change-this-in-prod'; // Simple secret for prototype

app.use(cors());
app.use(express.json());

// Database Setup
const dbPath = join(__dirname, 'meraz.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Connected to SQLite database');
        createTables();
    }
});

function createTables() {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        password_hash TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        event_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS passes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        type TEXT,
        price TEXT,
        details TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);
}

// Authentication Routes

// Register
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';

        db.run(sql, [username, email, hashedPassword], function (err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Username or email already exists' });
                }
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'User registered successfully', userId: this.lastID });
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE LOWER(username) = LOWER(?)';
    db.get(sql, [username], async (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ error: 'User not found. Please Register.' });

        const match = await bcrypt.compare(password, user.password_hash);
        if (match) {
            const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
        } else {
            res.status(400).json({ error: 'Invalid password' });
        }
    });
});

// Event Routes

// Get User's Registered Events
app.get('/api/user/events', authenticateToken, (req, res) => {
    const sql = 'SELECT event_id FROM registrations WHERE user_id = ?';
    db.all(sql, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ events: rows.map(r => r.event_id) });
    });
});

// Register for Event
app.post('/api/events/register', authenticateToken, (req, res) => {
    const { eventId } = req.body;
    const sql = 'INSERT INTO registrations (user_id, event_id) VALUES (?, ?)';

    db.run(sql, [req.user.id, eventId], function (err) {
        if (err) return res.status(500).json({ error: 'Already registered or database error' });
        res.json({ message: 'Registered successfully' });
    });
});

// Pass Routes
app.post('/api/passes/buy', authenticateToken, (req, res) => {
    const { type, price, details } = req.body;
    const sql = 'INSERT INTO passes (user_id, type, price, details) VALUES (?, ?, ?, ?)';

    // details is expected to be a JSON string of names
    db.run(sql, [req.user.id, type, price, JSON.stringify(details)], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Pass purchased successfully', passId: this.lastID });
    });
});

app.get('/api/user/passes', authenticateToken, (req, res) => {
    const sql = 'SELECT * FROM passes WHERE user_id = ?';
    db.all(sql, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        const passes = rows.map(pass => ({
            ...pass,
            details: JSON.parse(pass.details)
        }));
        res.json({ passes });
    });
});

// Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
