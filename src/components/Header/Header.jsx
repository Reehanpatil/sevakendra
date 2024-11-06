import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const Navbar = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'About Us',
      path: '/about',
    },

    {
      id: 4,
      name: 'Contact',
      path: '/contact',
    },
  ];

  // Function to handle link click and close the mobile menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <nav className='bg-white shadow-md w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            {/* Logo */}
            <NavLink to='/' className='text-2xl font-bold text-red-500 '>
              Seva<span className=' text-black'>Kendra</span>
            </NavLink>
          </div>
          {/* Navigation Links */}
          <div className='hidden md:flex items-center space-x-4'>
            {Navbar.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.id}
                className='text-black hover:text-red-200'
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          {/* Login Button */}
          <div className='hidden md:flex items-center'>
            <button
              onClick={() => setShowModal(true)}
              className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
            >
              Login
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden text-gray-700 focus:outline-none'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {Navbar.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.id}
                className='block text-black hover:text-red-200'
                onClick={handleLinkClick} // Close menu on link click
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          <div className='px-5 pb-3'>
            <button
              onClick={() => setShowModal(true)}
              className='w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Modal Component */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Header;
