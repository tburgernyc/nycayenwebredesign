"use client";

import { motion } from "motion/react";
import { SectionShell } from "../components/SectionShell";
import { SectionHeading } from "../components/SectionHeading";
import { NeumoCard } from "../components/NeumoCard";

const services = [
    {
        id: 1,
        title: "Hair Styling Services",
        description: "Professional hair styling services for all occasions. From trendy styles to customized looks tailored to your individual preferences.",
        features: ["Trendy Styles", "Customized Looks", "Attention to Detail", "Celebrity Treatment"],
    },
    {
        id: 2,
        title: "Bridal Services",
        description: "Exceptional bridal hair services for your special day. From romantic updos to elegant braids, we'll make sure you look stunning.",
        features: ["Wedding Perfection", "Romantic Updos", "Elegant Braids", "Special Occasion Styling"],
    },
    {
        id: 3,
        title: "Grooming Services",
        description: "Professional grooming services for the modern man. Expert techniques and precision styling for a polished look.",
        features: ["Modern Cuts", "Beard Styling", "Hot Towel Shaves", "Scalp Treatments"],
    },
    {
        id: 4,
        title: "Color Services",
        description: "Transform your look with our expert color services. From subtle highlights to bold transformations.",
        features: ["Balayage", "Highlights", "Full Color", "Color Correction"],
    },
    {
        id: 5,
        title: "Wig Styling & Installation",
        description: "Custom wig styling and professional installation. We specialize in creating natural-looking, comfortable wigs.",
        features: ["Custom Units", "Lace Fronts", "Wig Maintenance", "Styling Consultation"],
    },
    {
        id: 6,
        title: "Special Events",
        description: "Whether it's a red carpet event or a romantic date night, we'll create a stunning hairstyle that suits the occasion.",
        features: ["Red Carpet Ready", "Photo Shoots", "Gala Events", "Date Night Glam"],
    },
];

export function ServicesSection() {
    return (
        <SectionShell id="services" className="bg-surface">
            <SectionHeading
                title="Discover Our Range of Services"
                subtitle="Services"
                className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <NeumoCard className="p-8 h-full flex flex-col" variant="raised">
                            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                                {service.title}
                            </h3>
                            <p className="text-accent-foreground/70 mb-6 flex-grow">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-accent-foreground/60">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </NeumoCard>
                    </motion.div>
                ))}
            </div>
        </SectionShell>
    );
}
