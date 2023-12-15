import React, { useEffect, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  scrollFactor: number;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, scrollFactor }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      if (image) {
        const elementTop = image.getBoundingClientRect().top;
        const scrollY = window.scrollY - elementTop;
        const offset = scrollY * scrollFactor;
        image.style.transform = `translateY(${-offset / 20}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollFactor]);

  return <img className="parallax-image" ref={imageRef} src={src} alt={alt} />;
};
