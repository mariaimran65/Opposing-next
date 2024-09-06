import Image from 'next/image';
import { LuThumbsUp } from 'react-icons/lu';
import { IoShareSocialOutline, IoSpeedometer } from 'react-icons/io5';
import { BsImages } from 'react-icons/bs';
import { BiSolidMap } from 'react-icons/bi';
import phoneIcon from '../../../public/assets/phone.svg';
import NextImage from '../NextImage';

function BrowseVehicleCard({
  title,
  price,
  miles,
  number,
  _id,
  noOfImage,
  location,
  thumbnail
}) {
  const MAX_TITLE_LENGTH = 25;
  const isTitleLong = title.length > MAX_TITLE_LENGTH;
  const truncatedTitle = isTitleLong
    ? `${title.substring(0, MAX_TITLE_LENGTH)}...`
    : title;

  return (
    <div className="relative bg-white my-3 w-[90%] rounded-lg  cursor-pointer">
      <div className="relative" style={{ paddingBottom: '60%' }}>
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute bottom-3 left-2 right-2 flex justify-between items-center text-white px-2">
          <div className="flex items-center   space-x-2">
            <BsImages className="text-[20px]" />
            <span className="text-[15px] font-extrabold">{noOfImage}</span>
          </div>
          <div className="flex items-center text-[18px] space-x-8">
            <LuThumbsUp />
            <IoShareSocialOutline />
          </div>
        </div>
      </div>
      <div className="relative p-4 rounded-b-lg bg-gradient-to-r from-[#0a2b5c] to-[#43679f]">
        <div className="absolute top-4 right-2 rounded-md bg-[#1D1D1D] text-[#FBFDFF] text-[15px] font-extrabold px-2 pb-1">
          ${price}.00
        </div>
        <h5 className="text-[15px] font-extrabold text-[#FBFDFF] mt-8">
          <span className="relative group">
            <span className="relative z-10">{truncatedTitle}</span>
            {isTitleLong && (
              <div
                className="absolute z-20 w-max px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: '8px'
                }}
              >
                {title}
                <div
                  className="absolute bottom-[-6px] left-[50%] w-1 h-2 bg-gray-900 rotate-45"
                  style={{ transform: 'translateX(-50%)' }}
                />
              </div>
            )}
          </span>
        </h5>
        <div className="flex justify-between items-center text-[#D9E4EE] mt-2">
          <div className="flex items-center">
            <IoSpeedometer />
            <span className="ml-1 text-[13.125px] font-bold">
              {miles} Miles
            </span>
          </div>
          <div className="flex items-center">
            <BiSolidMap className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <hr className="my-2 opacity-10" />
        <div className="flex items-center text-[13.125px] font-extrabold text-[#D9E4EE] mt-2 mb-3">
          <NextImage src={phoneIcon} className="mr-2" />
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
}

export default BrowseVehicleCard;
