import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { ScaledDashboard, DashboardMockup } from './DashboardMockup';

export const Hero: React.FC = () => {
  const bgImageUrl = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85';
  const grassImageUrl = 'https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png';

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query');
    if (query) {
      alert(`Searching for: "${query}"`);
    }
  };

  return (
    <section 
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      className="relative min-h-[100svh] overflow-hidden bg-cover bg-center flex flex-col"
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Spacing between Navbar and Hero Content */}
      <div className="flex-1 min-h-8 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Hero Content Area */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-gray-900 font-normal leading-[1.05] tracking-tight text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up">
            Get cited.
          </span>
          <span className="block animate-fade-up [animation-delay:100ms]">
            Effortlessly.
          </span>
        </h1>

        {/* Search Bar Form */}
        <form 
          onSubmit={handleSearchSubmit}
          className="animate-fade-up [animation-delay:220ms] mt-5 sm:mt-6 w-full max-w-xl"
        >
          <div className="flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-md ring-1 ring-gray-200 pl-5 pr-1.5 py-1.5 shadow-sm focus-within:ring-gray-300 transition-shadow">
            <input 
              type="text" 
              name="query"
              placeholder="What makes content rank in AI search?"
              className="flex-1 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-500 outline-none py-2"
              required
            />
            <button 
              type="submit"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 text-white hover:scale-105 active:scale-95 transition-transform shrink-0 flex items-center justify-center"
              aria-label="Submit search"
            >
              <ArrowUp className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </form>

        {/* Description */}
        <p className="animate-fade-up [animation-delay:340ms] mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
          Ship articles that answer actual customer questions <br className="hidden sm:inline" />— and be seen on{' '}
          <span className="inline-flex items-center gap-0.5 font-medium text-gray-800">
            <Sparkles className="inline w-4 h-4 -mt-1 text-amber-500" />
            ChatGPT
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up [animation-delay:460ms] mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
          <button className="bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all">
            Try It Free
          </button>
          <button className="text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full ring-1 ring-gray-300 hover:bg-gray-100 transition-colors">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Spacing between Content and Dashboard */}
      <div className="flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Dashboard Mockup Container */}
      <div className="animate-hero-rise [animation-delay:620ms] relative z-0 w-[92%] sm:w-[84%] lg:w-[72%] max-w-4xl mx-auto shrink-0 -mb-10 sm:-mb-20 lg:-mb-32">
        <ScaledDashboard>
          <DashboardMockup />
        </ScaledDashboard>
      </div>

      {/* Grass Overlay */}
      <img 
        src={grassImageUrl} 
        alt="" 
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none"
      />
    </section>
  );
};
