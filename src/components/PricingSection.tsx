import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const PricingSection: React.FC = () => {
  const containerRef = useInViewAnimation();

  return (
    <section 
      ref={containerRef}
      className="w-full py-12 px-6 bg-white font-sans select-none"
    >
      <div className="w-full flex md:justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Card 1 (Dark) */}
          <div 
            className="opacity-0 animate-target rounded-[40px] bg-[#051A24] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col justify-between min-h-[340px]"
            style={{ 
              animationDelay: '0.1s',
              boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.5)' 
            }}
          >
            <div>
              <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-2">
                Monthly Partnership
              </h3>
              <p className="text-sm text-[#E0EBF0] opacity-85 mb-8 leading-relaxed">
                A dedicated creative design team. <br />
                You work directly with Viktor.
              </p>
            </div>
            
            <div>
              <div className="mb-6">
                <span className="text-2xl font-semibold text-[#F6FCFF] block">$5,000</span>
                <span className="text-xs text-[#E0EBF0]/70 block mt-1">Monthly</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="primary" 
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F6FCFF] text-[#051A24] hover:bg-white/90"
                >
                  Start a chat
                </Button>
                <Button 
                  variant="secondary" 
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-[#F6FCFF]/20 text-[#F6FCFF] hover:bg-white/10"
                  style={{ boxShadow: 'none' }}
                >
                  How it works
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 (Light) */}
          <div 
            className="opacity-0 animate-target rounded-[40px] bg-white border border-[#F1F3F1] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.08)] min-h-[340px]"
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <h3 className="text-[22px] font-medium text-[#0D212C] mb-2">
                Custom Project
              </h3>
              <p className="text-sm text-[#273C46] opacity-85 mb-8 leading-relaxed">
                Fixed scope, fixed timeline. <br />
                Same team, same standards.
              </p>
            </div>

            <div>
              <div className="mb-6">
                <span className="text-2xl font-semibold text-[#0D212C] block">$5,000</span>
                <span className="text-xs text-[#273C46]/70 block mt-1">Minimum</span>
              </div>
              <div>
                <Button 
                  variant="tertiary" 
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Start a chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
