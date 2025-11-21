"use client";

import { motion } from "motion/react";
import { Card } from "../ui/Card";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Fashion Editor",
        content: "Nycayen is a true artist. He understood exactly what I wanted and delivered beyond my expectations. The atmosphere is pure luxury.",
    },
    {
        name: "Elena Rodriguez",
        role: "Model",
        content: "I trust no one else with my hair. The color work is impeccable, and the health of my hair has never been better.",
    },
    {
        name: "Jessica Chen",
        role: "CEO",
        content: "A sanctuary in the city. Professional, punctual, and incredibly talented. The best salon experience in NYC.",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                        Client Love
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground">
                        Testimonials
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col justify-between p-8">
                                <p className="text-accent-foreground/80 text-lg italic mb-6 leading-relaxed">
                                    "{item.content}"
                                </p>
                                <div>
                                    <h4 className="font-serif text-xl text-primary mb-1">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-secondary uppercase tracking-wider">
                                        {item.role}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
