import React from 'react';
import './Footer.scss'
import {Cta} from "./Cta/Cta";
import {Logo} from "../Logo/Logo";
import {Socials} from "../Socials/Socials";
import {m5Logo} from "../Icons/Icons";

export const Footer = () => {
  return(
    <section className='home-footer'>
      <Cta/>
      <footer>
        <div className="wrap">
          <div className="left">
            {Logo}
            {Socials}
          </div>
          <div className="center">
            <ul>
              <li>
                Menu
              </li>
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
          </div>
          <div className="right">
            {m5Logo}
          </div>
        </div>
      </footer>
    </section>
  )
}