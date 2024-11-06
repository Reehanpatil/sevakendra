import React from 'react';

const AuthForm = ({ isLogin }) => {
  return (
    <form className='mt-4 space-y-4 ' action='#'>
      {!isLogin && (
        <>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full px-4 py-2 border rounded-md focus:outline-none'
          />
          <input
            type='text'
            placeholder='Mobile Number'
            className='w-full px-4 py-2 border rounded-md focus:outline-none'
          />
        </>
      )}
      <input
        type='email'
        placeholder='Email'
        className='w-full px-4 py-2 border rounded-md focus:outline-none'
      />
      <input
        type='password'
        placeholder='Password'
        className='w-full px-4 py-2 border rounded-md focus:outline-none'
      />
      <button
        type='submit'
        className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600'
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
