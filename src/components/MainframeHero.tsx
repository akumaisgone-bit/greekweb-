import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { BackgroundVideo } from './BackgroundVideo';
import { MainframeNavbar } from './MainframeNavbar';

export const MainframeHero: React.FC = () => {
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 38, 600);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const options = ["Brand", "Digital", "Campaign", "Other"];

  const toggleService = (service: string) => {
    setSelectedServices((prev) => 
      prev.includes(service) 
        ? prev.filter((s) => s !== service) 
        : [...prev, service]
    );
  };

  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen w-full">
      {/* Background Video Component (with Native Scrubbing) */}
      <BackgroundVideo />

      {/* Interactive Navbar Header */}
      <MainframeNavbar />

      {/* Content Layout Container */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main id="spade-hero" className="w-full max-w-7xl mx-auto px-6 py-28 sm:py-32 lg:py-12 flex-1 flex flex-col justify-center select-none">
          
          {/* Headline drop-in wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Secondary Description text motion.div */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
              Whether you have questions, feedback, <br /> drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Interactive Multi-Select Service Pills Section */}
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight mb-2 text-black">
              What sort of service?
            </h2>
            <p className="opacity-85 text-[#738273] text-sm sm:text-base mb-8">
              Select all that apply
            </p>

            {/* Pills flex wrap container */}
            <div className="flex flex-wrap gap-3">
              {options.map((option) => {
                const isActive = selectedServices.includes(option);
                return (
                  <motion.button
                    key={option}
                    onClick={() => toggleService(option)}
                    className={`flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors select-none ${
                      isActive 
                        ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5 transform' 
                        : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="inline-flex items-center justify-center mr-1.5 shrink-0"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {option}
                  </motion.button>
                );
              })}
            </div>

            {/* Contingent Feedback Status Banner */}
            <div className="mt-8 min-h-[50px] w-full max-w-xl">
              <AnimatePresence mode="wait">
                {selectedServices.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="italic text-xs text-neutral-900"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#FAFBF9] border border-[#EAECE9] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                      <div className="text-sm text-neutral-800">
                        <span className="text-[11px] uppercase tracking-wider text-[#738273] font-medium block">
                          Ready to inquire about:
                        </span>
                        <span className="font-semibold text-neutral-900 mt-1 block">
                          {selectedServices.join(', ')}
                        </span>
                      </div>
                      <button className="flex items-center gap-1.5 px-4 py-2 text-[#4D6D47] hover:text-[#385133] uppercase text-xs font-bold tracking-wider select-none shrink-0 transition-colors">
                        Let's Go
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};
export default MainframeHero;
