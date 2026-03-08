"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Alex Rivera",
        role: "Director of Product",
        company: "Vanguard Tech",
        text: "Working with Shubham was a revelation. His ability to translate complex logic into beautiful, fluid motion is unmatched in the industry.",
    },
    {
        name: "Sarah Chen",
        role: "Lead Designer",
        company: "Creative Studio",
        text: "The scrollytelling experience he built for our brand exceeded every expectation. It's not just a website; it's a cinematic journey.",
    },
    {
        name: "Marcus Thorne",
        role: "CTO",
        company: "Nexus Labs",
        text: "Technically brilliant and aesthetically sharp. He understands the architecture as deeply as the visual impact.",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-32 bg-[#121212] overflow-hidden">
            {/* Background Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Quote className="w-12 h-12 text-blue-600/40 mx-auto" />
                </motion.div>

                <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center px-4"
                        >
                            <p className="text-xl md:text-3xl text-white font-medium leading-tight mb-8 italic">
                                "{TESTIMONIALS[index].text}"
                            </p>

                            <div className="flex flex-col items-center">
                                <span className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                                    {TESTIMONIALS[index].name}
                                </span>
                                <span className="text-white/40 text-xs uppercase tracking-tighter">
                                    {TESTIMONIALS[index].role} — {TESTIMONIALS[index].company}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-center gap-8 mt-12">
                    <button
                        onClick={() => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                        className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>

                    <div className="flex gap-2">
                        {TESTIMONIALS.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-blue-600' : 'w-2 bg-white/10'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                        className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}
