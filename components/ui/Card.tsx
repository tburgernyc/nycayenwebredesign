"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

export function Card({
    className,
    hoverEffect = true,
    children,
    ...props
}: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : undefined}
            className={cn(
                "neu-flat p-6 rounded-2xl transition-all duration-300",
                hoverEffect && "hover:shadow-lg",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
