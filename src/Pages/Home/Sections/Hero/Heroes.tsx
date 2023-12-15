import React, { useEffect, useState, useRef } from 'react';
import heroes1 from "./Assets/heroes/hero1.png";
import heroes2 from "./Assets/heroes/hero2.png";
import heroes3 from "./Assets/heroes/hero3.png";
import heroes4 from "./Assets/heroes/hero4.png";
import heroes5 from "./Assets/heroes/hero5.png";
import heroes6 from "./Assets/heroes/hero6.png";
import heroes7 from "./Assets/heroes/hero7.png";
import heroesTablet from "./Assets/heroes/Heroes-tablet.png"
import heroesMobile from "./Assets/heroes/Heroes-small-mobile.png"
import useWindowDimensions from "../../../../Components/hooks/useWindowDimensions";

export const Heroes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { width } = useWindowDimensions();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle: React.CSSProperties = {
    transform: `translateY(-${scrollPositionRef.current * 0.15}px) scale(${1 + (scrollPositionRef.current / 100 * 0.015)})`,
  };

  if (width > 1025) {
    return (
      <div className='heroes' style={parallaxStyle}>
        <img className='anim' src={heroes1} alt="SalesHero" />
        <img className='anim' src={heroes2} alt="SalesHero" />
        <img className='anim' src={heroes3} alt="SalesHero" />
        <img className='anim' src={heroes4} alt="SalesHero" />
        <img className='anim' src={heroes5} alt="SalesHero" />
        <img className='anim' src={heroes6} alt="SalesHero" />
        <img className='anim' src={heroes7} alt="SalesHero" />
      </div>
    );
  }

  return (
    <img src={width < 760 ? heroesMobile : heroesTablet} alt="Heroes" className="heroes" />
  );
};
