import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const BookingSection: React.FC = () => {
  const containerRef = useInViewAnimation();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const C = window as any;
    const mountInline = () => {
      if (C.Cal && C.Cal.ns && C.Cal.ns["intro-with-greek"]) {
        C.Cal.ns["intro-with-greek"]("inline", {
          elementOrSelector: "#my-cal-inline-intro-with-greek",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
          calLink: "greekweb.io/intro-with-greek",
        });
      } else {
        setTimeout(mountInline, 100);
      }
    };
    mountInline();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-16 px-6 max-w-6xl mx-auto select-none font-sans bg-white border-t border-[#F1F3F1] mt-8"
    >
      {/* Heading block with rating */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <h2 className="opacity-0 animate-target font-serif text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-[#0D212C] tracking-tight max-w-2xl">
          Let's design the right <br className="hidden sm:inline" />
          thing the right way.
        </h2>

        {/* Ratings block */}
        <div className="opacity-0 animate-target flex items-center gap-3 shrink-0" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-black fill-black shrink-0" />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-900">Clutch 5/5</span>
        </div>
      </div>

      {/* Calendar widget container */}
      <div 
        className="opacity-0 animate-target w-full rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm p-4 min-h-[650px] relative flex flex-col justify-center"
        style={{ animationDelay: '0.2s' }}
      >
        {/* Real Cal.com container */}
        <div 
          style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }} 
          id="my-cal-inline-intro-with-greek"
        />
      </div>

      {/* Sub-footer text */}
      <p className="text-center text-xs font-semibold text-slate-400 mt-6 select-none uppercase tracking-wider">
        Trusted by 40+ industry leaders
      </p>
    </section>
  );
};

export default BookingSection;
