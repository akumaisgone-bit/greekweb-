import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

const baseTestimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder',
    company: 'FlowStream',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "greekweb didn't just build us a website; they engineered a growth machine. Their ability to translate our vision into a high-conversion, aesthetic interface was nothing short of brilliant.",
  },
  {
    name: 'Markus Vane',
    role: 'CMO',
    company: 'Zenith Tech',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "The turnaround time was aggressive, but the quality never wavered. They have an incredible eye for the 'Apple-meets-A24' aesthetic that modern brands need to stand out.",
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Product Designer',
    company: 'Nova Labs',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "We went from a stalled MVP to a polished, high-traffic platform in weeks. The team at greekweb understands the technical demands of a scalable web architecture better than anyone I’ve worked with.",
  },
  {
    name: 'David Chen',
    role: 'CEO',
    company: 'Shift Dynamics',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "Working with greekweb felt like having a veteran internal team. Clean code, seamless motion, and a relentless focus on user retention. They delivered exactly what we needed to dominate our niche.",
  },
  {
    name: 'David Zhang',
    role: 'Head of Design',
    company: 'Paradigm Labs',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: "Incredible work from start to finish. A deliberately small team at greekweb with exceptional visual vision and flawless execution. They transformed our product into a premium experience.",
  },
];

// Triple the list to create the seamless infinite scroll effect
const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

export const TestimonialCarousel: React.FC = () => {
  const containerRef = useInViewAnimation();
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  
  const [cardWidth, setCardWidth] = useState(427.5);
  const [currentIndex, setCurrentIndex] = useState(5); // Start at the middle set
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const gap = 24;

  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;

    const handleResize = () => {
      const width = container.offsetWidth;
      if (window.innerWidth < 768) {
        setCardWidth(width - 48); // Full width minus 48px padding breathing room on mobile
      } else {
        setCardWidth(427.5);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    window.addEventListener('resize', handleResize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const next = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Infinite cycle snap handler
  useEffect(() => {
    if (currentIndex < 5 || currentIndex >= 10) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        if (currentIndex < 5) {
          setCurrentIndex((prev) => prev + 5);
        } else if (currentIndex >= 10) {
          setCurrentIndex((prev) => prev - 5);
        }
        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Autoplay interval
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, transitionEnabled]);

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-white w-full overflow-hidden select-none font-sans"
    >
      {/* Header Row */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div 
          className="opacity-0 animate-target md:max-w-xl"
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight">
            what <span className="font-serif italic font-semibold">clients</span> say
          </h2>
        </div>

        {/* Ratings block right */}
        <div 
          className="opacity-0 animate-target flex items-center gap-3 md:mb-1 select-none"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-black fill-black shrink-0" />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-900">Clutch 5/5</span>
        </div>
      </div>

      {/* Auto-scrolling carousel viewport */}
      <div 
        ref={carouselContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full opacity-0 animate-target px-6"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="max-w-7xl mx-auto relative overflow-hidden">
          {/* Slider Strip Container */}
          <div 
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              transition: transitionEnabled ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              gap: `${gap}px`
            }}
          >
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 border border-[#F1F3F1] shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                {/* SVG Quote Icon */}
                <svg className="w-8 h-8 text-[#0D212C]/20 mb-5 shrink-0" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm14-12c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                </svg>
                
                {/* Quote Text */}
                <p className="text-base text-[#0D212C] leading-relaxed mb-6 italic select-none">
                  "{item.quote}"
                </p>

                {/* Author Row */}
                <div className="flex items-center gap-3">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover shadow-sm bg-neutral-100"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0D212C]">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      → {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual buttons */}
      <div 
        className="opacity-0 animate-target max-w-7xl mx-auto px-6 mt-8 flex items-center justify-end gap-3"
        style={{ animationDelay: '0.4s' }}
      >
        <button 
          onClick={prev}
          disabled={!transitionEnabled}
          className="w-12 h-12 rounded-full border border-[#0D212C]/20 hover:border-[#0D212C]/65 transition-colors flex items-center justify-center text-[#0D212C] hover:bg-neutral-50 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={next}
          disabled={!transitionEnabled}
          className="w-12 h-12 rounded-full border border-[#0D212C]/20 hover:border-[#0D212C]/65 transition-colors flex items-center justify-center text-[#0D212C] hover:bg-neutral-50 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
export default TestimonialCarousel;
