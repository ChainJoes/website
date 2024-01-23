import React  from 'react';
import {Link} from "react-router-dom";
import './Promo.scss'

export const Promo = () => (
  <Link to='/sales' className='promo'>
    <h2 className="title">
      Our Sale is Live!
    </h2>
    <Link to='/sales'>
      Check it out
    </Link>
  </Link>
)