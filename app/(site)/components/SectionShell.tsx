import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export function SectionShell({
    children,
    id,
    className,
    ...props
}: SectionShellProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
