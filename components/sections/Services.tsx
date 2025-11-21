"use client";

import { motion } from "motion/react";
import { Card } from "../ui/Card";

const services = [
    {
        title: "Precision Cuts",
        description: "Tailored haircuts that frame your face and enhance your natural beauty.",
        price: "from $120",
    },
    {
        title: "Custom Color",
        description: "Bespoke color treatments including balayage, highlights, and color correction.",
        price: "from $200",
    },
    {
        title: "Styling & Treatments",
        description: "Blowouts, keratin treatments, and deep conditioning for healthy, shiny hair.",
        price: "from $85",
    },
    {
        title: "Bridal & Events",
        description: "Exquisite styling for your special day, ensuring you look breathtaking.",
        price: "Consultation",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                        Our Expertise
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground">
                        Services Menu
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col justify-between text-center hover:bg-surface/50">
                                <div>
                                    <h4 className="font-serif text-2xl text-primary mb-4">
                                        {service.title}
                                    </h4>
                                    <p className="text-accent-foreground/70 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="text-secondary font-medium text-lg border-t border-accent pt-4 mt-auto">
                                    {service.price}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
