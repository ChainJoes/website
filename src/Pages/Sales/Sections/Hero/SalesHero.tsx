import React from 'react'
import {Content} from "./Content";
import {SalesForm} from "./SalesForm/SalesForm";
import './SalesHero.scss'

export const SalesHero = () => (
  <section className='sales-hero'>
    <div className="wrap">
      <Content/>
      <SalesForm/>
    </div>
  </section>
)