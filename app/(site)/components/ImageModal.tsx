"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Button } from "./Button";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    src: string;
    alt: string;
    title: string;
    category: string;
}

export function ImageModal({ isOpen, onClose, src, alt, title, category }: ImageModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-background rounded-2xl overflow-hidden shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-label={title}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
                            <div className="relative w-full md:w-2/3 h-[50vh] md:h-auto bg-black/5">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                />
                            </div>

                            <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-background">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
                                        {category}
                                    </span>
                                    <h3 className="font-serif text-3xl text-foreground mb-4">{title}</h3>
                                    <p className="text-accent-foreground/70 leading-relaxed">
                                        Experience the artistry of Nycayen Moore. This transformation showcases our commitment to precision and personalized style.
                                    </p>
                                </div>

                                <div className="mt-8 pt-8 border-t border-accent">
                                    <Button variant="solid" className="w-full" onClick={onClose}>
                                        Close Gallery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
