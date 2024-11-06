import React, { useState } from 'react';
import { shopDetails } from '../../API/shopData'; // Adjust the path if needed
import ShopDetailModal from './ShopDetailModal'; // Import the new modal

const ServiceModal = ({ isOpen, onClose, service }) => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [isShopDetailOpen, setShopDetailOpen] = useState(false); // State for shop detail modal

  const handleShopClick = (shop) => {
    setSelectedShop(shop);
    setShopDetailOpen(true); // Open the shop detail modal
  };

  const handleCloseDetail = () => {
    setShopDetailOpen(false); // Close the shop detail modal
    setSelectedShop(null); // Clear selected shop
  };

  if (!isOpen || !service) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full h-auto relative max-h-[80vh] overflow-y-auto'>
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

        {/* Modal Content */}
        <h3 className='text-lg font-semibold mb-2'>{service.name}</h3>
        <p className='text-gray-700'>{service.about}</p>

        {/* Shop Details Grid */}
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {shopDetails.map((shop) => (
            <div
              key={shop.id}
              className='border p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100'
              onClick={() => handleShopClick(shop)}
            >
              <img
                src={shop.image}
                alt={shop.name}
                className='w-full h-32 object-cover rounded-md mb-2'
              />
              <h4 className='text-md font-semibold'>{shop.name}</h4>
              <p className='text-sm text-gray-600'>{shop.about}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Detail Modal */}
      <ShopDetailModal
        isOpen={isShopDetailOpen}
        onClose={handleCloseDetail}
        shop={selectedShop}
      />
    </div>
  );
};

export default ServiceModal;
