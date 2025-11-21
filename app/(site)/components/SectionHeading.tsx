"use client";

import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    align = "center",
    className,
}: SectionHeadingProps) {
    const alignClasses = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("mb-16 max-w-3xl", alignClasses[align], className)}
        >
            {subtitle && (
                <h2 className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
                    {subtitle}
                </h2>
            )}
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                {title}
            </h3>
        </motion.div>
    );
}
