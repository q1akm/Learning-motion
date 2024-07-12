import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  // Add your image URLs here
  'https://plus.unsplash.com/premium_photo-1719850361637-b9514dfbee5b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1600535396968-39e38779b346?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1578479875310-59429f73fb93?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const HorizontalScrollImageComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    gsap.to(container, {
      xPercent: -100 * (images.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 2,
        end: `+=${container.offsetWidth}`,
        markers: true,
      }
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={containerRef} className="flex">
        {images.map((src, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <img src={src} alt={`Image ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollImageComponent;
