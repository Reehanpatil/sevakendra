import React from 'react';

const aboutContent = [
  {
    id: 1,
    text: 'Welcome to Seva Kendra, your trusted partner for a wide range of essential services. We are committed to making your life simpler and more convenient by offering a comprehensive suite of services that cater to your everyday needs.',
  },
  {
    id: 2,
    text: 'At Seva Kendra, we understand the importance of accessible and reliable services in today’s fast-paced world. That’s why we bring you a one-stop solution for all your needs, including:',
  },
  {
    id: 3,
    text: '1) Banking Services\n2) Recharge and Bill Payments\n3) Government Services (Aadhar, PAN applications, etc.)\n4) Travel Bookings (Flights, trains, buses, and hotels)',
  },
  {
    id: 4,
    text: 'Whether you need to top up your mobile phone, pay utility bills, or manage your finances, we have you covered.',
  },
  {
    id: 5,
    text: 'Our mission extends beyond just convenience. We are proud to be a part of your community, and we take our role seriously. As a Government-approved service provider, we are dedicated to facilitating access to important government services. Our knowledgeable staff is here to assist you with tasks such as Aadhar card registration, PAN card application, and more.',
  },
  {
    id: 6,
    text: 'Traveling can be stressful, but with Seva Kendra, planning your journeys becomes hassle-free. Our travel services enable you to book flights, trains, buses, and hotels with ease. We aim to simplify your travel experience, ensuring that you can focus on creating memorable moments during your trips.',
  },
  {
    id: 7,
    text: 'What sets us apart is our unwavering commitment to customer satisfaction. We believe that excellent service is the cornerstone of our business, and we continually strive to exceed your expectations. Our dedicated team is always ready to assist you, whether you have a query, need assistance with a transaction, or require guidance on any of our services.',
  },
  {
    id: 8,
    text: 'Seva Kendra is not just a service provider; we are a part of your community. We take pride in serving you and your neighbors, contributing to the betterment of the community as a whole. Your trust in us fuels our dedication to improving and expanding our services continually.',
  },
  {
    id: 9,
    text: 'Thank you for choosing Seva Kendra as your preferred service provider. We look forward to being your go-to destination for all your banking, recharge, bill payment, government, and travel needs. Visit us today to experience hassle-free, reliable service that meets all your needs. Together, we can simplify your life and build a stronger, more connected community.',
  },
];

const AboutUs = () => {
  return (
    <div className=' min-h-screen py-4 px-4'>
      <div className='max-w-3xl mx-auto bg-white p-6 border rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-red-500 mb-6 text-center'>
          About Us
        </h1>
        {aboutContent.map((content) => (
          <p
            key={content.id}
            className='text-gray-700 mb-4 whitespace-pre-line'
          >
            {content.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
