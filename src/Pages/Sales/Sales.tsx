import React, { useEffect } from 'react'
import {SalesHero} from "./Sections/Hero/SalesHero";
import {Promo} from "./Sections/Promo/Promo";
import {Faq} from "./Sections/Faq/Faq";

export const Sales = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return(
  <main>
    <SalesHero/>
    <Promo/>
    <Faq/>
  </main>
)}