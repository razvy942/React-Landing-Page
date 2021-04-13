import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.main}>
      <span className={classes.container}>
        <p className={[classes.pageName, classes.elSize].join(' ')}>
          Design & Art Direction
        </p>
        <p className={[classes.logo, classes.elSize].join(' ')}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            TAUPE STUDIOS
          </Link>
        </p>
        <div className={[classes.actions, classes.elSize].join(' ')}>
          <ul>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                About
              </Link>
            </li>
            <li>Francais</li>
          </ul>
        </div>
      </span>
    </header>
  );
};

export default Header;
