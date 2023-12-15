import React  from 'react';
import {Link} from "react-router-dom";
import './Promo.scss'

export const Promo = () => (
  <section className='promo'>
    <h2 className="title">
      Our Sale is Live!
    </h2>
    <Link to='/sales'>
      Check it out
    </Link>
  </section>
)