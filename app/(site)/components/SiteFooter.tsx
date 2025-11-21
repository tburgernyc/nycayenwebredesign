"use client";

import Link from "next/link";
import { InstagramFeedPlaceholder } from "./InstagramFeedPlaceholder";

export function SiteFooter() {
    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Contact */}
                    <div>
                        <h3 className="font-serif text-2xl text-foreground mb-4">Nycayen Moore</h3>
                        <p className="text-accent-foreground/60 max-w-xs mb-4">
                            Expert hair styling services anywhere in the US.
                        </p>
                        <div className="space-y-2 text-sm text-accent-foreground/60">
                            <p>
                                <a href="tel:+13475563860" className="hover:text-primary transition-colors">
                                    (347) 556-3860
                                </a>
                            </p>
                            <p>
                                <a href="mailto:info@nycayenmoorenyc.com" className="hover:text-primary transition-colors">
                                    info@nycayenmoorenyc.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg text-foreground mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Services", "Portfolio", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-accent-foreground/60 hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social / Instagram */}
                    <div>
                        <InstagramFeedPlaceholder />
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-accent-foreground/40">
                    <p>&copy; {new Date().getFullYear()} Nycayen Moore Hair Artistry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
