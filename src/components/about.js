import React from 'react';
import { motion } from 'framer-motion';

import Container from '@/layouts/Container';
import useInViewAnimate from '@/hooks/useInView';

import NextImage from './NextImage';
import aboutImag from '../../public/assets/about-us.png';

function AboutUs() {
  const [ref, isInView] = useInViewAnimate();
  return (
    <div className="mt-[85vh] sm:mt-[50vh] md:mt-0 lg:mt-0 xl:mt-0">
      <Container>
        <p className="text-primaryColor text-4xl text-center font-semibold pt-6 pb-6 uppercase">
          About us
        </p>

        <div className="flex flex-col md:flex-row">
          {/* Left div with text */}
          <div className="md:w-1/2 p-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-base text-center  sm:text-left md:text-left lg:text-left xl:text-left md:text-xl  mb-5">
                Education serves as a powerful catalyst, nurturing critical
                thinking and skills to navigate the complexities of today's
                fast-paced global economy. In the midst of rapid changes,
                <strong> 2nd Passport Study Group</strong> a trusted Study
                Abroad Consultant, is dedicated to empowering students
                worldwide. We're here to support higher education leaders,
                helping them adapt, grow, and excel. Committed to our client's
                dreams, we offer expert advice on educational paths,
                universities, scholarships, and application procedures. Our goal
                is to make top-notch education accessible to every student,
                tailored to their aspirations.
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
      </Container>
    </div>
  );
}

export default AboutUs;
