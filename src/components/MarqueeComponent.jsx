import React from 'react';

function MarqueeComponent() {
  const handleMouseOver = (e) => {
    e.target.stop(); // Stop marquee on hover
  };

  const handleMouseOut = (e) => {
    e.target.start(); // Start marquee on mouse leave
  };

  return (
    <div className='w-full overflow-hidden bg-gray-100 py-4'>
      <marquee
        className='text-lg font-semibold text-red-500'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        This is a sample marquee text scrolling continuously!
      </marquee>
    </div>
  );
}

export default MarqueeComponent;
