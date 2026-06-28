import { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { BookingSection } from './components/BookingSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';

// Infinite Marquee images data
const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif'
];
const marqueeDoubled = [...marqueeImages, ...marqueeImages];

function App() {
  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any, prefer-const, prefer-rest-params */
    // 1. Define Cal embed function dynamically
    const C = window as any;
    if (!C.Cal) {
      C.Cal = function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = document.createElement("script");
          script.src = "https://app.cal.com/embed/embed.js";
          document.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === "init") {
          const api: any = function () {
            api.q = api.q || [];
            api.q.push(arguments);
          };
          const namespace = ar[1];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            cal.ns[namespace](...ar);
            cal.q.push(["initNamespace", namespace]);
          } else {
            cal.q.push(ar);
          }
          return;
        }
        cal.q.push(ar);
      };
    }

    // 2. Initialize Cal instance with user's specific credentials
    C.Cal("init", "intro-with-greek", { origin: "https://app.cal.com" });
    C.Cal.config = C.Cal.config || {};
    C.Cal.config.forwardQueryParams = true;

    // 3. Register UI defaults
    C.Cal.ns["intro-with-greek"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    /* eslint-enable @typescript-eslint/no-explicit-any, prefer-const, prefer-rest-params */
  }, []);

  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Infinite Marquee */}
      <div className="w-full overflow-hidden mt-16 md:mt-20 mb-16 relative bg-white py-2 select-none">
        <div className="animate-marquee flex flex-row">
          {marqueeDoubled.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt="" 
              className="h-[280px] md:h-[500px] w-auto object-cover mx-3 rounded-2xl shadow-lg shrink-0 animate-marquee-item" 
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* 3. Booking / Appointment Section */}
      <div id="about">
        <BookingSection />
      </div>

      {/* 4. Testimonial Carousel */}
      <TestimonialCarousel />

      {/* 5. Projects Section */}
      <div id="work">
        <ProjectsSection />
      </div>

      {/* 6. Partner Section */}
      <PartnerSection />

      {/* 7. Footer */}
      <Footer />

      {/* 8. Copyright Bar */}
      <CopyrightBar />

      {/* 9. Fixed Bottom Nav */}
      <BottomNav />

    </div>
  );
}

export default App;
