import React from 'react';
import './Ecosystem.scss';
import {EcosystemData} from "./EcosystemData";
import {Coins} from "./Coins";
import EcosystemItem from './EcosystemItem';
import {ScrollReveal} from "../../../../Components/ScrollReveal/ScrollReveal";
import useWindowDimensions from "../../../../Components/hooks/useWindowDimensions";

export const Ecosystem = () => {
  const {width} = useWindowDimensions();

  return (
    <section className='ecosystem' id='ecosystem'>
      <div className="wrap">
        <h2 className="title">
          CHAIN JOES ECOSYSTEM
        </h2>
        <div className="ecosystem__items">
          {EcosystemData.map((item, index) => (
            <EcosystemItem
              title={item.title}
              list={item.list}
              mark={item.mark}
              key={`ecosystemItemIndex${index}`}
            />
          ))}
        </div>
        <ScrollReveal elementType="div" className="info">
          Want to know more? Check out our Telegram, Discord or X!
        </ScrollReveal>
        {width > 1025 ?
          <Coins/>
          :
          null
        }
      </div>
    </section>
  )
}