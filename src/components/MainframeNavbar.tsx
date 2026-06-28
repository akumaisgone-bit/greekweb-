import React, { useState } from 'react';

export const MainframeNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[11] px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent select-none font-sans">
        {/* Logo (Left side) */}
        <a href="#" className="flex items-center gap-3 select-none">
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
            Mainframe®
          </span>
          <span 
            className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1"
            dangerouslySetInnerHTML={{ __html: '&#10033;' }}
          />
        </a>

        {/* Desktop Nav Links (Center) - Hidden below md */}
        <div className="hidden md:flex flex-row items-center text-[23px] text-black">
          <a href="#" className="hover:opacity-60 transition-opacity">Labs</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Studio</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Openings</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Shop</a>
        </div>

        {/* Desktop CTA (Right) - Hidden below md */}
        <div className="hidden md:block">
          <a 
            href="#" 
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger button (visible below md) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-[5px] justify-center items-center w-8 h-8 z-[12] relative focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span 
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`} 
          />
          <span 
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`} 
          />
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm transition-opacity duration-300 flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-[28px] text-black font-normal">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Labs</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Studio</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Openings</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">Shop</a>
          <a 
            href="#" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-[28px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
};
