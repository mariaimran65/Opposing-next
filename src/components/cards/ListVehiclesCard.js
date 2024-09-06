import React from 'react';
import NextImage from '../NextImage';

function ListVehcileCard({ icon, iconHover, title, price }) {
  return (
    <div className="l-box bg-white rounded-lg shadow-lg p-4 text-[#40454b] text-center hover:bg-[#1d1d1d] bg-no-repeat hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
      <div className="relative text-6xl mb-4 flex justify-center">
        <div className="relative h-[105px] w-[70px]">
          <NextImage
            src={`/assets/${icon}.svg`}
            alt="icon"
            width={125}
            height={80}
            className="l-box-img absolute inset-0"
          />
          <NextImage
            src={`/assets/${iconHover}.svg`}
            alt="hover-icon"
            width={125}
            height={80}
            className="l-box-img-hover absolute inset-0"
          />
        </div>
      </div>
      <h3 className="text-[15px] font-bold mb-2">{title}</h3>
      <p className="text-[23px] font-medium">${price}</p>
    </div>
  );
}

export default ListVehcileCard;
