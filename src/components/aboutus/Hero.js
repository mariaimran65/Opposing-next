import React from 'react';
import { motion } from 'framer-motion';

import Container from '@/layouts/Container';

import NextImage from '../NextImage';
import aboutImag from '../../../public/assets/bg.jpg';

function Hero() {
  return (
    <div className="bg-primaryColor/5">
      <Container>
        <p className="text-primaryColor text-4xl text-center font-semibold pt-6  uppercase">
          About Us
        </p>
        <div className="md:w-[full] px-4 pb-4 pt-[1rem] md:pt-[5rem] lg:pt-[5rem] xl:pt-[5rem] ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <motion.div
                initial={{ y: 100, opacity: 0 }} // Start from bottom
                animate={{ opacity: 1, y: 0 }} // Move to top
                transition={{ duration: 1.5 }}
              >
                <p className="text-[14px] text-center md:text-left lg:text-left md:text-xl lg:text-xl xl:text-xl  mb-5">
                  In today's fast-paced global economy, education is more
                  important than ever. It's not just about getting a degree,
                  it's about developing the critical thinking and skills needed
                  to thrive in a competitive world. That's where we come in. At
                  the 2nd Passport Study Group, we're passionate about helping
                  education leaders worldwide adapt to challenges and seize
                  opportunities for growth. Whether it's finding the right
                  university, securing scholarships, or navigating the
                  application process, we're here to provide expert guidance
                  tailored to your goals. Our mission is simple: to empower
                  students to achieve their dreams through top-notch education.
                </p>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-end mb-5">
              <motion.div
                initial={{ opacity: 0 }} // Initial opacity is set to 0
                animate={{ opacity: 1 }} // Animate opacity to 1
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Animate scale on hover
                transition={{
                  ease: 'linear',
                  duration: 0.3,
                  x: { duration: 1.5 }
                }}
                className="w-full"
              >
                <NextImage
                  src={aboutImag}
                  priority
                  alt="about-us"
                  height={420}
                  width={720}
                  layout="cover"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  objectFit="fill"
                  className="w-full drop-shadow"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
