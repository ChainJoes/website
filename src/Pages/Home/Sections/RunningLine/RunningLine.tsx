import React, {useEffect, useRef, useState} from 'react';
import './RunningLine.scss'

export const RunningLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const runningLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getTranslateValue = () => {
    const translateX = 0 - scrollPercentage/10;
    return `translateX(${translateX}%)`;
  };

  return (
    <section
      className='running-line'
      ref={runningLineRef}
      style={{transform: getTranslateValue()}}
    >
      <div className="running-line__item">
        Choose your Joe
      </div>
      <div className="running-line__item">
        Choose your Joe
      </div>
      <div className="running-line__item">
        Choose your Joe
      </div>
      <div className="running-line__item">
        Choose your Joe
      </div>
    </section>
  )
}