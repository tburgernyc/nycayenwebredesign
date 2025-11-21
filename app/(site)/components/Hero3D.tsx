"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { ImageCarousel3D } from "./ImageCarousel3D";
import { motion } from "motion/react";

export function Hero3D() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-surface">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_50%)]" />

            {/* 3D Canvas */}
            <div className="absolute inset-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <Suspense fallback={null}>
                        <ImageCarousel3D />
                    </Suspense>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.5}
                        autoRotate
                        autoRotateSpeed={0.5}
                    />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                <div className="max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-lg"
                    >
                        Elevate Your Look,
                        <br />
                        <span className="text-primary">Elevate Your Life</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-xl md:text-2xl text-accent-foreground/90 mb-12 max-w-2xl mx-auto drop-shadow-md"
                    >
                        Expert hair styling services anywhere in the US
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#portfolio"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View Portfolio
                        </a>
                        <a
                            href="tel:+13475563860"
                            className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                            (347) 556-3860
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
