import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.main}>
      <span className={classes.container}>
        <p className={[classes.pageName, classes.elSize].join(' ')}>
          Design & Art Direction
        </p>
        <p className={[classes.logo, classes.elSize].join(' ')}>
          TAUPE STUDIOS
        </p>
        <div className={[classes.actions, classes.elSize].join(' ')}>
          <ul>
            <li>About</li>
            <li>Francais</li>
          </ul>
        </div>
      </span>
    </header>
  );
};

export default Header;
