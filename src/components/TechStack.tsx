"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TECH = [
    { name: "Next.js", desc: "React framework for production." },
    { name: "TypeScript", desc: "Type safety for scalable apps." },
    { name: "Framer Motion", desc: "Advanced motion systems." },
    { name: "Three.js", desc: "3D graphics in the browser." },
    { name: "WebGL", desc: "Low-level GPU graphics." },
    { name: "GSAP", desc: "Professional grade animation." },
    { name: "Tailwind CSS", desc: "Utility-first styling." },
    { name: "Node.js", desc: "Performant backend systems." },
];

export default function TechStack() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#121212]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <h2 className="text-sm font-bold tracking-[0.5em] text-blue-500 uppercase mb-4">Stack</h2>
                <p className="text-3xl md:text-5xl font-black text-white max-w-2xl tracking-tighter uppercase">
                    Kinetic Technologies <br />
                    <span className="text-white/20">Powering Premium Apps</span>
                </p>
            </div>

            {/* Marquee Container */}
            <div className="flex overflow-hidden relative z-10 select-none border-y border-white/5 py-12">
                <motion.div
                    animate={{ x: ["0%", "-33.333%"] }}
                    transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                    className="flex gap-12 whitespace-nowrap min-w-max px-6"
                >
                    {[...TECH, ...TECH, ...TECH].map((item, index) => (
                        <TechCard key={`${item.name}-${index}`} name={item.name} desc={item.desc} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TechCard({ name, desc }: { name: string; desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className={cn(
                "group relative px-10 py-8 rounded-2xl border border-white/5 bg-white/5",
                "backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10"
            )}
        >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-blue-400">
                {name}
            </h3>
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">
                {desc}
            </p>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </motion.div>
    );
}
