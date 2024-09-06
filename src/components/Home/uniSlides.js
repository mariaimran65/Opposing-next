import React from 'react';
import NextImage from '../NextImage';

function UniSlides({ image }) {
  return (
    <div className="w-full sm:w-[90vw] sm:mx-auto md:w-[70vw] lg:w-[49vw] my-10  p-7 lg:overflow-hidden lg:ml-[25.3vw]">
      <div className="">
        <div className="flex items-center my-3 ">
          <figure className=" w-[3.5rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] lg:w-[6rem] lg:h-[6rem]  flex items-center">
            <div className="relative  h-[70%] w-[70%]">
              <NextImage
                alt="pribox-img"
                src={`/assets/${image}.png`}
                layout="fill"
                sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 50px,
              33px"
                objectFit="contain"
                className="object-contain  rounded-full"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default UniSlides;
