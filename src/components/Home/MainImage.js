import React from 'react';
import NextImage from 'next/image';
import heroimg from '../../../public/assets/hero-img.jpg';

function MainImage() {
  return (
    <div className="relative ">
      <NextImage
        src={heroimg}
        priority
        alt="hero-img"
        layout="responsive"
        height={600}
        objectFit="cover"
        className="w-full flex relative "
      />
    </div>
  );
}

export default MainImage;
