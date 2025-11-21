"use client";

import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Input, Textarea } from "../ui/Input";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                        Get in Touch
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground">
                        Book Your Appointment
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="font-serif text-2xl text-white mb-6">Contact Info</h4>
                        <div className="space-y-6 text-accent-foreground/80 text-lg">
                            <p>
                                <strong className="text-primary block mb-1">Address</strong>
                                123 Luxury Lane, SoHo<br />
                                New York, NY 10012
                            </p>
                            <p>
                                <strong className="text-primary block mb-1">Phone</strong>
                                (212) 555-0123
                            </p>
                            <p>
                                <strong className="text-primary block mb-1">Email</strong>
                                appointments@nycayen.com
                            </p>
                            <p>
                                <strong className="text-primary block mb-1">Hours</strong>
                                Tue - Sat: 10am - 7pm<br />
                                Sun - Mon: Closed
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="neu-flat p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                            </div>
                            <Input type="email" placeholder="Email Address" />
                            <Input type="tel" placeholder="Phone Number" />
                            <Textarea placeholder="Message or Service Request" />
                            <Button className="w-full">Send Request</Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
