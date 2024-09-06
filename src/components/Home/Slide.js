'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import BannerButton from './BannerButton';
import NextImage from '../NextImage';
import { productNameLinkText } from '@/constants/productName';
import Container from '@/layouts/Container';
import Modal from '../Modals/modal';
import MyForm from '../Modals/Form';

function Slide({ image }) {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  return (
    <div className="w-full sm:w-[100%] sm:mx-auto md:w-[100%] lg:w-[100%] shadow-lg  border-[1px] border-[#F1F1F1] rounded-lg lg:overflow-hidden">
      <div className="relative w-full rounded-2xl">
        <div className="relative w-full rounded-2xl xs-[200px] h-[500px] sm:h-[600px] md: md:h-[600px] lg:h-[750px] xl:h-[750px] ">
          <NextImage
            src={`/assets/${image}.jpg`}
            priority
            alt={`${productNameLinkText}-img`}
            layout="fill"
            className="w-full"
            objectFit="fill"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
      </div>{' '}
      <div className="absolute inset-0 flex justify-center items-center">
        <Container>
          <div className="flex flex-col items-center">
            <motion.div
              className="w-full"
              initial={{ x: -100, opacity: 0 }} // Initial position and opacity
              animate={{ x: 0, opacity: 1 }} // Animation target position and opacity
              transition={{ duration: 1.5 }} // Easing effect and duration
            >
              <h1 className="text-white text-[28px] leading-9 text-center sm:text-[28px] md:text-[54px] lg:text-[54px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[90%]">
                Study Abroad Consultants
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: '100%', opacity: 0 }} // Initial position set to start from right (x: "100%") with opacity 0
              animate={{ x: 0, opacity: 1 }} // Target position set to left (x: 0) with full opacity
              transition={{ duration: 2 }} // Duration of 2 seconds for the animation
            >
              <p className="text-white text-center text-[18px] md:text-[26px] lg:text-[26px] xl:text-[26px] lg:max-w-[100%] mb-5">
                2nd Passport Study Group, a prominent Study Abroad Consulting
                firm takes immense pride in partnering with the best educational
                institutions.
              </p>
            </motion.div>

            <BannerButton
              buttonText="Apply Now"
              altText="A white arrow pointing to the right for Apply now button"
              onClick={() => openModal()}
            />
          </div>
        </Container>
      </div>
      <Modal open={isOpen} setOpen={setOpen}>
        <MyForm />
      </Modal>
    </div>
  );
}

export default Slide;
