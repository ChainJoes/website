import React, {useEffect, useState} from 'react';
import {spiderWeb} from "../../../../Components/Icons/Icons";
import heroPromoImage from "./Assets/Heroes.png"
import noise from "./Assets/noise.png"
import heroBg from "./Assets/hero-bg.png"
import {Heroes} from "./Heroes";
import './Hero.scss'

export const Hero = () => {
  const [className, setClassName] = useState('hero');

  useEffect(() => {
    setTimeout(() => {
      setClassName('hero active');
    }, 300)
  }, [])

  return (
    <section className={className} id='home'>
      <div className="wrap">
        <div className="hero__top">
          <span className='anim'>
            Join the
          </span>
          <img className='anim' src={heroPromoImage} alt="Chain Joes"/>
          <span className='anim'>
            Rise to the top as you fight for glory and protect metaverses from organized chaos.
          </span>
        </div>
        <h1 className="title anim">
          Chain Joes
        </h1>
      </div>
      {spiderWeb}
      <div className="noise">
        <img src={noise} alt="noise"/>
      </div>
      <Heroes/>
      <img src={heroBg} alt="flares and paper edge" className="bg"/>
    </section>
  )
}