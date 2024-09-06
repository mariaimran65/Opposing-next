import React from 'react';

function TextField({ type, placeholder, onChange, error }) {
  return (
    <div className="mt-2 flex rounded-md shadow-sm">
      <div className="relative text-[16px] flex flex-grow items-stretch focus-within:z-10">
        <input
          type={type}
          className={`block outline-none w-full rounded-lg  border-0 py-3 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6 ${
            error ? 'ring-inset ring-red-500 focus:ring-red-50' : ''
          }`}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}

export default TextField;
