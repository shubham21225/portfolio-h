"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollyProgress } from "./ScrollyCanvas";

export default function Overlay() {
    const scrollYProgress = useScrollyProgress();
    // Opacity transforms for each section
    // We ensure they all hit 0 before the scrolly section ends (proxied by scrollYProgress reaching 1)
    const section1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
    const section2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const section3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.85, 0.9], [0, 1, 1, 0]);

    // Global overlay fade-out to ensure absolute zero overlap with subsequent sections
    const globalOpacity = useTransform(scrollYProgress, [0.93, 0.98], [1, 0]);

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.5], [100, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [100, 0]);

    return (
        <motion.div
            style={{ opacity: globalOpacity }}
            className="pointer-events-none absolute inset-0 z-10 font-sans"
        >
            {/* Section 1: Center */}
            <motion.section
                style={{ opacity: section1Opacity, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
                    My Name. <br />
                    <span className="text-white/40">Shubham Gupta.</span>
                </h1>
                <p className="mt-4 text-sm md:text-base text-white/60 tracking-widest uppercase">
                    Scroll to Explore
                </p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-8 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-blue-500 rounded-full" />
                </motion.div>
            </motion.section>

            {/* Section 2: Left Aligned */}
            <motion.section
                style={{ opacity: section2Opacity, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center p-12 md:p-24"
            >
                <h2 className="max-w-xl text-4xl md:text-6xl font-bold leading-[1.1] text-white">
                    I build <span className="text-blue-500 italic">digital</span> <br />
                    experiences.
                </h2>
                <div className="mt-6 h-[1px] w-24 bg-white/20" />
            </motion.section>

            {/* Section 3: Right Aligned */}
            <motion.section
                style={{ opacity: section3Opacity, y: y3 }}
                className="absolute inset-0 flex flex-col items-end justify-center p-12 md:p-24 text-right"
            >
                <h2 className="max-w-xl text-4xl md:text-6xl font-bold leading-[1.1] text-white">
                    Bridging <span className="text-purple-500 underline decoration-2 underline-offset-8">design</span> <br />
                    and engineering.
                </h2>
                <div className="mt-6 h-[1px] w-24 bg-white/20 ml-auto" />
            </motion.section>
        </motion.div>
    );
}
