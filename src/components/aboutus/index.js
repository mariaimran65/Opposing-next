import React from 'react';

import LandingPage from '@/layouts/LandingPage';
import Hero from './Hero';
import Skills from './Skills';
import UniSlider from '../Home/uniSleder';

const crumbContent = [
  {
    text: 'About'
  }
];

function AboutComponent() {
  return (
    <LandingPage showBreadCrumb crumbContent={crumbContent}>
      <Hero />
      <Skills />
      <UniSlider />
    </LandingPage>
  );
}

export default AboutComponent;
