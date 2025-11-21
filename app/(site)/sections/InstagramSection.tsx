"use client";

import { SectionShell } from "../components/SectionShell";
import { SectionHeading } from "../components/SectionHeading";
import { InstagramCarousel } from "../components/InstagramCarousel";

export function InstagramSection() {
    return (
        <SectionShell id="instagram" className="bg-surface">
            <SectionHeading
                title="Follow Our Journey"
                subtitle="Instagram"
                className="mb-12"
            />
            <InstagramCarousel />
        </SectionShell>
    );
}
