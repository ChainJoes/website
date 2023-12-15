import React from 'react';
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal';

interface EcosystemItemProps {
  title: string;
  list: string[];
  mark?: string;
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ title, list, mark }) => {
  return (
    <ScrollReveal elementType="div" className="ecosystem__item">
      <h3 className="title">{title}</h3>
      {list.length ? (
        <ul>
          {list.map((item, index) => (
            <li key={`listItemIndex${index}`}>{item}</li>
          ))}
          {mark ? <img src={mark} alt="marker" /> : null}
        </ul>
      ) : null}
    </ScrollReveal>
  );
};

export default EcosystemItem;
