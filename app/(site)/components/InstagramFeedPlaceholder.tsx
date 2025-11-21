"use client";

import { NeumoCard } from "./NeumoCard";
import { Button } from "./Button";

export function InstagramFeedPlaceholder() {
    return (
        <div className="py-8 border-t border-white/5">
            <div className="flex items-center justify-between mb-6">
                <h4 className="font-serif text-lg text-foreground">Follow on Instagram</h4>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                    @nycayenmoore
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="aspect-square bg-surface rounded-lg relative overflow-hidden group cursor-pointer"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-accent-foreground/20 group-hover:text-primary/50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs font-medium">View Post</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
