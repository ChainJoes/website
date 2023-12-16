import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.scss';

interface ScrollRevealProps {
  children: React.ReactNode;
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
  isHorizontally?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  isHorizontally = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(elementTop < windowHeight / 1.5);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} scroll-reveal ${isHorizontally ? 'horizontally' : ''} ${
        isVisible ? 'active' : ''
      }`}
    >
      {children}
    </div>
  );
};
