import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  return <button className={classes.button} color={props.color} bgColor={props.bgColor}>{props.children}</button>
}

export default Button;