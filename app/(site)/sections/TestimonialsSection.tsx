"use client";

import { motion } from "motion/react";
import { SectionShell } from "../components/SectionShell";
import { SectionHeading } from "../components/SectionHeading";
import { NeumoCard } from "../components/NeumoCard";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Fashion Editor",
        content: "Nycayen is a true artist. He understood exactly what I wanted and delivered beyond my expectations. The atmosphere is pure luxury.",
        rating: 5,
    },
    {
        name: "Maria Rodriguez",
        role: "Model",
        content: "I trust no one else with my hair. The color work is impeccable, and the health of my hair has never been better.",
        rating: 5,
    },
    {
        name: "Jennifer Chen",
        role: "CEO",
        content: "A sanctuary in the city. Professional, punctual, and incredibly talented. The best salon experience in NYC.",
        rating: 5,
    },
];

export function TestimonialsSection() {
    return (
        <SectionShell id="testimonials" className="bg-background">
            <SectionHeading
                title="Client Love"
                subtitle="Testimonials"
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <NeumoCard className="h-full flex flex-col justify-between p-8" variant="pressed">
                            <div className="mb-6">
                                <div className="flex gap-1 mb-4 text-primary">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-accent-foreground/80 text-lg italic leading-relaxed">
                                    "{item.content}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-foreground mb-1">
                                    {item.name}
                                </h4>
                                <p className="text-sm text-secondary uppercase tracking-wider">
                                    {item.role}
                                </p>
                            </div>
                        </NeumoCard>
                    </motion.div>
                ))}
            </div>
        </SectionShell>
    );
}
