import React from 'react';
import {ParallaxImage} from "../../../../Components/ParalaxImage/ParallaxImage";
import coin1 from './Assets/Coin 01.png';
import coin2 from './Assets/Coin 02.png';
import coin3 from './Assets/Coin 03.png';
import coin4 from './Assets/Coin 04.png';

export const Coins = () => {
  return (
    <div className="coins">
      <ParallaxImage src={coin1} alt='Coin' scrollFactor={0.27}/>
      <ParallaxImage src={coin2} alt='Coin' scrollFactor={0.46}/>
      <ParallaxImage src={coin3} alt='Coin' scrollFactor={0.29}/>
      <ParallaxImage src={coin4} alt='Coin' scrollFactor={0.43}/>
    </div>
  );
};