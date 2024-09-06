import React from 'react';

import { counterContent } from '@/constants/counterConstants';
import Container from '@/layouts/Container';

import NextImage from './NextImage';
import map from '../../public/assets/map_grey.png';
import Counter from './Counter';

function AnimatedCounter() {
  return (
    <div className="h-[70vh] sm:h-[45vh] md:h-auto lg:h-auto xl:h-auto">
      <Container>
        <div className="relative">
          <div className="absolute inset-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-14">
              {counterContent.map((item, i) => (
                <div key={i} className="flex justify-center text-center">
                  <div className="mt-5">
                    <div className=" overflow-hidden">
                      <NextImage
                        src={`/assets/${item.image}.svg`}
                        alt={item.heading}
                        width={200}
                        height={200}
                        className="h-[75px] w-[65px] mr-5 text-primaryColor"
                      />
                    </div>
                  </div>
                  <div className="text-center flex-col justify-center  ">
                    <Counter
                      from={item.to}
                      to={item.from}
                      preFix={item.preFix}
                      duration={item.duration}
                    />
                    <p className="text-[16px] font-semibold text-primaryColor">
                      {item.heading}
                    </p>{' '}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full">
            <NextImage
              alt="img"
              src={map}
              className="w-full max-h-[250px]"
              objectFit="cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AnimatedCounter;
