"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";

export function ChatWidgetPlaceholder() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        // Check if chat is enabled via env var (default to false if not set)
        // In a real app, this would be process.env.NEXT_PUBLIC_CHAT_ENABLED === 'true'
        // For this demo, we'll default to true to show the placeholder
        setIsEnabled(true);
    }, []);

    if (!isEnabled) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-16 right-0 w-80 bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden mb-4"
                    >
                        <div className="p-4 bg-primary/10 border-b border-white/5 flex justify-between items-center">
                            <h4 className="font-serif text-primary font-medium">Chat Support</h4>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-accent-foreground/50 hover:text-foreground"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-6 text-center">
                            <div className="w-12 h-12 bg-surface rounded-full mx-auto mb-4 flex items-center justify-center text-primary neu-flat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                            </div>
                            <p className="text-accent-foreground/80 text-sm mb-4">
                                Live chat is currently offline. Please use the contact form to get in touch!
                            </p>
                            <Button
                                variant="outline"
                                className="w-full text-sm"
                                onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Go to Contact Form
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                )}
            </button>
        </div>
    );
}
