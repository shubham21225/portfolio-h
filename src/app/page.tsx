import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  // Generate the frame paths based on the actual filenames found
  const frameCount = 105;
  const frames = Array.from({ length: frameCount }, (_, i) => {
    const frameNumber = i.toString().padStart(3, "0");
    return `/sequence/frame_${frameNumber}_delay-0.066s.png`;
  });

  return (
    <main className="relative min-h-screen bg-[#121212]">
      {/* Scroll-Linked Animation Section */}
      <ScrollyCanvas frames={frames}>
        {/* Parallax Content Layer - Nested to share scroll progress */}
        <Overlay />
      </ScrollyCanvas>

      {/* Cinematic About Section */}
      <AboutSection />

      {/* Services Grid */}
      <Services />

      {/* Kinetic Tech Stack */}
      <TechStack />

      {/* Projects Grid Section */}
      <Projects />

      {/* Luxury Testimonials */}
      <Testimonials />

      {/* High-end Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center bg-[#121212]">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
          &copy; 2024 Shubham Gupta — Design & Engineering. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
