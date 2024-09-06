import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/layouts/Container';

import NextImage from './NextImage';
import { allServicesContent } from '@/constants/allServicesConstant';

function AllServices() {
  return (
    <Container>
      <p className="text-primaryColor text-4xl text-center font-semibold pt-8 pb-2 uppercase">
        Our Services
      </p>
      <p className="text-[#666666] text-3xl text-center font-semibold pt-3 pb-6 capitalize ">
        We endeavor to offer the highest quality service to our students.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        {allServicesContent.map((service, i) => (
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
                <p className=" text-center text-[16px] px-5">{service.data}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default AllServices;
