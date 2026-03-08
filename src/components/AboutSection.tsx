"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PILLARS = [
    {
        title: "Engineering",
        description: "Architecting scalable, performant systems with Next.js and high-level TypeScript.",
    },
    {
        title: "Motion",
        description: "Crafting fluid, cinematic experiences using Framer Motion and custom animation loops.",
    },
    {
        title: "Systems Thinking",
        description: "Designing holistic digital ecosystems where design and code live in perfect harmony.",
    },
];

export default function AboutSection() {
    return (
        <section className="relative min-h-screen w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                {/* Left: Portrait Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 group"
                >
                    <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                    <div className="absolute -inset-4 border border-white/5 -z-10" />

                    <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
                        <Image
                            src="/about-portrait.png"
                            alt="Shubham Gupta Portrait"
                            fill
                            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                            priority
                        />
                        {/* Grain Overlay for image */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05] contrast-150 brightness-150"
                            style={{ backgroundImage: 'url("/about-portrait.png")', filter: 'url(#noiseFilter)' }} />
                    </div>

                    {/* Philosophy Accent */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-8 -right-8 bg-blue-600 p-8 hidden md:block"
                    >
                        <p className="text-white text-xs font-black uppercase tracking-[0.3em] leading-relaxed">
                            Design <br /> Is How <br /> It Works.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right: Bio Text */}
                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Biography</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 relative inline-block">
                            Shubham Gupta
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-2 left-0 h-1 w-full bg-blue-600 origin-left"
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl"
                    >
                        A Senior Creative Developer bridging the gap between high-end design and scalable architecture.
                        I specialize in crafting digital experiences that feel human, fluid, and unmistakably premium.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                        {PILLARS.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex flex-col gap-3"
                            >
                                <div className="h-[1px] w-12 bg-white/20 mb-2" />
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider">{pillar.title}</h3>
                                <p className="text-white/40 text-[13px] leading-relaxed">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
