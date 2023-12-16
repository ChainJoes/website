import React, {useState} from 'react';
import './Header.scss'
import {Socials} from "../Socials/Socials";
import {Logo} from "../Logo/Logo";
import {Burger, Close} from "../Icons/Icons";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Header = () => {
  const {width} = useWindowDimensions();
  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <header className='header'>
      <div className="wrap">
        {Logo}
        <div className={`menu ${isShowMenu ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#brand">
                Discover ChainVerse
              </a>
            </li>
            <li>
              <a href="#characters">
                Choose your Joe
              </a>
            </li>
            <li>
              <a href="#ecosystem">
                Ecosystem
              </a>
            </li>
            <li>
              <a href="#subscribe">
                Subscribe
              </a>
            </li>
          </ul>
          {Socials}
        </div>
        {width < 1025 ?
          <div
            className={`burger ${isShowMenu ? 'active' : ''}`}
            onClick={() => setShowMenu((prevState) => !prevState)}
          >
          <span>
            Menu
          </span>
            <div className="icons">
              {Burger}
              {Close}
            </div>
          </div>
          :
          null
        }
      </div>
    </header>
  )
}