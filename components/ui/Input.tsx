"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "w-full bg-surface text-foreground px-4 py-3 rounded-xl outline-none transition-all neu-pressed focus:ring-2 focus:ring-primary/50",
                className
            )}
            {...props}
        />
    );
}

export function Textarea({ className, ...props }: TextareaProps) {
    return (
        <textarea
            className={cn(
                "w-full bg-surface text-foreground px-4 py-3 rounded-xl outline-none transition-all neu-pressed focus:ring-2 focus:ring-primary/50 min-h-[120px]",
                className
            )}
            {...props}
        />
    );
}
