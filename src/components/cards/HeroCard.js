import Image from 'next/image';
import { LuThumbsUp } from 'react-icons/lu';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BsImages } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Resizer from 'react-image-file-resizer';
import Link from 'next/link';
import { WASABI_URL } from '../../utils/api';
import Loading from '../Loading';

function ImageCard({
  thumbnail,
  title,
  price,
  isLiked,
  id,
  isThumbnail,
  oldImage,
  deviceType
}) {
  const [resizedImageUrl, setResizedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const urlToBlob = async (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error('Failed to load image'));
        }
      };
      xhr.onerror = () => {
        reject(new Error('Network error'));
      };
      xhr.send();
    });
  };

  useEffect(() => {
    const url = isThumbnail && `${WASABI_URL}${oldImage?.path}`;
    resizeAndDisplayImage(url);
  }, [oldImage, isThumbnail, thumbnail]);

  const resizeAndDisplayImage = async (url) => {
    try {
      setLoading(true);
      const blob = await urlToBlob(url);
      Resizer.imageFileResizer(
        blob,
        300,
        225,
        'JPEG',
        100,
        0,
        (resizedUri) => {
          setResizedImageUrl(resizedUri);
          setLoading(false);
        },
        'base64',
        300,
        225,
        'center'
      );
    } catch (error) {
      console.error('Error:', error.message);
      setLoading(false);
    }
  };

  const MAX_TITLE_LENGTH = 25;
  const isTitleLong = title.length > MAX_TITLE_LENGTH;
  const truncatedTitle = isTitleLong
    ? `${title.substring(0, MAX_TITLE_LENGTH)}...`
    : title;

  return (
    <div className="relative max-w-[300px] bg-white border border-gray-200 rounded-lg cursor-pointer">
      <div
        className="relative w-[300px] h-[225px]"
        style={{ paddingBottom: '75%' }}
      >
        <Link href={`/vehicle-detail/${id}`}>
          {loading ? (
            <Loading />
          ) : (
            <Image
              src={
                isThumbnail
                  ? // ? resizedImageUrl
                    WASABI_URL + thumbnail
                  : resizedImageUrl
              }
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          )}
        </Link>
        <div className="absolute inset-x-0 bottom-0 inset-y-[170px] flex justify-between items-center p-2 text-white bg-black/40 z-10">
          <div className="flex items-center">
            <BsImages className="text-[20px]" />
          </div>
          <div className="flex items-center space-x-8">
            <LuThumbsUp className="text-[20px]" />
            <IoShareSocialOutline className="text-[20px]" />
          </div>
        </div>
      </div>
      <div className="relative w-[300px] p-2 rounded-b-lg bg-gradient-to-r from-[#0a2b5c] to-[#43679f]">
        <div className="absolute text-[15px] font-bold top-2 right-2 rounded-md bg-[#1D1D1D] text-[#FBFDFF] px-2 pb-1">
          ${price}
        </div>
        <h5 className="text-[13px] font-extrabold text-[#FBFDFF] mt-8">
          <span className="relative group">
            <span className="relative z-10">{truncatedTitle}</span>
            {isTitleLong && (
              <div
                className="absolute z-20 w-full max-w-[280px] px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: '8px',
                  wordWrap: 'break-word'
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
      </div>
    </div>
  );
}

export default ImageCard;
