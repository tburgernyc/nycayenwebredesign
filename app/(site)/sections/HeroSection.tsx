"use client";

import { motion } from "motion/react";
import { Button } from "../components/Button";

export function HeroSection() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-surface">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />

            <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
                    >
                        Elevate Your Look,
                        <br />
                        <span className="text-primary">Elevate Your Life</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-accent-foreground/80 mb-12 max-w-2xl mx-auto"
                    >
                        Expert hair styling services anywhere in the US. Don't settle for ordinary—let Nycayen Moore create a hairstyle that reflects your unique personality and style.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button variant="solid" onClick={scrollToContact}>
                            Book Your Appointment
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="tel:+13475563860">(347) 556-3860</a>
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-20"
                    >
                        <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-primary rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
