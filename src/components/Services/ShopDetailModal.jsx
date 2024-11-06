import React from 'react';

const ShopDetailModal = ({ isOpen, onClose, shop }) => {
  if (!isOpen || !shop) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 px-4'>
      <div className='bg-white p-6 rounded-lg shadow-2xl w-full max-w-md h-auto relative max-h-[80vh] overflow-y-auto transition-transform transform scale-100 duration-300'>
        {/* Close Icon */}
        <div
          onClick={onClose}
          className='absolute top-4 right-4 p-2 cursor-pointer rounded-full transition-transform duration-200 transform hover:scale-110 hover:bg-gray-200'
          title='Close'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>

        {/* Shop Details */}
        <h4 className='text-2xl font-bold text-gray-800 mb-2 text-center'>
          {shop.name}
        </h4>
        <p className='text-md text-gray-600 text-center'>
          Mobile: <span className='font-semibold'>{shop.mobile}</span>
        </p>
        <p className='text-md text-gray-600 text-center'>
          Address: <span className='font-semibold'>{shop.address}</span>
        </p>

        {/* Additional styling for visual appeal */}
        <div className='mt-4 flex justify-center'>
          <img
            src={shop.image} // Assuming you have an image in shop details
            alt={shop.name}
            className='w-24 h-24 object-cover rounded-full border-2 border-gray-300 shadow-md'
          />
        </div>
      </div>
    </div>
  );
};

export default ShopDetailModal;
