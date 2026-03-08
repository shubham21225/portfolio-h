"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ScrollContextType {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollyProgress = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScrollyProgress must be used within ScrollyCanvas");
  return context.scrollYProgress;
};

interface ScrollyCanvasProps {
  frames: string[];
  children?: React.ReactNode;
}

export default function ScrollyCanvas({ frames, children }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

  // Opacity of the entire sticky container to fade out when zooming into the next section
  const containerOpacity = useTransform(scrollYProgress, [0.92, 0.98], [1, 0]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = async () => {
      const promises = frames.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedImages[index] = img;
            loadedCount++;
            if (loadedCount === frames.length) {
              setImages(loadedImages);
              setIsLoaded(true);
            }
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${src}`);
            resolve();
          };
        });
      });
      await Promise.all(promises);
    };

    preloadImages();
  }, [frames]);

  // Draw function
  const renderCanvas = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const img = images[index];

    if (canvas && context && img) {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Object-fit: cover logic
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      }

      context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }
  };

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        const currentFrame = Math.floor(frameIndex.get());
        renderCanvas(currentFrame);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  // Listen to frame changes
  useEffect(() => {
    return frameIndex.onChange((v) => {
      renderCanvas(Math.floor(v));
    });
  }, [images, frameIndex]);


  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      <div ref={containerRef} className="relative h-[500vh] w-full">
        <motion.div
          style={{ opacity: containerOpacity }}
          className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]"
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-white/50 font-medium z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
              >
                Loading Experience...
              </motion.div>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
          />
          {children}
        </motion.div>
      </div>
    </ScrollContext.Provider>
  );
}
