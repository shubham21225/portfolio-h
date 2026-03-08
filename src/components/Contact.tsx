"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative py-32 bg-[#121212] px-6 md:px-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="text-xs font-black tracking-[1em] text-white/30 uppercase mb-4 block">Inquiry</span>
                        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                            Let's <br />
                            Connect.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-8 mt-12"
                    >
                        <a href="https://github.com/shubham21225" className="flex items-center gap-2 group">
                            <Github className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/shubham-gupta-dev/" className="flex items-center gap-2 group">
                            <Linkedin className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Linkedin</span>
                        </a>
                        <a href="https://twitter.com/shubham21225" className="flex items-center gap-2 group">
                            <Twitter className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Twitter</span>
                        </a>
                    </motion.div>
                </div>

                <div className="relative group">
                    <Magnetic>
                        <motion.a
                            href="mailto:hello@example.com"
                            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white flex items-center justify-center overflow-hidden group/btn"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />

                            <div className="relative z-10 flex flex-col items-center gap-2 group-hover/btn:text-white transition-colors duration-500">
                                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                                <span className="text-xs md:text-sm font-black uppercase tracking-widest">Get in Touch</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>

                            {/* Animated Border */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity animate-pulse" />
                        </motion.a>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}
