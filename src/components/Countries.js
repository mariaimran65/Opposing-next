import React from 'react';
import Container from '@/layouts/Container';
import NextImage from './NextImage';
import { countriesContent } from '@/constants/homeContent';

function Countries() {
  return (
    <div className="w-full bg-primaryColor/5">
      <Container>
        <p className="text-primaryColor text-4xl text-center font-semibold pt-8  uppercase">
          Countries We Offer
        </p>
        <p className="text-[#666666] text-3xl text-center font-semibold pt-6 pb-6 capitalize ">
          Top picks for International Students Abroad
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-5">
          {countriesContent.map((e, i) => (
            <div key={i} className="flip-card flex justify-center">
              <div className="flip-card-inner rounded-lg">
                <div className="flip-card-front rounded-lg">
                  <NextImage
                    src={`/assets/${e.image}.webp`}
                    alt="Avatar"
                    width={450}
                    height={450}
                    objectFit="fill"
                    className="h-full w-full rounded-lg"
                    priority
                  />
                  <div className="absolute bottom-0  w-full bg-black opacity-80 rounded-b-lg">
                    <p className="text-white capitalize">{e.title}</p>
                  </div>
                </div>

                <div className="flip-card-back bg-black/80 rounded-lg flex justify-center items-center flex-col">
                  <div>
                    <p className="font-semibold capitalize">{e.title}</p>
                  </div>
                  <p className="text-[16px] mt-2 mx-3">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Countries;
