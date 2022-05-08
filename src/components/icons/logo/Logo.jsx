import React from 'react';
import style from './Logo.module.css'

function Logo() {
  return (
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
  );
}

export default Logo;
