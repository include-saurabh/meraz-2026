import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Zap, Ticket, Calendar, MapPin, X, Terminal, Skull, PartyPopper, MessageSquare, Send } from 'lucide-react';

/* 
  AI-GENERATED ASSETS PLACEHOLDERS
  - Background: "Abstract cyberpunk texture dark mode" (Midjourney)
  - Event Images: "Holographic tech event poster" (DALL-E 3)
*/

// VIBES constant removed

// ... (EVENTS constant remains unchanged)

// ... (EVENTS constant was here, restoring if needed or ensuring clean cut)



const EVENTS = [
    {
        id: 1,
        title: "HACK THE VIBE",
        category: "Tech",
        date: "Feb 14, 2026",
        location: "LHC-101",
        desc: "24h Hackathon. No sleep. Just code. Build the future of digital chaos.",
        contact: { name: "Aditya Verma", phone: "+91 98765 43210" }
    },
    {
        id: 2,
        title: "NEON NIGHTS",
        category: "Cultural",
        date: "Feb 15, 2026",
        location: "Open Air Theatre",
        desc: "EDM Night featuring top DJs. Cyber-goth fashion mandatory.",
        contact: { name: "Riya Sharma", phone: "+91 91234 56789" }
    },
    {
        id: 3,
        title: "ROBO WARS",
        category: "Tech",
        date: "Feb 16, 2026",
        location: "Mech Block",
        desc: "Metal vs Metal. Sparks will fly. The ultimate bot battle.",
        contact: { name: "Vikram Singh", phone: "+91 99887 76655" }
    },
    {
        id: 4,
        title: "GLITCH ART EXPO",
        category: "Arts",
        date: "Feb 14, 2026",
        location: "Creative Arts Center",
        desc: "Showcase your digital distortions and pixel imperfections.",
        contact: { name: "Ananya Gupta", phone: "+91 88776 65544" }
    },
    {
        id: 5,
        title: "CYBER FASHION",
        category: "Cultural",
        date: "Feb 15, 2026",
        location: "Main Auditorium",
        desc: "Walk the ramp in your best neo-brutalist attire.",
        contact: { name: "Aryan Kumar", phone: "+91 77665 54433" }
    },
    {
        id: 6,
        title: "CODE BLIND",
        category: "Tech",
        date: "Feb 16, 2026",
        location: "Computer Centre",
        desc: "Coding without a monitor. Trust your fingers.",
        contact: { name: "Sneha Patel", phone: "+91 66554 43322" }
    }
];

const Navbar = ({ user, onOpenAuth, onOpenDashboard, onLogout }) => (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="font-mono text-xl font-bold tracking-tighter hover:text-acid-lime transition-colors cursor-pointer">
            MERAZ_26
        </div>
        <div className="hidden md:flex space-x-8 font-mono text-sm">
            <a href="#events" className="hover:text-hyper-pink transition-colors">EVENTS</a>
            <a href="#passes" className="hover:text-hyper-pink transition-colors">PASSES</a>
            <a href="#about" className="hover:text-hyper-pink transition-colors">ABOUT</a>
        </div>
        <div className="flex gap-4">
            {user ? (
                <>
                    <button
                        onClick={onOpenDashboard}
                        className="text-acid-lime font-mono hover:text-white transition-colors flex items-center gap-2"
                    >
                        <Terminal size={16} /> {user.username}
                    </button>
                    <button
                        onClick={onLogout}
                        className="bg-white/10 text-white px-4 py-2 font-mono hover:bg-red-500/20 hover:text-red-500 transition-colors text-xs"
                    >
                        LOGOUT
                    </button>
                </>
            ) : (
                <button
                    onClick={onOpenAuth}
                    className="bg-acid-lime text-black font-bold px-6 py-2 font-mono hover:bg-white transition-colors neo-brutalist-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                    LOGIN / SIGNUP
                </button>
            )}
        </div>
    </nav>
);

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2026-02-14T00:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance < 0) { clearInterval(interval); return; }
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="relative group">
            <div className="absolute inset-0 bg-acid-lime/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-black border-2 border-white/20 p-4 min-w-[80px] md:min-w-[100px] overflow-hidden">
                {/* Glitch Overlay */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-acid-lime/50 animate-[scan_2s_linear_infinite]"></div>

                <span className="block text-4xl md:text-5xl font-black text-white font-mono tracking-tighter relative z-10">
                    {value.toString().padStart(2, '0')}
                </span>
                <span className="block text-[10px] font-mono text-acid-lime uppercase tracking-[0.2em] border-t border-white/10 pt-1 mt-1">
                    {label}
                </span>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-acid-lime"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hyper-pink"></div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12 perspective-500">
            <TimeUnit value={timeLeft.days} label="CYCLES" />
            <TimeUnit value={timeLeft.hours} label="HRS" />
            <TimeUnit value={timeLeft.minutes} label="MINS" />
            <TimeUnit value={timeLeft.seconds} label="SECS" />
        </div>
    );
};

const Hero = () => {
    // Aggressive 3D Gravity Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Extended range [-45, 45] degrees for extreme tilt
    const rotateX = useTransform(y, [-300, 300], [45, -45]);
    const rotateY = useTransform(x, [-300, 300], [-45, 45]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate offset from center
        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;

        x.set(offsetX);
        y.set(offsetY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-4 overflow-hidden perspective-[1000px] bg-black"
        >
            {/* Background Grid - Ensure z-0 and pointer-events-none */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative z-10 w-full max-w-5xl flex flex-col items-center pointer-events-none"
            >
                {/* Floating Elements Layout */}
                <h2 className="font-mono text-acid-lime mb-4 tracking-[0.5em] text-sm md:text-base translate-z-10">IIT BHILAI PRESENTS</h2>

                <div className="relative group">
                    <h1
                        className="text-7xl md:text-[10rem] leading-[0.8] font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mix-blend-exclusion"
                        style={{ transform: "translateZ(50px)" }}
                    >
                        MERAZ '26
                    </h1>
                    {/* 3D Depth Shadows */}
                    <h1 className="absolute inset-0 text-7xl md:text-[10rem] leading-[0.8] font-black tracking-tighter text-acid-lime/20 blur-sm -z-10 translate-x-2 translate-y-2">
                        MERAZ '26
                    </h1>
                </div>

                <h2
                    className="text-2xl md:text-5xl font-mono text-white mb-2 tracking-tighter uppercase"
                    style={{ transform: "translateZ(30px)" }}
                >
                    DIGITAL <span className="text-hyper-pink">DYSTOPIA</span>
                </h2>

                {/* Timer in 3D Space */}
                <div style={{ transform: "translateZ(40px)" }}>
                    <CountdownTimer />
                </div>

            </motion.div>
        </section>
    );
};

const EventDetailsModal = ({ event, isOpen, onClose, onRegister }) => {
    if (!isOpen || !event) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-[#0a0a0a] border-2 border-acid-lime w-full max-w-2xl p-8 neo-brutalist-shadow max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X size={24} />
                </button>

                <div className="flex gap-2 mb-4">
                    <span className="bg-hyper-pink/20 text-hyper-pink border border-hyper-pink/50 px-2 py-1 text-xs font-mono">
                        {event.category.toUpperCase()}
                    </span>
                    <span className="bg-white/10 text-white px-2 py-1 text-xs font-mono">
                        ID: #{event.id}
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase break-words leading-tight">
                    {event.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Calendar className="text-acid-lime" size={18} />
                            <div>
                                <span className="block text-xs text-gray-500 uppercase">Date</span>
                                {event.date}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <MapPin className="text-acid-lime" size={18} />
                            <div>
                                <span className="block text-xs text-gray-500 uppercase">Place</span>
                                {event.location}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 font-mono text-sm border-l border-white/10 pl-0 md:pl-8">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Zap className="text-hyper-pink" size={18} />
                            <div>
                                <span className="block text-xs text-gray-500 uppercase">Contact Person</span>
                                {event.contact.name}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <Terminal className="text-hyper-pink" size={18} />
                            <div>
                                <span className="block text-xs text-gray-500 uppercase">Comm Link</span>
                                {event.contact.phone}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 p-6 border border-white/10 mb-8">
                    <h3 className="font-bold text-acid-lime mb-2 font-mono text-sm">/// DESCRIPTION</h3>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {event.desc}
                    </p>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => {
                            onRegister(event.id);
                            onClose();
                        }}
                        className="flex-1 bg-acid-lime text-black font-bold py-4 hover:bg-white transition-colors uppercase font-mono tracking-widest neo-brutalist-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        Register Now
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 border border-white/20 hover:bg-white/10 transition-colors font-mono uppercase text-sm"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const EventCard = ({ event, onClick }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        onClick={onClick}
        className="group relative bg-black border border-white/10 p-6 h-full overflow-hidden hover:border-hyper-pink/50 transition-colors flex flex-col cursor-pointer"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-hyper-pink/5 to-acid-lime/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <span className="bg-white/10 text-xs font-mono px-2 py-1 rounded text-acid-lime border border-acid-lime/20">
                    {event.category.toUpperCase()}
                </span>
                <Ticket className="text-white/20 group-hover:text-hyper-pink transition-colors" />
            </div>

            <h3 className="text-2xl font-black mb-2 group-hover:text-hyper-pink transition-colors">{event.title}</h3>
            <p className="font-mono text-gray-400 text-sm mb-6 flex-grow">{event.desc}</p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono border-t border-white/10 pt-4 text-gray-400 group-hover:text-white transition-colors">
                <div className="flex items-center gap-2">
                    <Calendar size={14} /> {event.date.split(',')[0]}
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={14} /> {event.location}
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-xs font-mono text-acid-lime opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW DETAILS</span>
                <span>-&gt;</span>
            </div>
        </div>

        {/* Holographic Border Effect */}
        <div className="absolute inset-0 border border-transparent pointer-events-none group-hover:border-hyper-pink/30 mix-blend-screen" />
    </motion.div>
);

const EventsSection = ({ onRegister }) => {
    const [filter, setFilter] = useState("ALL");
    const [selectedEvent, setSelectedEvent] = useState(null);

    const categories = ["ALL", ...new Set(EVENTS.map(e => e.category))];
    const filteredEvents = filter === "ALL" ? EVENTS : EVENTS.filter(e => e.category === filter);

    return (
        <section id="events" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b-2 border-white/10 pb-4">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white">SYSTEM_LOGS</h2>
                    <span className="font-mono text-acid-lime mb-2 animate-pulse">/// UPCOMING EVENTS</span>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 font-mono text-xs md:text-sm border transition-all ${filter === cat
                                ? "bg-acid-lime text-black border-acid-lime font-bold"
                                : "bg-black text-gray-400 border-white/20 hover:border-white hover:text-white"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <EventCard
                            event={event}
                            onClick={() => setSelectedEvent(event)}
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedEvent && (
                    <EventDetailsModal
                        event={selectedEvent}
                        isOpen={!!selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                        onRegister={onRegister}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

const PassPurchaseModal = ({ pass, isOpen, onClose, onConfirm }) => {
    const [names, setNames] = useState(pass.title.includes("GROUP") ? ['', '', '', '', ''] : ['']);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onConfirm(names);
        setLoading(false);
    };

    const handleNameChange = (index, value) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`relative bg-black border-2 ${pass.color.replace('text-', 'border-')} w-full max-w-md p-8 neo-brutalist-shadow`}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-black mb-1 text-white uppercase">CONFIRM PURCHASE</h2>
                <p className="font-mono text-acid-lime text-sm mb-6">{pass.title} // {pass.price}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500 uppercase">
                            {pass.title.includes("GROUP") ? "Attendee Names (5 Members)" : "Attendee Name"}
                        </label>
                        {names.map((name, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Member ${index + 1}`}
                                value={name}
                                onChange={(e) => handleNameChange(index, e.target.value)}
                                required
                                className="w-full bg-white/5 border border-white/20 p-3 text-white font-mono focus:border-acid-lime focus:outline-none"
                            />
                        ))}
                    </div>

                    <div className="bg-white/5 p-4 border border-white/10 text-xs font-mono text-gray-400">
                        <p>TOTAL: <span className="text-white font-bold">{pass.price}</span></p>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-acid-lime text-black font-bold py-4 hover:bg-white hover:text-black transition-colors uppercase font-mono tracking-widest disabled:opacity-50"
                    >
                        {loading ? 'PROCESSING...' : 'CONFIRM & PAY'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

const PassesSection = ({ onBuy }) => {
    const passes = [
        {
            title: "INDIVIDUAL PASS",
            price: "₹499",
            features: ["Full Festival Access", "All Cultural Events", "Standard Merch Kit"],
            color: "border-white/20",
            buttonColor: "bg-white text-black hover:bg-gray-200"
        },
        {
            title: "GROUP PASS (5)",
            price: "₹1999",
            features: ["5x Festival Access", "Priority Entry", "5x Merch Kits", "Squad Discount"],
            color: "border-acid-lime",
            buttonColor: "bg-acid-lime text-black hover:bg-white"
        },
        {
            title: "DAY PASS",
            price: "₹299",
            features: ["Single Day Access", "Selected Events", "Food Coupons"],
            color: "border-hyper-pink",
            buttonColor: "bg-hyper-pink text-black hover:bg-white"
        },
        {
            title: "EVENTS PASS",
            price: "₹799",
            features: ["All Competitions", "Workshop Access", "Certificate of Participation"],
            color: "border-cyan-400",
            buttonColor: "bg-cyan-400 text-black hover:bg-white"
        }
    ];

    return (
        <section id="passes" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4">ACCESS_GRANTED</h2>
                <p className="font-mono text-acid-lime max-w-2xl">/// SECURE YOUR ENTRY TO THE CHAOS. CHOOSE YOUR PROTOCOL.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {passes.map((pass, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className={`relative bg-black border-2 ${pass.color} p-6 flex flex-col h-full group`}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="font-mono text-sm text-gray-400 mb-2">{pass.title}</h3>
                            <div className="text-4xl font-black text-white mb-6 tracking-tighter">{pass.price}</div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {pass.features.map((feature, i) => (
                                    <li key={i} className="font-mono text-xs text-gray-300 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-white rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => onBuy(pass)}
                                className={`w-full py-3 font-bold font-mono text-sm uppercase tracking-wider transition-colors neo-brutalist-shadow ${pass.buttonColor}`}
                            >
                                BUY PASS
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const AboutSection = () => (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-acid-lime/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-hyper-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="border border-white/10 bg-black/50 backdrop-blur-sm p-8 md:p-12 relative z-10 neo-brutalist-shadow">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-acid-lime"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-hyper-pink"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <Skull className="text-acid-lime w-8 h-8 md:w-10 md:h-10 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        ABOUT_MERAZ<span className="text-hyper-pink">.EXE</span>
                    </h2>
                </div>

                <div className="space-y-6 font-mono text-gray-300 leading-relaxed text-sm md:text-base text-justify">
                    <p>
                        <span className="text-white font-bold bg-hyper-pink/20 px-1">Meraz 6.0</span> — the pulsating heart of IIT Bhilai — is where technology, art, and imagination unite to create an unforgettable celebration of innovation and culture. Evolving with each edition, Meraz has grown into a grand stage for talent, collaboration, and creative exploration.
                    </p>
                    <p>
                        At its core, Meraz is a tribute to curiosity and expression — a space where minds ignite, ideas take shape, and every participant becomes a part of something larger than themselves. From cutting-edge tech showcases and coding battles to captivating performances, fashion artistry, and culinary flair, Meraz 6.0 embraces every shade of human creativity.
                    </p>
                    <p>
                        More than an event, it’s an experience — one that bridges disciplines, builds friendships, and inspires new possibilities. Whether you come to compete, perform, or simply be inspired, Meraz invites you to discover your potential and paint your own story on its vibrant canvas.
                    </p>
                    <p className="items-center flex gap-2 pt-4 border-t border-white/10 text-acid-lime">
                        <Terminal size={16} />
                        Join us for Meraz 6.0, as IIT Bhilai transforms into a whirlwind of color, passion, and innovation — a celebration that leaves you not just with memories, but with a spark that lasts long after the lights fade.
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
);

const Dashboard = ({ user, onClose }) => {
    const [myEvents, setMyEvents] = useState([]);
    const [myPasses, setMyPasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                // Fetch Events
                const eventsRes = await fetch('http://localhost:3000/api/user/events', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const eventsData = await eventsRes.json();

                // Filter main EVENTS list to find matches
                const registeredEvents = EVENTS.filter(e => eventsData.events.includes(e.id));
                setMyEvents(registeredEvents);

                // Fetch Passes
                const passesRes = await fetch('http://localhost:3000/api/user/passes', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const passesData = await passesRes.json();
                if (passesRes.ok) {
                    setMyPasses(passesData.passes);
                }

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl h-[80vh] flex flex-col bg-[#0a0a0a] border border-white/20 neo-brutalist-shadow overflow-hidden"
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white bg-black p-2 border border-white/20">
                    <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Sidebar / Profile */}
                    <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 p-8 bg-white/5">
                        <div className="w-20 h-20 bg-acid-lime rounded-full mb-6 flex items-center justify-center text-black font-black text-3xl">
                            {user.username[0].toUpperCase()}
                        </div>
                        <h2 className="text-2xl font-black mb-1">{user.username}</h2>
                        <p className="font-mono text-xs text-gray-400 mb-6">{user.email}</p>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="bg-black/50 p-3 border border-white/10">
                                <span className="text-acid-lime block text-xs mb-1">STATUS</span>
                                ONLINE
                            </div>
                            <div className="bg-black/50 p-3 border border-white/10">
                                <span className="text-hyper-pink block text-xs mb-1">ID</span>
                                #{user.id.toString().padStart(4, '0')}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8 overflow-y-auto space-y-8">

                        {/* Passes Section */}
                        {myPasses.length > 0 && (
                            <div>
                                <h3 className="font-mono text-hyper-pink mb-4 text-xl">/// MY_ACCESS_CODES</h3>
                                <div className="space-y-4">
                                    {myPasses.map(pass => (
                                        <div key={pass.id} className="bg-white/5 border border-white/10 p-4 relative group hover:border-hyper-pink/50 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-black text-lg">{pass.type}</h4>
                                                <span className="text-acid-lime font-mono text-xs border border-acid-lime/20 px-2 py-1">ACTIVE</span>
                                            </div>
                                            <div className="bg-black/30 p-2 rounded border border-white/5">
                                                <p className="text-[10px] text-gray-500 font-mono mb-2 uppercase">ATTENDEES</p>
                                                <div className="space-y-1">
                                                    {(pass.details || []).map((name, i) => (
                                                        <div key={i} className="flex items-center gap-2 font-mono text-xs text-gray-300">
                                                            <span className="text-hyper-pink">0{i + 1} //</span>
                                                            {name || "N/A"}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Events Section */}
                        <div>
                            <h3 className="font-mono text-acid-lime mb-6 text-xl">/// REGISTERED_EVENTS</h3>

                            {loading ? (
                                <div className="text-center py-10 font-mono animate-pulse">LOADING_DATA...</div>
                            ) : myEvents.length === 0 && myPasses.length === 0 ? (
                                <div className="text-center py-20 border border-white/10 border-dashed">
                                    <p className="font-mono text-gray-500 mb-4">NO_DATA_FOUND</p>
                                    <button onClick={onClose} className="text-acid-lime hover:underline font-mono text-sm">BROWSE EVENTS</button>
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    {myEvents.map(event => (
                                        <div key={event.id} className="bg-white/5 border border-white/10 p-4 flex justify-between items-center group hover:border-acid-lime/50 transition-colors">
                                            <div>
                                                <h4 className="font-bold">{event.title}</h4>
                                                <p className="text-xs font-mono text-gray-400">{event.date} // {event.location}</p>
                                            </div>
                                            <span className="text-xs bg-acid-lime/20 text-acid-lime px-2 py-1 font-mono">CONFIRMED</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const AuthModal = ({ isOpen, onClose, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const endpoint = isLogin ? '/api/login' : '/api/register';

        try {
            const res = await fetch(`http://localhost:3000${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Something went wrong');

            if (isLogin) {
                localStorage.setItem('token', data.token);
                onLogin(data.user);
            } else {
                setIsLogin(true);
                setError('Registration successful! Please login.');
            }
            onClose();
        } catch (err) {
            // Enhance error display for better visibility
            setError(err.message.replace('COMPILE_ERROR: ', '')); // Avoid double prefix if backend sends clean text
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-[#0a0a0a] border-2 border-acid-lime w-full max-w-md p-8 neo-brutalist-shadow"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X size={24} />
                </button>

                <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">
                    {isLogin ? 'ACCESS_DENIED' : 'NEW_PROSPECT'}
                </h2>

                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-500 p-2 mb-4 text-xs font-mono">
                        COMPILE_ERROR: {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-mono text-acid-lime uppercase">Username</label>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            className="w-full bg-black border border-white/20 p-3 text-white font-mono focus:border-acid-lime focus:outline-none focus:ring-1 focus:ring-acid-lime transition-all"
                            placeholder="ENTER_ID"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-acid-lime uppercase">Email Protocol</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black border border-white/20 p-3 text-white font-mono focus:border-acid-lime focus:outline-none focus:ring-1 focus:ring-acid-lime transition-all"
                                placeholder="USER@DOMAIN.COM"
                                required
                            />
                        </div>
                    )}
                    <div className="space-y-1">
                        <label className="text-xs font-mono text-acid-lime uppercase">Password Key</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full bg-black border border-white/20 p-3 text-white font-mono focus:border-acid-lime focus:outline-none focus:ring-1 focus:ring-acid-lime transition-all"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-acid-lime text-black font-bold py-4 hover:bg-white hover:text-black transition-colors uppercase font-mono tracking-widest mt-6 neo-brutalist-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        {loading ? 'PROCESSING...' : (isLogin ? 'INITIATE_LOGIN' : 'REGISTER_USER')}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => { setIsLogin(!isLogin); setError(''); }}
                        className="text-xs font-mono text-gray-400 hover:text-white hover:underline"
                    >
                        {isLogin ? "NO ACCESS? CREATE PROFILE" : "ALREADY REGISTERED? LOGIN"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "SYSTEM_ONLINE. HOW CAN I ASSIST YOU, USER?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = React.useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMsg = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        setTimeout(() => {
            let botResponseText = "DATA_CORRUPTED. PLEASE REPHRASE.";
            const lowerInput = userMsg.text.toLowerCase();

            if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                botResponseText = "GREETINGS. STATE YOUR QUERY.";
            } else if (lowerInput.includes('event') || lowerInput.includes('schedule')) {
                botResponseText = "EVENTS CLASSIFIED UNDER 'SYSTEM_LOGS'. SCROLL TO VIEW UPCOMING CHAOS.";
            } else if (lowerInput.includes('register') || lowerInput.includes('pass')) {
                botResponseText = "ACCESS CODES AVAILABLE IN 'PASSES' SECTION. LOGIN REQUIRED FOR TRANSACTION.";
            } else if (lowerInput.includes('contact') || lowerInput.includes('help')) {
                botResponseText = "HUMAN INTERVENTION REQUIRED? CONTACT ADMIN AT support@meraz.iitbhilai.ac.in";
            } else if (lowerInput.includes('meraz')) {
                botResponseText = "MERAZ 6.0: DIGITAL DYSTOPIA. THE ANNUAL CULTURAL TECHNO FEST OF IIT BHILAI. FEB 14-16.";
            }

            const botMsg = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 z-40 bg-acid-lime text-black p-4 neo-brutalist-shadow border-2 border-black ${isOpen ? 'hidden' : 'flex'}`}
            >
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-hyper-pink animate-pulse"></div>
                <MessageSquare size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-8 right-8 z-50 w-80 md:w-96 bg-black border-2 border-acid-lime neo-brutalist-shadow flex flex-col h-[500px]"
                    >
                        <div className="bg-acid-lime text-black p-3 flex justify-between items-center border-b-2 border-black">
                            <div className="flex items-center gap-2 font-mono font-bold text-sm">
                                <Terminal size={16} />
                                <span>SUPPORT_BOT_V1.0</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-black hover:text-acid-lime transition-colors p-1">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-sm bg-grid-pattern relative" ref={scrollRef}>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none z-0"></div>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`relative z-10 p-3 border ${msg.sender === 'user'
                                        ? 'bg-white/10 border-white/20 self-end ml-8 text-right'
                                        : 'bg-acid-lime/10 border-acid-lime/50 self-start mr-8 text-left'
                                        }`}
                                >
                                    <p className={msg.sender === 'user' ? 'text-white' : 'text-acid-lime'}>
                                        <span className="block text-[10px] opacity-50 mb-1">
                                            {msg.sender === 'user' ? '>> USER' : '>> SYSTEM'}
                                        </span>
                                        {msg.text}
                                    </p>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="text-acid-lime text-xs animate-pulse">
                                    PROCESSING_QUERY...
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSend} className="p-3 border-t-2 border-white/20 bg-black flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="ENTER_COMMAND..."
                                className="flex-1 bg-white/5 border border-white/20 p-2 text-white font-mono text-sm focus:border-acid-lime focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-white/10 text-white p-2 hover:bg-acid-lime hover:text-black transition-colors border border-white/20 hover:border-acid-lime"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Footer = () => (
    <footer className="border-t border-white/10 py-12 text-center">
        <p className="font-mono text-gray-600 text-xs">
            © 2026 MERAZ PROTOTYPE // IIT BHILAI
        </p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
            <div className="w-2 h-2 bg-acid-lime rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-hyper-pink rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
        </div>
    </footer>
);

export default function App() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [user, setUser] = useState(null);

    // Check for existing session
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // In a real app we would validate token with backend here
            // For prototype, we decode it or just assume valid if we stored user details
            // Let's decode or fetch profile. For simplicity reusing what we have or re-login.
            // Actually, the login response gives us user info. We should persist that too or fetch it.
            // To keep it simple, we'll force login if user state is null, or we could persist user in localStorage too.
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);


    const [selectedPass, setSelectedPass] = useState(null);
    const [pendingPassPurchase, setPendingPassPurchase] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthOpen(false);

        if (pendingPassPurchase) {
            setSelectedPass(pendingPassPurchase);
            setPendingPassPurchase(null);
        } else {
            setIsDashboardOpen(true);
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsDashboardOpen(false);
    };

    const handleRegisterEvent = async (eventId) => {
        if (!user) {
            setIsAuthOpen(true);
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:3000/api/events/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ eventId })
            });
            const data = await res.json();
            if (res.ok) {
                alert('REGISTRATION SUCCESSFUL // CHECK DASHBOARD');
            } else {
                alert(`ERROR: ${data.error}`);
            }
        } catch (err) {
            alert('SYSTEM ERROR');
        }
    };

    const handleBuyPass = (pass) => {
        if (!user) {
            setPendingPassPurchase(pass);
            setIsAuthOpen(true);
            return;
        }
        setSelectedPass(pass);
    };

    const handleConfirmPurchase = async (names) => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:3000/api/passes/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    type: selectedPass.title,
                    price: selectedPass.price,
                    details: names
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert('ACCESS GRANTED // PASS ADDED TO DASHBOARD');
                setSelectedPass(null);
                setIsDashboardOpen(true);
            } else {
                alert(`ERROR: ${data.error}`);
            }
        } catch (err) {
            alert('SYSTEM ERROR');
        }
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-acid-lime selection:text-black">
            <Navbar
                user={user}
                onOpenAuth={() => setIsAuthOpen(true)}
                onOpenDashboard={() => setIsDashboardOpen(true)}
                onLogout={handleLogout}
            />

            <main>
                <Hero />
                <EventsSection onRegister={handleRegisterEvent} />
                <PassesSection onBuy={handleBuyPass} />
                <AboutSection />
            </main>

            <Footer />

            <AnimatePresence>
                {isAuthOpen && (
                    <AuthModal
                        isOpen={isAuthOpen}
                        onClose={() => setIsAuthOpen(false)}
                        onLogin={handleLogin}
                    />
                )}
                {isDashboardOpen && user && (
                    <Dashboard
                        user={user}
                        onClose={() => setIsDashboardOpen(false)}
                    />
                )}
                {selectedPass && (
                    <PassPurchaseModal
                        pass={selectedPass}
                        isOpen={!!selectedPass}
                        onClose={() => setSelectedPass(null)}
                        onConfirm={handleConfirmPurchase}
                    />
                )}
            </AnimatePresence>
            <ChatBot />
        </div>
    );
}
