# MERAZ '26 - Digital Dystopia

> "Future is now. Chaos is here."

Welcome to the official repository for **Meraz '26**, the annual cultural fest of IIT Bhilai. This year's theme is **Digital Dystopia**: a Gen Z Neo-Brutalist / Cyber-Chaos experience.

## 🚀 Overview

Meraz '26 is a full-stack web application designed to provide an immersive experience for fest participants. It features a high-fidelity, animated frontend and a robust backend for managing users, events, and passes.

### ✨ Key Features

-   **Immersive UI:** A "Gen Z Neo-Brutalist" design with aggressive typography, acid-lime/hyper-pink accents, and holographic effects.
-   **Dynamic Animations:** Powered by `framer-motion` for smooth, gravity-defying interactions.
-   **Event Management:** Browse and register for events like "Hack the Vibe", "Neon Nights", and "Robo Wars".
-   **Secure Authentication:** User signup and login using JWT and Bcrypt.
-   **Pass System:** Purchase various passes (Individual, Group, Day, Events) with real-time database updates.
-   **User Dashboard:** View your profile, registered events, and purchased passes in a cyberpunk-styled dashboard.
-   **Responsive Design:** Fully optimized for all devices.

## 🛠️ Tech Stack

### Frontend
-   **React:** UI Library
-   **Vite:** Build tool
-   **Tailwind CSS:** Styling
-   **Framer Motion:** Animations
-   **Lucide React:** Icons

### Backend
-   **Node.js & Express:** Server framework
-   **SQLite:** Database
-   **Bcrypt:** Password hashing
-   **JSON Web Token (JWT):** Authentication
-   **CORS:** Cross-Origin Resource Sharing

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd meraz-2026
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Backend Server:**
    The backend runs on port `3000` and serves the API.
    ```bash
    node server/index.js
    ```
    *Note: The SQLite database (`meraz.db`) will be automatically created in the `server` directory on the first run.*

4.  **Start the Frontend Development Server:**
    Open a new terminal and run:
    ```bash
    npm run dev
    ```

5.  **Access the App:**
    Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

## 🔌 API Endpoints

### Authentication
-   `POST /api/register` - Create a new user account.
-   `POST /api/login` - Authenticate user and receive a token.

### Events
-   `GET /api/user/events` - Get list of events registered by the logged-in user.
-   `POST /api/events/register` - Register for a specific event.

### Passes
-   `GET /api/user/passes` - Get list of passes purchased by the logged-in user.
-   `POST /api/passes/buy` - Purchase a pass.

## 📂 Project Structure

```
meraz-2026/
├── server/
│   ├── index.js         # Express server & API routes
│   └── meraz.db         # SQLite database (auto-generated)
├── src/
│   ├── App.jsx          # Main React component (Single-file architecture)
│   ├── index.css        # Global styles & Tailwind directives
│   └── main.jsx         # React entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 📜 License

This project is created for IIT Bhilai's Meraz '26. All rights reserved.
