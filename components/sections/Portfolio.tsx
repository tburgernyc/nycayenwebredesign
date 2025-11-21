"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "../ui/Card";

const portfolioItems = [
    {
        src: "/images/portfolio-1.png",
        alt: "Blonde Balayage",
        title: "Luminous Blonde",
    },
    {
        src: "/images/portfolio-2.png",
        alt: "Brunette Waves",
        title: "Rich Chocolate",
    },
    {
        src: "/images/portfolio-1.png", // Reusing for demo
        alt: "Edgy Cut",
        title: "Modern Edge",
    },
    {
        src: "/images/portfolio-2.png", // Reusing for demo
        alt: "Bridal Updo",
        title: "Timeless Elegance",
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                        Selected Works
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground">
                        Our Portfolio
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-4 overflow-hidden group cursor-pointer" hoverEffect={true}>
                                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <h4 className="text-white font-serif text-2xl">{item.title}</h4>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
