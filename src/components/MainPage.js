import React, { useState, useEffect } from 'react';

import Image from './Image';
import classes from './MainPage.module.css';

import GabbaniMockup from '../assets/pngs/MockupMaison_MT_A04.png';
import LightBoxMockup from '../assets/pngs/Lightbox 02 Facade.png';
import PaulMockup from '../assets/pngs/paulpaul.png';
import LaBaieMockup from '../assets/pngs/Produits Maison.png';
// Left panel images
import TemplateMockpu from '../assets/pngs/TheTemplates_Test_004.png';
import Maison from '../assets/pngs/maison-1881.png';
import TaupeMockup from '../assets/pngs/VARFMTS054 copy.png';
import UpliftMockup from '../assets/pngs/uplf-1@2x.png';

const MainPage = () => {
  const [leftPanelImages, setLeftPanelImages] = useState([]);
  const [rightPanelImages, setrightPanelImages] = useState([]);

  const populateState = () => {
    const leftContent = [
      {
        src: GabbaniMockup,
        title: 'Gabbani Bar',
        body:
          'Concept Logo and Branding for an Italian Bar Located in Montreal',
      },
      {
        src: LightBoxMockup,
        title: 'Restaurant Viva Italia',
        body: 'Branding, Logo Design, Menu Design, Web Design',
      },
      {
        src: PaulMockup,
        title: 'Paul’s Pretzel ',
        body: 'Full Project Coming Soon',
      },
      {
        src: LaBaieMockup,
        title: 'La Baie d’Hudson',
        body: 'Concept Branding, UI Design, Logo Design',
      },
    ];

    const rightContent = [
      {
        src: TemplateMockpu,
        title: 'Taupe Studios - Ad Campaign',
        body: 'Design, Art Direction',
      },
      {
        src: Maison,
        title: 'A Selection of Logotypes, Wordmarks and Icons',
        body: 'Unused Concepts',
      },
      {
        src: TaupeMockup,
        title: 'Taupe Studios - Corporate Branding ',
        body: 'Branding, Logo Design, Web Design',
      },
      {
        src: UpliftMockup,
        title: 'Uplft',
        body: 'Web Design, Branding',
      },
    ];

    setLeftPanelImages([...leftContent]);
    setrightPanelImages([...rightContent]);
  };

  useEffect(() => {
    populateState();
  }, []);

  return (
    <div>
      <main className={classes.container}>
        <div className={classes.lefPane}>
          {leftPanelImages.map((img) => (
            <div className={classes.imageContainer}>
              <Image
                source={img.src}
                textTitle={img.title}
                textBody={img.body}
              />
            </div>
          ))}
        </div>
        <div className={classes.righPane}>
          {rightPanelImages.map((img) => (
            <div className={classes.imageContainer}>
              <Image
                source={img.src}
                textTitle={img.title}
                textBody={img.body}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
