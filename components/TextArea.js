import React from 'react';

const TextArea = ({ ...rest }) => {
  return (
    <textarea
      className='p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600 mt-1 block w-full dark:bg-gray-800'
      {...rest}
    ></textarea>
  );
};

export default TextArea;
