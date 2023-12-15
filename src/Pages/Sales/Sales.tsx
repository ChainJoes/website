import React from 'react'
import {SalesHero} from "./Sections/Hero/SalesHero";
import {Promo} from "./Sections/Promo/Promo";
import {Faq} from "./Sections/Faq/Faq";

export const Sales = () => (
  <main>
    <SalesHero/>
    <Promo/>
    <Faq/>
  </main>
)