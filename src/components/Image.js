import React from 'react';

import classes from './Image.module.css';

const Image = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={props.source} alt={props.desc}></img>
      </div>
      <div className={classes.textContainer}>
        <p className={classes.imageTitle}>{props.textTitle}</p>
        <p className={classes.imageDesc}> {props.textBody}</p>
      </div>
    </div>
  );
};

export default Image;
