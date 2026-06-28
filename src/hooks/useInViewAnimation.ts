import { useEffect, useRef } from 'react';

export const useInViewAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the container itself is styled to animate
          if (container.classList.contains('opacity-0')) {
            container.classList.add('animate-fade-in-up');
            container.classList.remove('opacity-0');
          }

          // Find all child elements marked for animation
          const animateElements = container.querySelectorAll('.animate-target');
          animateElements.forEach((el) => {
            el.classList.add('animate-fade-in-up');
            el.classList.remove('opacity-0');
          });

          // Trigger once, so disconnect/unobserve
          observer.unobserve(container);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return ref;
};
