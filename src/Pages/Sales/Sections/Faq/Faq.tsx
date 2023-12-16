import React, { useState } from 'react';
import { FaqData } from './FaqData';
import './Faq.scss';
import { ArrowDown } from '../../../../Components/Icons/Icons';

interface FaqItem {
  title: string;
  content: JSX.Element;
}

export const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="wrap">
        <h2 className="title">FAQ</h2>
        <div className="faq__items">
          {FaqData.map((item: FaqItem, index: number) => (
            <div
              className={`faq__item ${index === activeIndex ? 'active' : ''}`}
              key={`faqItemKey${index}`}
              onClick={() => handleItemClick(index)}
            >
              <h3 className="title">
                {item.title}
                {ArrowDown}
              </h3>
              <div className="content">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
