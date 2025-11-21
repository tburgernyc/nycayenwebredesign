"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NeumoCardProps extends HTMLMotionProps<"div"> {
    variant?: "flat" | "raised" | "pressed";
    accentBorder?: boolean;
}

export function NeumoCard({
    className,
    variant = "flat",
    accentBorder = false,
    children,
    ...props
}: NeumoCardProps) {
    const variants = {
        flat: "neu-flat",
        raised: "neu-raised",
        pressed: "neu-pressed",
    };

    return (
        <motion.div
            className={cn(
                "p-6 transition-all duration-300",
                variants[variant],
                accentBorder && "border border-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
