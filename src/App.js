import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './components/MainPage';
import AboutPage from './components/About';
import Footer from './components/Footer';
import Splash from './components/Splash';

import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  });

  return (
    <Router>
      {!isMobile && <Splash />}
      {!isMobile && <Header />}

      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <MainPage mobile={isMobile} />
        </Route>
      </Switch>

      {!isMobile && <Footer />}
    </Router>
  );
}

export default App;
