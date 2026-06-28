import React, { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { GreekwebLogo } from './GreekwebLogo';
import { MorphingText } from './ui/liquid-text';

export const HeroSection: React.FC = () => {
  const heroRef = useInViewAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const texts = ["greekweb.", "lets build!"];

  return (
    <section 
      ref={heroRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-12 flex flex-col items-center select-none font-sans bg-white"
    >
      {/* 1. Massive Top Logo & Brand Name Header */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="opacity-0 animate-target flex flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 w-full select-none cursor-pointer"
        style={{ animationDelay: '0.1s' }}
      >
        <GreekwebLogo className="w-12 h-12 xs:w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-sm shrink-0 border border-[#F1F3F1]" />
        
        <MorphingText 
          texts={texts}
          isHovered={isHovered}
          className="w-[160px] xs:w-[200px] sm:w-[380px] md:w-[500px] lg:w-[650px] h-10 xs:h-12 sm:h-24 md:h-32 lg:h-40 text-[32px] xs:text-[40px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-semibold text-[#051A24] tracking-tighter leading-none select-none text-left"
        />
      </div>
    </section>
  );
};
export default HeroSection;
