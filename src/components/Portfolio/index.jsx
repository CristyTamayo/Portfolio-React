import React from 'react';
import Switch from './Switch';

const mb10 = {
  marginBottom: '10px',
};

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio' data-aos='fade-up' data-aos-duration='1500' data-aos-mirror='true'>
      <h2 style={mb10}>Some Things I’ve Built</h2>
      <Switch />
    </section>
  );
};

export default Portfolio;
