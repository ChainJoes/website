import React, { useState, useEffect } from 'react';
import { CharactersData } from './СharactersData';
import bg from './Assets/Images/Background-texture.png';
import './Characters.scss';
import ReactPlayer from 'react-player';
import useWindowDimensions from '../../../../Components/hooks/useWindowDimensions';

interface CharacterProps {
  title: string;
  text: string;
  icon: string;
  tokenName: string;
  charVideo: string;
  charMobileImg: string;
}

export const Characters: React.FC = () => {
  const { width } = useWindowDimensions();
  const [activeChar, setActiveChar] = useState<number>(0);
  const [onAnim, setOnAnim] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setOnAnim(false);
    }, 100);
  }, [activeChar]);

  const handleTabClick = (index: number): void => {
    if (index !== activeChar) {
      setOnAnim(true);
      setTimeout(() => {
        setActiveChar(index);
      }, 300);
    }
  };

  return (
    <section className="characters" id="characters">
      <img className="bg" src={bg} alt="paper" />
      <div className="wrap">
        <div className="content">
          <h2 className={`title ${onAnim ? 'anim' : ''}`}>
            {CharactersData[activeChar].title}
          </h2>
          <div className={`text ${onAnim ? 'anim' : ''}`}>
            {CharactersData[activeChar].text}
          </div>
          <div className="tabs">
            {CharactersData.map((item, index) => (
              <div
                className={`tab ${index === activeChar ? 'active' : ''}`}
                key={`charactersTabKey${index}`}
                onClick={() => handleTabClick(index)}
              >
                <img src={item.icon} alt={`${item.title} icon`} />
                <div className="token-name">{item.tokenName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {width > 768 ? (
        <div className={`character ${onAnim ? 'anim' : ''}`}>
          <ReactPlayer
            url={CharactersData[activeChar].charVideo}
            muted={true}
            controls={false}
            loop={true}
            playing={true}
          />
        </div>
      ) : (
        <img
          className={`char-mobile ${onAnim ? 'anim' : ''}`}
          src={CharactersData[activeChar].charMobileImg}
          alt={CharactersData[activeChar].title}
        />
      )}
    </section>
  );
};