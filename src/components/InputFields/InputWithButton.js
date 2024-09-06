import React from 'react';

function InputWithButton({
  ButtonText,
  placeholder,
  type,
  handleChange,
  value,
  onSubmit,
  disabled
}) {
  return (
    <div className="mt-2 flex rounded-md shadow-sm">
      <div className="relative text-[16px] flex flex-grow items-stretch focus-within:z-10">
        <input
          value={value}
          onChange={handleChange}
          type={type}
          className="block outline-none w-full rounded-sm rounded-l-md border-0 py-3 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      <button
        disabled={disabled}
        onClick={onSubmit}
        type="button"
        className="relative text-[12px] bg-primaryColor text-white -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 md:text-sm lg:text-sm xl:text-sm font-semibold  ring-1 ring-inset ring-primaryColor hover:bg-primaryColor/70"
      >
        {ButtonText}
      </button>
    </div>
  );
}

export default InputWithButton;
