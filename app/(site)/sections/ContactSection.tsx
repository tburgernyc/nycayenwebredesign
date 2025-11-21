"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionShell } from "../components/SectionShell";
import { SectionHeading } from "../components/SectionHeading";
import { NeumoCard } from "../components/NeumoCard";
import { Button } from "../components/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { trackEvent } from "@/lib/analytics";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            service: formData.get("service"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus("success");
            trackEvent("contact_form_submit", { service: data.service });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
            trackEvent("contact_form_error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionShell id="contact" className="bg-background relative">
            <SectionHeading
                title="Book Your Appointment"
                subtitle="Get in Touch"
                className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="font-serif text-2xl text-white mb-8">Contact Info</h4>
                    <div className="space-y-8 text-accent-foreground/80 text-lg">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary shrink-0 neu-flat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <strong className="text-primary block mb-1 font-medium">Address</strong>
                                123 Luxury Lane, SoHo<br />
                                New York, NY 10012
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary shrink-0 neu-flat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <strong className="text-primary block mb-1 font-medium">Phone</strong>
                                <a href="tel:+13475563860" className="hover:text-primary transition-colors">
                                    (347) 556-3860
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary shrink-0 neu-flat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <strong className="text-primary block mb-1 font-medium">Email</strong>
                                <a href="mailto:info@nycayenmoorenyc.com" className="hover:text-primary transition-colors">
                                    info@nycayenmoorenyc.com
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary shrink-0 neu-flat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <div>
                                <strong className="text-primary block mb-1 font-medium">Hours</strong>
                                Tue - Sat: 10am - 7pm<br />
                                Sun - Mon: Closed
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <NeumoCard variant="flat" className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstName" placeholder="First Name" required disabled={isSubmitting} />
                                <Input name="lastName" placeholder="Last Name" required disabled={isSubmitting} />
                            </div>
                            <Input name="email" type="email" placeholder="Email Address" required disabled={isSubmitting} />

                            <div className="relative">
                                <select
                                    name="service"
                                    className="w-full bg-surface text-foreground px-4 py-3 rounded-xl outline-none transition-all neu-pressed focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer disabled:opacity-50"
                                    defaultValue=""
                                    required
                                    disabled={isSubmitting}
                                >
                                    <option value="" disabled>Select Service</option>
                                    <option value="hair-styling">Hair Styling Services</option>
                                    <option value="bridal">Bridal Services</option>
                                    <option value="grooming">Grooming Services</option>
                                    <option value="color">Color Services</option>
                                    <option value="wig">Wig Styling & Installation</option>
                                    <option value="special-events">Special Events</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent-foreground/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>

                            <Textarea name="message" placeholder="Message or Specific Requests" required disabled={isSubmitting} />

                            <Button variant="solid" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Request"}
                            </Button>

                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-lg bg-green-500/10 text-green-500 text-center text-sm font-medium"
                                >
                                    Message sent successfully! We'll be in touch soon.
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-lg bg-red-500/10 text-red-500 text-center text-sm font-medium"
                                >
                                    Something went wrong. Please try again later.
                                </motion.div>
                            )}
                        </form>
                    </NeumoCard>
                </motion.div>
            </div>
        </SectionShell>
    );
}
