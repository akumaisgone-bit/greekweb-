import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="animate-fade-down relative z-20 w-full">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
        {/* Logo Left */}
        <a href="#" className="flex items-center gap-2 text-gray-900 select-none">
          <Logo className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          <span className="font-semibold text-lg sm:text-xl tracking-tight">Questly</span>
        </a>

        {/* Desktop Nav Links (Hidden below md) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center gap-1 text-[13px] text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Toolkit
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="text-[13px] text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Plans
          </a>
          <a href="#" className="text-[13px] text-gray-700 hover:text-gray-900 font-medium transition-colors">
            News
          </a>
        </div>

        {/* CTA + Hamburger Right */}
        <div className="flex items-center gap-3">
          <button className="bg-gray-900 text-white text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-900 hover:bg-gray-900/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-4 right-4 top-full rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-gray-200 px-5 py-3 animate-fade-up flex flex-col shadow-lg">
          <a 
            href="#" 
            className="flex items-center justify-between text-[15px] text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-200 last:border-b-0"
            onClick={() => setIsOpen(false)}
          >
            <span>Toolkit</span>
            <ChevronDown className="w-4 h-4" />
          </a>
          <a 
            href="#" 
            className="block text-[15px] text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-200 last:border-b-0"
            onClick={() => setIsOpen(false)}
          >
            Plans
          </a>
          <a 
            href="#" 
            className="block text-[15px] text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-200 last:border-b-0"
            onClick={() => setIsOpen(false)}
          >
            News
          </a>
        </div>
      )}
    </nav>
  );
};
