import React from 'react';
import { TokensData } from './TokensData';

interface TokensTabsProps {
  activeToken: number;
  setActiveToken: React.Dispatch<React.SetStateAction<number>>;
}

export const TokensTabs: React.FC<TokensTabsProps> = ({ activeToken, setActiveToken }) => {
  return (
    <div className='tokens-tabs'>
      <h4 className="title">
        Tokens
      </h4>
      {TokensData.map((item, index) => (
        <div
          className={`token-tab ${index === activeToken ? 'active' : ''}`}
          key={`tokenTabKey${index}`}
          onClick={() => setActiveToken(index)}
        >
          <img src={item.icon} alt="token icon" />
        </div>
      ))}
    </div>
  );
};
