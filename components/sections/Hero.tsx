"use client";

import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-primary text-lg md:text-xl font-medium tracking-widest uppercase mb-4">
                        Welcome to
                    </h2>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
                        Nycayen Moore <br />
                        <span className="text-secondary">Hair Artistry</span>
                    </h1>
                    <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Experience the pinnacle of luxury hair care in the heart of NYC.
                        Where precision meets passion, and every style is a masterpiece.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Book Appointment
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Portfolio
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
