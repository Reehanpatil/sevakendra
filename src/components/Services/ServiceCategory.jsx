// ServiceCategory.js
import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const ServiceCategory = ({ category, services }) => {
  // State to manage the selected service for the modal
  const [selectedService, setSelectedService] = useState(null);

  // Function to open modal with selected service details
  const openModal = (service) => {
    setSelectedService(service);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className='mb-8'>
      <h2 className='text-xl font-bold mb-4'>{category}</h2>
      {/* Responsive grid layout with one column on small screens */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {services.map((service) => (
          <div
            key={service.name}
            className='flex items-center p-4 rounded-md border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer'
            onClick={() => openModal(service)} // Open modal with selected service
          >
            {/* Icon Wrapper with Background Color */}
            <span
              className={`p-3 rounded-full ${service.color} flex items-center justify-center`}
            >
              <img src={service.icon} alt={service.name} className='w-8 h-8' />
            </span>
            {/* Service Name */}
            <span className='ml-2 text-sm sm:text-base font-medium'>
              {service.name}
            </span>
          </div>
        ))}
      </div>

      {/* Use the common ServiceModal component */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={closeModal}
        service={selectedService}
      />
    </div>
  );
};

export default ServiceCategory;
