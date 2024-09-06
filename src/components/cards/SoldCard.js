import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { WASABI_URL } from '../../utils/api';

function SoldCard({ thumbnail, title, id }) {
  const MAX_TITLE_LENGTH = 25;
  const isTitleLong = title.length > MAX_TITLE_LENGTH;
  const truncatedTitle = isTitleLong
    ? `${title.substring(0, MAX_TITLE_LENGTH)}...`
    : title;

  const imageUrl = `${WASABI_URL}${thumbnail?.path}`;

  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <Link href={`/vehicle-detail/${id}`}>
      <div className="relative bg-white border border-gray-200 rounded-lg cursor-pointer overflow-hidden">
        <div className="relative h-[260px]">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div
          className="relative p-2 rounded-b-lg bg-gradient-to-r from-gray-600 to-gray-500"
          onMouseEnter={handleTooltipToggle}
          onMouseLeave={handleTooltipToggle}
        >
          <h5 className="text-[13px] font-extrabold text-[#FBFDFF] mb-4">
            <span className="relative group">
              <span className="relative z-10">{truncatedTitle}</span>
              {isTitleLong && showTooltip && (
                <div
                  className="absolute z-20 w-[120%] px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 opacity-100"
                  style={{
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-35%)',
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
        </div>
      </div>
    </Link>
  );
}

export default SoldCard;
