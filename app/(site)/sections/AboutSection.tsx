"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionShell } from "../components/SectionShell";
import { SectionHeading } from "../components/SectionHeading";
import { NeumoCard } from "../components/NeumoCard";

export function AboutSection() {
    return (
        <SectionShell id="about" className="bg-background relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 relative"
                >
                    <NeumoCard variant="flat" className="p-4 rotate-3">
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                            <Image
                                src="/images/about.png"
                                alt="Nycayen Moore"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </NeumoCard>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <SectionHeading
                        title="Radiate Confidence"
                        subtitle="About"
                        align="left"
                        className="mb-8"
                    />

                    <div className="space-y-6 text-accent-foreground/80 text-lg leading-relaxed">
                        <p>
                            Nycayen Moore believes that great hair can transform your life. Our personalized hair styling services are designed to enhance your natural beauty and boost your confidence. Whether it's a chic cut or a glamorous updo, we ensure you leave our care feeling empowered and ready to take on the world.
                        </p>
                        <p>
                            With decades of experience and a commitment to perfection, we provide personalized services that set us apart from the competition. Our expert stylists specialize in professional hair styling and are committed to providing exceptional attention to detail for every client.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { title: "Skillful Styling", desc: "Trust in our stylists' expertise to transform your hair into a work of art." },
                            { title: "Precision Perfectionists", desc: "We believe that even the smallest details can make or break a hairstyle." },
                            { title: "Tailored Treatments", desc: "Every individual is unique and deserves a customized experience." },
                        ].map((pillar, index) => (
                            <div key={index} className="border-l-2 border-primary pl-4">
                                <h4 className="font-serif text-xl text-foreground mb-2">{pillar.title}</h4>
                                <p className="text-sm text-accent-foreground/70">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionShell>
    );
}
