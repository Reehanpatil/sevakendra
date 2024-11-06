import React from 'react';
import { MarqueeComponent, ProcessSteps } from '../components';
import ServicesPage from './ServicesPage';

const Homepage = () => {
  return (
    <>
      <section>
        <MarqueeComponent />
        <ServicesPage />
      </section>
    </>
  );
};

export default Homepage;
