"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
}

export function Button({
    className,
    variant = "primary",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "neu-btn px-8 py-3 font-medium rounded-xl transition-colors",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
