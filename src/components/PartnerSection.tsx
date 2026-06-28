import React, { useState, useRef, useEffect } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

interface Thumbnail {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
  opacity: number;
  scale: number;
  createdAt: number;
}

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif'
];

export const PartnerSection: React.FC = () => {
  const containerRef = useInViewAnimation();
  const hoverContainerRef = useRef<HTMLDivElement>(null);
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const imageIndex = useRef<number>(0);
  const nextId = useRef<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return; // Limit spawn rate

    const rect = hoverContainerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = Math.random() * 20 - 10; // -10 to +10 deg
    const src = marqueeImages[imageIndex.current];
    
    imageIndex.current = (imageIndex.current + 1) % marqueeImages.length;
    lastSpawnTime.current = now;

    const newThumb: Thumbnail = {
      id: nextId.current++,
      x,
      y,
      src,
      rotation,
      opacity: 1,
      scale: 1,
      createdAt: now
    };

    setThumbnails((prev) => [...prev, newThumb]);
  };

  // requestAnimationFrame tick loop
  useEffect(() => {
    let frameId: number;

    const updateThumbnails = () => {
      const now = Date.now();
      
      setThumbnails((prev) => {
        return prev
          .map((t) => {
            const age = now - t.createdAt;
            if (age >= 1000) return null; // Expired after 1000ms
            
            const progress = age / 1000;
            
            return {
              ...t,
              opacity: 1 - progress, // Fade out
              scale: 1 - progress * 0.4 // Scale down
            };
          })
          .filter((t): t is Thumbnail => t !== null);
      });

      frameId = requestAnimationFrame(updateThumbnails);
    };

    frameId = requestAnimationFrame(updateThumbnails);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full py-12 px-6 bg-white font-sans flex justify-center"
    >
      <div 
        ref={hoverContainerRef}
        onMouseMove={handleMouseMove}
        className="opacity-0 animate-target relative overflow-hidden w-full max-w-7xl py-48 rounded-[40px] border border-[#F1F3F1] shadow-[0_4px_30px_rgba(0,0,0,0.03)] bg-white text-center flex flex-col items-center justify-center select-none cursor-crosshair"
      >
        {/* Render Spawning Thumbnails */}
        {thumbnails.map((t) => (
          <div
            key={t.id}
            className="absolute pointer-events-none z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-lg border border-white/50"
            style={{
              left: `${t.x}px`,
              top: `${t.y}px`,
              transform: `translate(-50%, -50%) rotate(${t.rotation}deg) scale(${t.scale})`,
              opacity: t.opacity,
              transition: 'transform 0.05s linear, opacity 0.05s linear'
            }}
          >
            <img src={t.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Heading */}
        <h2 className="relative z-20 font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-tight text-[#0D212C] mb-12 tracking-tight">
          build with us.
        </h2>

        {/* CTA Button */}
        <div className="relative z-20">
          <Button 
            variant="primary"
            data-cal-link="greekweb.io/intro-with-greek"
            data-cal-namespace="intro-with-greek"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="flex items-center gap-3 pl-2 pr-6 py-2 select-none cursor-pointer"
          >
            <img 
              src="/logo.jpg" 
              alt="greekweb logo"
              className="w-10 h-10 rounded-full object-cover shadow-sm bg-neutral-200 border border-white/20"
            />
            <span className="text-sm font-semibold tracking-wide text-white">tell us your ideas!</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default PartnerSection;
