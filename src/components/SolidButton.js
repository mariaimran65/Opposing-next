import React from 'react';

function SolidButton({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="bg-primaryColor font-[420] m-3 sm:m-0 w-[85px] h-[45px]  hover:bg-secondaryColor rounded-[8px] py-[8px] text-[14px] text-[#fff]"
    >
      {text}
    </button>
  );
}

export default SolidButton;
