import React, { useState } from 'react';
import AuthForm from './AuthForm';

const Modal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register forms

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4'>
      <div className='bg-white rounded-lg w-96 p-6'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>
            {isLogin ? 'Login' : 'Register'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            ✖
          </button>
        </div>
        <div className='flex mt-4'>
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 ${
              isLogin ? 'border-b-2 border-red-500' : ''
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 ${
              !isLogin ? 'border-b-2 border-red-500' : ''
            }`}
          >
            Register
          </button>
        </div>
        <AuthForm isLogin={isLogin} />
      </div>
    </div>
  );
};

export default Modal;
