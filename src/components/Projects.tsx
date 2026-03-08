"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";





export const PROJECTS = [
    {
        slug: "project-alpha",
        title: "Project Alpha",
        category: "Web Application",
        description: "A high-performance dashboard with real-time analytics and data visualization.",
        tech: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
        color: "from-blue-500/20 to-cyan-500/20",
        image: "https://i.pinimg.com/control1/1200x/ea/a1/6c/eaa16c43a7c904c3246ef5e8f790677d.jpg",

        details: {
            problem: "The client needed a way to visualize massive datasets from IoT sensors without sacrificing browser performance or user clarity.",
            solution: "We implemented a custom D3.js engine integrated with Next.js Server Components to offload heavy computations, resulting in a 40% faster load time.",
            results: "Successfully deployed to 50k+ active daily users with a 99.9% uptime and significantly improved operational awareness.",
            client: "Global Logistics Ltd",
            year: "2024",
            features: ["Real-time Data Streaming", "Custom D3.js Visualizations", "Multi-tenant Architecture", "Low-latency WebSockets"]
        }
    },
    {
        slug: "project-beta",
        title: "Project Beta",
        category: "Mobile Design",
        description: "Intuitive mobile interface for a cutting-edge fintech startup.",
        tech: ["React Native", "Figma", "Tailwind", "Firebase"],
        color: "from-purple-500/20 to-pink-500/20",
        image: "https://i.pinimg.com/control1/1200x/23/db/68/23db68adc34a9dad0d6815443a007aab.jpg",
        details: {
            problem: "Fintech users were dropping off during the onboarding phase due to a complex, multi-step verification process.",
            solution: "Redesigned the entire flow with micro-interactions and progressive disclosure, reducing friction and cognitive load.",
            results: "Conversion rates increased by 25% within the first month post-launch, with average session duration up by 15%.",
            client: "Aura Fintech",
            year: "2023",
            features: ["Biometric Authentication", "Interactive Spending Charts", "One-click Verification", "Custom UI Components"]
        }
    },
    {
        slug: "project-gamma",
        title: "Project Gamma",
        category: "Brand Identity",
        description: "Complete rebranding and digital presence for an eco-conscious tech firm.",
        tech: ["Three.js", "GSAP", "Prism", "WebGL"],
        color: "from-emerald-500/20 to-teal-500/20",
        image: "https://i.pinimg.com/control1/1200x/23/db/68/23db68adc34a9dad0d6815443a007aab.jpg",
        details: {
            problem: "An eco-tech startup lacked a visual identity that conveyed both high-tech innovation and organic sustainability.",
            solution: "Created a 3D-driven web experience using WebGL that uses generative patterns to reflect environmental data in real-time.",
            results: "Won multiple Awwwards and CSSDA honors, securing $5M in Series A funding shortly after launch.",
            client: "EcoTree Systems",
            year: "2024",
            features: ["Generative WebGL Scenes", "Dynamic Content Transitions", "Interactive 3D Assets", "Eco-data Integration"]
        }
    },
];

export default function Projects() {
    return (
        <section id="work" className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
                >
                    <div>
                        <span className="text-xs font-black tracking-[1em] text-blue-500 uppercase mb-4 block">Portfolio</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight">
                            Selected <br /> <span className="text-white/20">Works.</span>
                        </h2>
                    </div>
                    <div className="h-[1px] flex-grow bg-white/5 mx-12 hidden md:block" />
                    <p className="text-white/40 text-sm max-w-xs uppercase tracking-widest font-bold">
                        03 — Case Studies <br /> 2023 / 2024
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <Link href={`/work/${project.slug}`} key={project.slug}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={cn(
                                    "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 h-full flex flex-col justify-between",
                                    "backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 clickable"
                                )}
                            >
                                {/* Image Background Decor */}
                                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div
                                    className={cn(
                                        "absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                                        project.color
                                    )}
                                />

                                <div>
                                    <div className="flex justify-between items-start mb-12">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                            {project.category}
                                        </p>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                                        {project.title.split(' ')[0]} <br />
                                        <span className="text-white/20">{project.title.split(' ')[1]}</span>
                                    </h3>

                                    <p className="text-white/40 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase font-black text-white/40 tracking-widest"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
