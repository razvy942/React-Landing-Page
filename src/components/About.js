import React, { useState, useEffect } from 'react';

import classes from './About.module.css';

const About = () => {
  const [mainText, setMainText] = useState({ desc: '', about: '' });
  const [creativeServicesText, setCreativeServicesText] = useState({
    services: [],
  });

  useEffect(() => {
    setMainText({
      desc:
        "<div>Taupe Studios is a <span style={{fontSize: 'bold'}}creative office</span> and consultancy practice that specializes in design driven projects.</div>",
      about:
        'Our consultants help businesses build <span style="font-weight: bold; text-transform: uppercase">visual identities</span> and perfect human interactions through all communication channels. We take time to learn about our client’s business, its industry and its challenges so as to deliver <span style="font-weight: bold; text-transform: uppercase">outstanding products</span>, characterized by our great attention to detail.',
    });

    setCreativeServicesText({
      services: [
        'Market Research ',
        'Logo Design ',
        'Web Design ',
        'Naming and Messaging ',
        'Brand Identity Design ',
        'Brand Architecture ',
        'Packaging Design',
      ],
    });

    // const sendOffMessage =
    //   'For collaborations, work or to grab a coffee, send us an email or give us a call!';
  }, []);

  return (
    <div>
      <div className={classes.description}>
        Taupe Studios is a{' '}
        <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          creative office
        </span>{' '}
        and consultancy practice that specializes in design driven projects.
      </div>

      <div
        className={classes.description}
        style={{ marginBottom: '130px' }}
        dangerouslySetInnerHTML={{ __html: mainText.about }}
      />
      <div className={classes.description}>
        <span
          style={{
            textDecoration: 'underline',
            marginBottom: '100px',
            display: 'block',
          }}
        >
          Creative Services
        </span>
        {creativeServicesText.services.map((text) => (
          <span
            style={{
              display: 'block',
              marginBottom: '15px',
              fontWeight: '400',
            }}
          >
            {text}
          </span>
        ))}
      </div>
      <div
        className={classes.description}
        style={{ marginTop: '100px', marginBottom: '150px' }}
      >
        <p>For collaborations, work or to grab a coffee,</p>
        <p>send us an email or give us a call!</p>
      </div>
    </div>
  );
};

export default About;
