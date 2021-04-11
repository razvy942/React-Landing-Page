import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={[classes.container].join(' ')}>
      <div className={classes.lefPane}>
        <p className={classes.branding}>Taupe Studios - Redefining Brands</p>
      </div>

      <div className={classes.righPane}>
        <div className={classes.about}>
          <ul>
            <li>Based in Montreal E.</li>
            <li>taupestudios@gmail.com</li>
            <li>T. 873-255-6423</li>
          </ul>
        </div>

        <div className={classes.social}>
          <ul>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
