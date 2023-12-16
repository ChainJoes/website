import React, {useState} from 'react';
import {brandData} from "./BrandData";
import {ScrollReveal} from "../../../../Components/ScrollReveal/ScrollReveal";
import useWindowDimensions from "../../../../Components/hooks/useWindowDimensions";
import './Brand.scss'

export const Brand = () => {
  const [activeCard, setActiveCard] = useState(0);
  const {width} = useWindowDimensions();

  return (
    <ScrollReveal elementType="section" className="brand" isHorizontally={true}>
      <div className="wrap" id='brand'>
        {brandData.map((item, index) => (
          <div
            className={`brand__card ${index === activeCard ? 'active' : ''}`}
            key={`branItemKey${index}`}
            onClick={() => setActiveCard(index)}
          >
            <img src={item.img} alt={item.title} className="bg"/>
            <div className="content">
              <img src={item.icon} className='icon' alt={` ${item.title} icon`}/>
              <h2 className="title">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {width < 760 ?
        <div className="tabs">
          {brandData.map((item, index) => (
            <div
              className={`tab ${index === activeCard ? 'active' : ''}`}
              key={`branTabKey${index}`}
              onClick={() => setActiveCard(index)}
            >
              <img src={item.icon} className='icon' alt={` ${item.title} icon`}/>
            </div>
          ))}
        </div>
        :
        null
      }
    </ScrollReveal>
  );
};