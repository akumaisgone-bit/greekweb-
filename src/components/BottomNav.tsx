import React from 'react';
import { GreekwebLogo } from './GreekwebLogo';

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 select-none">
      <div 
        className="flex items-center gap-3 bg-white rounded-full pl-4 pr-1.5 border border-[#F1F3F1] h-11"
        style={{
          boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 12px 36px -4px rgba(0,0,0,0.12), 0 4px 16px -2px rgba(0,0,0,0.06)'
        }}
      >
        {/* Small .gw Logo Icon */}
        <GreekwebLogo className="w-7 h-7 rounded-lg shrink-0 border border-[#F1F3F1]" />

        {/* Work link */}
        <a 
          href="#work" 
          className="text-xs sm:text-sm font-semibold text-[#051A24] hover:opacity-75 transition-opacity px-1"
        >
          Work
        </a>

        {/* Divider */}
        <span className="inline-block w-[1px] h-4 bg-neutral-200" />

        {/* Bright blue Book a call button */}
        <button 
          data-cal-link="greekweb.io/intro-with-greek"
          data-cal-namespace="intro-with-greek"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="inline-flex items-center justify-center bg-[#2563EB] text-white text-xs font-semibold px-4 h-8 rounded-full hover:bg-blue-600 active:scale-95 transition-all shadow-sm shrink-0 cursor-pointer"
        >
          Book a call
        </button>
      </div>
    </div>
  );
};
export default BottomNav;
