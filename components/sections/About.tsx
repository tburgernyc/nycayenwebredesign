"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/Button";

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden neu-flat p-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="/images/about.png"
                                    alt="Nycayen Moore Salon Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                            About Us
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                            The Art of Hair
                        </h3>
                        <p className="text-accent-foreground/80 text-lg leading-relaxed mb-6">
                            At Nycayen Moore Hair Artistry, we believe that hair is not just an accessory, but an expression of your unique identity. Located in the heart of New York City, our salon is a sanctuary of luxury and style.
                        </p>
                        <p className="text-accent-foreground/80 text-lg leading-relaxed mb-8">
                            Our team of master stylists combines classical techniques with modern innovation to create looks that are both timeless and contemporary. We are dedicated to providing an unparalleled experience, where every detail is curated for your comfort and satisfaction.
                        </p>
                        <Button variant="outline">Meet the Team</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
