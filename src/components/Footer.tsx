import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const Footer: React.FC = () => {
  const ref = useInViewAnimation();

  return (
    <footer 
      ref={ref}
      className="opacity-0 animate-target w-full py-12 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 bg-white font-sans select-none border-t border-[#F1F3F1] mt-12"
    >
      {/* Left side */}
      <div>
        <Button 
          variant="primary" 
          data-cal-link="greekweb.io/intro-with-greek"
          data-cal-namespace="intro-with-greek"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="cursor-pointer"
        >
          Start a chat
        </Button>
      </div>

      {/* Right side */}
      <div className="flex items-start gap-8 sm:gap-12">
        <ArrowUpRight className="w-8 h-8 text-[#051A24] shrink-0 mt-1" />
        
        <div className="grid grid-cols-2 gap-12 sm:gap-20">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <a href="#work" className="text-base text-[#051A24] hover:opacity-70 transition-opacity font-medium">
              Work
            </a>
            <a href="#about" className="text-base text-[#051A24] hover:opacity-70 transition-opacity font-medium">
              About
            </a>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <a href="https://www.instagram.com/greekweb.in/" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity font-medium">
              Instagram
            </a>
            <a href="https://discord.gg/UeCttZUB5" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition-opacity font-medium">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
