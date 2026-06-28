import React, { useRef, useEffect } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Desktop Mouse Scrubbing Hook
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let previousX: number | null = null;
    let isSeeking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) {
        previousX = null;
        return; // ignore scrubbing on mobile screens (< 1024)
      }

      const currentX = e.clientX;
      if (previousX === null) {
        previousX = currentX;
        return;
      }

      const delta = currentX - previousX;
      previousX = currentX;

      const duration = video.duration;
      if (!duration || isNaN(duration) || isSeeking) return;

      const deltaRatio = delta / window.innerWidth;
      const timeChange = deltaRatio * 0.8 * duration;
      let targetTime = video.currentTime + timeChange;
      targetTime = Math.max(0, Math.min(duration, targetTime));

      isSeeking = true;
      video.currentTime = targetTime;
    };

    const handleSeeked = () => {
      isSeeking = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  // Mobile Autoplay Hook
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMobilePlayback = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true;
        video.loop = true;
        video.play().catch((err) => {
          console.log('Mobile autoplay/play failed or was prevented:', err);
        });
      } else {
        video.pause();
      }
    };

    // Trigger on mount
    handleMobilePlayback();

    const handleResize = () => {
      handleMobilePlayback();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-right lg:object-right-bottom"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
      />
    </div>
  );
};
