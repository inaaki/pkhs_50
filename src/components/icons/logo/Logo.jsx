import React from 'react';
import style from './Logo.module.css';
import { Link } from 'react-router-dom';
import fireWork from '../../../assets/images/fireworks.png';

function Logo() {
  return (
    <Link to="/">
      <img src={fireWork} className={style.image}/>
      <span className={style.main}>
        <span className={style.logo_title}>Suborno Jayanti</span>
        <span className={style.logo_year}>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>2</span>
        </span>
        <br />
        <span className={style.logo_school}>
          Pilgiri Kharul Hazi Abbas Ali Addarsha High School
        </span>
      </span>
    </Link>
  );
}

export default Logo;
