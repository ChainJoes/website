import React from 'react';
import {Hero} from "./Sections/Hero/Hero";
import {Brand} from "./Sections/Brand/Brand";
import {RunningLine} from "./Sections/RunningLine/RunningLine";
import {Ecosystem} from "./Sections/Ecosystem/Ecosystem";
import {Characters} from "./Sections/Сharacters/Сharacters";
import {Promo} from "./Sections/Promo/Promo";

export const Home = () => (
  <main>
    <Hero/>
    {/* <Promo/> */}
    <Brand/>
    <RunningLine/>
    <Characters/>
    <Ecosystem/>
  </main>
)