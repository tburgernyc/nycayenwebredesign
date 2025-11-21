"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef, ReactNode } from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "solid" | "ghost" | "outline";
    color?: "primary" | "secondary";
    asChild?: boolean;
    children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        className,
        variant = "solid",
        color = "primary",
        asChild = false,
        children,
        ...props
    },
    ref
) {
    const baseStyles = "px-6 py-3 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        solid: {
            primary: "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
            secondary: "bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
        },
        outline: {
            primary: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
            secondary: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        },
        ghost: {
            primary: "text-primary hover:bg-primary/10",
            secondary: "text-secondary hover:bg-secondary/10",
        },
    };

    const classes = cn(
        baseStyles,
        variants[variant][color],
        className
    );

    if (asChild && children) {
        // Clone the child element and add our classes
        const child = children as React.ReactElement<{ className?: string }>;
        const Component = child.type as any;
        return (
            <Component
                {...child.props}
                className={cn(classes, child.props.className)}
            />
        );
    }

    return (
        <motion.button
            ref={ref}
            whileTap={{ scale: 0.98 }}
            className={classes}
            {...props}
        >
            {children}
        </motion.button>
    );
});
