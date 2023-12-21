import React from 'react';
import {discordIcon, mediumIcon, telegramIcon, xIcon, ytIcon} from "../Icons/Icons";

export const Socials = (
  <div className="socials">
    <a href='https://discord.gg/WnejedQ399' target='_blank' className="soc">
      {discordIcon}
    </a>
    <a href='https://medium.com/@chainjoes' target='_blank' className="soc">
      {mediumIcon}
    </a>
    <a href='https://twitter.com/ChainJoes' target='_blank' className="soc">
      {xIcon}
    </a>
    <a href='https://t.me/chainjoes' target='_blank' className="soc">
      {telegramIcon}
    </a>
    <a href='https://www.youtube.com/@chainjoes' target='_blank' className="soc">
      {ytIcon}
    </a>
  </div>
)