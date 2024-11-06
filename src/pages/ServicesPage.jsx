import React from 'react';
import { ServiceCategory } from '../components';
import { servicesData } from '../API/servicesData';

const ServicesPage = () => {
  return (
    <div className=' p-8'>
      {servicesData.map((categoryData) => (
        <ServiceCategory
          key={categoryData.category}
          category={categoryData.category}
          services={categoryData.services}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
