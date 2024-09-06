import { useEffect, useRef } from 'react';
import Link from 'next/link';
import BannerButton from './BannerButton';
import NextImage from '../NextImage';

function GoCustomerToolContent({
  heading,
  text,
  icon,
  iconAltText,
  video,
  link,
  hasImage,
  image
}) {
  // console.log('-------------', image);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [video]);
  return (
    <div className="mb-[1.4rem] flex flex-col  md:flex-row md:h-[430px] lg:h-[550px]  lg:mb-9">
      <div className=" mx-auto md:w-[50%] flex items-center flex-col md:items-start mt-4  md:mt-5">
        <div className="mb-[1rem] md:mb-0 md:mt-[-1rem] border-[1px] cursor-pointer border-primaryColor flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]  md:w-[60px] md:h-[60px]">
          <NextImage
            src={icon}
            alt={iconAltText}
            className=" w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px]"
          />
        </div>
        <h3
          style={{ lineHeight: 1.2 }}
          className="md:mt-[1rem] text-[20px] text-center md:text-left lg:text-left xl:text-left  sm:text-[28px] md:[38px]  lg:text-[38px] text-primaryColor lg:w-[70%]"
        >
          {heading}
        </h3>
        <p className="text-center text-[#000] text-[18px] leading-[33px]   md:text-left md:pr-6 my-2 lg:w-[70%]">
          {text}
        </p>
      </div>
      <div className="w-[85%] h-[60vw] md:h-auto md:self-end relative  mt-5 sm:mt-0 mx-auto md:mx-0 md:w-[50%] lg:self-end ">
        {hasImage ? (
          <NextImage
            className="relative !important"
            src={image.src}
            width={image.width}
            height={image.height}
            layout="contain"
            loading="eager"
            priority
            sizes="(max-width: 768px) 100vw,
            33vw"
            alt={iconAltText}
          />
        ) : (
          <video loop muted autoPlay ref={videoRef}>
            <source src={`/assets/${video}.mp4`} />
          </video>
        )}
      </div>
    </div>
  );
}

export default GoCustomerToolContent;
