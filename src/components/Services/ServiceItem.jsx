import React from 'react';

const ServiceItem = ({ icon, name }) => {
  return (
    <div className='flex flex-col items-center p-4 border rounded-lg shadow-md hover:bg-gray-100'>
      <img src={icon} alt={name} className='w-12 h-12 mb-2' />
      <span className='text-center text-sm font-semibold'>{name}</span>
    </div>
  );
};

export default ServiceItem;
