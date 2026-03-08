"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Zap } from "lucide-react";

const SERVICES = [
    {
        title: "Creative Development",
        desc: "Building immersive digital experiences where motion and code meet to create something unforgettable.",
        icon: <Code2 className="w-8 h-8 text-blue-500" />,
    },
    {
        title: "Frontend Architecture",
        desc: "Structuring scalable, high-performance Next.js applications with deep TypeScript integration.",
        icon: <Layout className="w-8 h-8 text-blue-500" />,
    },
    {
        title: "Motion Systems",
        desc: "Crafting bespoke animation languages that guide users and reinforce brand identity across platform.",
        icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
];

export default function Services() {
    return (
        <section className="relative min-h-screen py-32 bg-[#121212] px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <span className="text-xs font-black tracking-[1em] text-white/30 uppercase mb-4 block">Capabilities</span>
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                        Exceptional <br />
                        Digital Services.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                            className="group relative p-12 bg-[#121212] flex flex-col justify-between aspect-square"
                        >
                            <div className="flex justify-between items-start">
                                {service.icon}
                                <span className="text-white/10 font-bold text-5xl tracking-tighter group-hover:text-blue-500/20 transition-colors duration-500">
                                    0{index + 1}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed max-w-xs transition-colors group-hover:text-white/60">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Animated corner detail */}
                            <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                                <div className="absolute top-0 right-0 w-px h-full bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="absolute top-0 right-0 h-px w-full bg-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
