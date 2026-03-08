"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/components/Projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyPage() {
    const params = useParams();
    const router = useRouter();
    const project = PROJECTS.find((p) => p.slug === params.slug);

    if (!project) return <div>Project not found</div>;

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#121212] min-h-screen pb-32"
        >
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]" />
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-24 max-w-7xl mx-auto flex flex-col items-start">
                    <Link href="/#work">
                        <motion.button
                            whileHover={{ x: -10 }}
                            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-[0.2em]">Back to Work</span>
                        </motion.button>
                    </Link>

                    <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                        {project.title.split(' ')[0]} <br />
                        <span className="text-white/20">{project.title.split(' ')[1]}</span>
                    </h1>
                </div>
            </section>

            {/* Meta Info */}
            <section className="max-w-7xl mx-auto px-6 md:px-24 py-20 border-b border-white/5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <MetaItem label="Client" value={project.details?.client || "Confidential"} />
                    <MetaItem label="Year" value={project.details?.year || "2024"} />
                    <MetaItem label="Stack" value={project.tech.join(" / ")} />
                    <MetaItem label="Outcome" value="Live Application" />
                </div>
            </section>

            {/* Content Layout */}
            <section className="max-w-7xl mx-auto px-6 md:px-24 py-32 flex flex-col lg:flex-row gap-32">
                {/* Sticky Side Nav */}
                <aside className="hidden lg:block w-48 shrink-0">
                    <nav className="sticky top-32 flex flex-col gap-8">
                        <SideNavLink label="Overview" href="#overview" active />
                        <SideNavLink label="Problem" href="#problem" />
                        <SideNavLink label="Process" href="#process" />
                        <SideNavLink label="Features" href="#features" />
                        <SideNavLink label="Results" href="#results" />
                    </nav>
                </aside>

                <div className="flex-grow flex flex-col gap-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="overview"
                        className="max-w-2xl"
                    >
                        <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8">Overview</h2>
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium">
                            {project.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="problem"
                        className="max-w-2xl"
                    >
                        <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8">The Problem</h2>
                        <p className="text-lg text-white/40 leading-relaxed mb-8">
                            {project.details?.problem}
                        </p>
                        <div className="h-[400px] w-full bg-white/5 rounded-3xl border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 uppercase font-black text-xs tracking-widest">
                                [Analysis Visualization]
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="process"
                        className="max-w-2xl"
                    >
                        <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8">Our Process</h2>
                        <p className="text-lg text-white/40 leading-relaxed mb-8">
                            {project.details?.solution}
                        </p>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                                <span className="text-white/80">Iterative prototyping for critical user journeys.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                                <span className="text-white/80">Seamless integration with existing client infrastructure.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="features"
                        className="max-w-2xl"
                    >
                        <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.details?.features?.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="text-sm font-bold text-white/80 uppercase tracking-widest">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="results"
                        className="max-w-2xl"
                    >
                        <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-8">Results</h2>
                        <p className="text-2xl md:text-4xl text-white font-black tracking-tighter leading-tight">
                            {project.details?.results}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-7xl mx-auto px-6 md:px-24 py-32 text-center border-t border-white/5">
                <h3 className="text-sm font-black text-white/20 uppercase tracking-[0.5em] mb-12">Next Project</h3>
                <Link href={`/work/${PROJECTS[(PROJECTS.findIndex(p => p.slug === params.slug) + 1) % PROJECTS.length].slug}`}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="text-6xl md:text-9xl font-black text-white/5 hover:text-white transition-all duration-700 uppercase tracking-tighter cursor-pointer group"
                    >
                        {PROJECTS[(PROJECTS.findIndex(p => p.slug === params.slug) + 1) % PROJECTS.length].title}
                    </motion.div>
                </Link>
            </section>
        </motion.main>
    );
}

function MetaItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{label}</span>
            <span className="text-sm font-bold text-white tracking-wide">{value}</span>
        </div>
    );
}

function SideNavLink({ label, href, active = false }: { label: string; href: string; active?: boolean }) {
    return (
        <a
            href={href}
            className={cn(
                "text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-white",
                active ? "text-blue-500 border-l-2 border-blue-500 pl-4" : "text-white/20 pl-4 border-l-2 border-transparent"
            )}
        >
            {label}
        </a>
    );
}
