'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { servicesContent } from '@/constants/servicesConstants';
import NextImage from './NextImage';

function Services() {
  return (
    <div className="relative min-h-[300px]">
      <div className="absolute left-0 right-0 mx-auto p-5 bg-[#f8fcff] w-[75%] top-[-8rem] rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesContent.map((service, i) => (
            <motion.div
              key={i}
              initial={service.initial} // Initial position and opacity
              animate={service.animate} // Animation target position and opacity
              transition={service.transition} // Easing effect and duration
            >
              <div className="bg-white hover:transform hover:scale-95 transition-transform duration-300 ease-in-out rounded-lg shadow-xl min-h-[315px]">
                <div className="flex justify-center">
                  <div className="rounded-full overflow-hidden">
                    <NextImage
                      src={`/assets/${service.coverImage}.svg`}
                      alt={service.heading}
                      width={125}
                      height={80}
                      className="rounded-full h-[105px] w-[70px]"
                    />
                  </div>
                </div>
                <div className="pt-3">
                  <h2 className="text-lg text-center font-semibold mb-2 uppercase">
                    {service.heading}
                  </h2>
                  <p className=" text-center text-[16px] px-5">
                    {service.data}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
