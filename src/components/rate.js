import React from 'react';

import Star from '../icons/star';
import style from './rate.module.css';

export default function Rate(props) {
  return (
    <div className={style.rate}>
      {props.rating}
      <Star />
    </div>
  );
}
