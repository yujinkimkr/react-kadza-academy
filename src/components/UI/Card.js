import React from 'react';
import classes from './Card.module.scss';

const Card = (props) => {
  return <div className={classes.card}>
    <h3>
      {props.title}
    </h3>
    <span>{props.courses} courses</span>
  </div>
}

export default Card;