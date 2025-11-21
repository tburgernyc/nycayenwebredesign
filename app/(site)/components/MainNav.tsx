"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export function MainNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex flex-col z-50 relative" onClick={(e) => scrollToSection(e, "#hero")}>
                    <span className="font-serif text-2xl font-bold text-foreground leading-none">
                        Nycayen Moore
                    </span>
                    <span className="text-xs tracking-[0.2em] text-primary uppercase">
                        Hair Artistry
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <Button
                        variant="solid"
                        color="primary"
                        className="px-6 py-2 text-sm"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Book Now
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-foreground p-2 z-50 relative focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </div>
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center lg:hidden"
                        >
                            <nav className="flex flex-col gap-8 text-center">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        className="text-3xl font-serif font-medium text-foreground hover:text-primary transition-colors"
                                        onClick={(e) => scrollToSection(e, link.href)}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Button
                                        className="mt-8 px-12 py-4 text-lg"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
