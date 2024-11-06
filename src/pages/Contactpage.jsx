import React from 'react';

const ContactForm = () => {
  return (
    <div className='min-h-screen flex items-center justify-center  p-4'>
      <div className='max-w-md w-full bg-white rounded-lg border shadow-md p-8'>
        <h2 className='text-2xl font-bold text-center text-red-500 mb-6'>
          Contact Us
        </h2>
        <form className='space-y-4'>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black'
            />
          </div>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black'
            />
          </div>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              id='message'
              rows='4'
              placeholder='Write your message'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-red-500 text-white py-2 rounded font-bold hover:bg-red-600 transition duration-200'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
