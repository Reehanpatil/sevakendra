import React from 'react';

const steps = [
  {
    title: '01. Registration',
    description: 'It is a simple and easy process to open your Seva Kendra.',
    icon: '✏️',
    bgColor: 'bg-teal-500',
  },
  {
    title: '02. Payment',
    description:
      'Once registration is complete, make the necessary payments as per the prescribed fee.',
    icon: '💸',
    bgColor: 'bg-green-500',
  },
  {
    title: '03. Document Submission',
    description: 'After payment, submit your Aadhar and PAN Card for KYC.',
    icon: '📄',
    bgColor: 'bg-pink-500',
  },
  {
    title: '04. Start Seva Kendra',
    description:
      'With all formalities completed, start providing Seva Kendra services.',
    icon: '💻',
    bgColor: 'bg-blue-500',
  },
];

export default function Process() {
  return (
    <div className='bg-blue-900 py-10'>
      <h2 className='text-center text-white text-3xl font-bold mb-6'>
        Process of Opening Seva Kendra
      </h2>
      <div className='flex flex-col md:flex-row justify-center gap-6 px-6'>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.bgColor} rounded-lg text-white p-6 md:w-1/4 flex flex-col items-start space-y-4`}
          >
            <div className='text-4xl'>{step.icon}</div>
            <h3 className='text-xl font-semibold'>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className='text-center mt-8 text-white'>
        Opening a Seva Kendra offers a unique opportunity to serve your
        community and generate income simultaneously. Follow these steps to join
        the Seva Kendra network and become a valuable service provider in your
        region, contributing to the convenience and well-being of your fellow
        citizens.
      </div>
    </div>
  );
}
