import React from 'react';
import { motion } from 'framer-motion';

import Container from '@/layouts/Container';
import useInViewAnimate from '@/hooks/useInView';

function WhyUs({ background }) {
  const [ref, isInView] = useInViewAnimate();

  return (
    <div className={`${background}`}>
      <Container>
        <p className="text-primaryColor text-4xl text-center font-semibold pt-6  uppercase">
          Why Us
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-[full] px-4 pb-4 ">
            <motion.div
              ref={ref}
              initial={{ x: 100, opacity: 0 }} // Start from right side
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }} // Move to left side
              transition={{ duration: 1.5 }}
            >
              <p className="text-[#666666] text-3xl text-center font-semibold pt-6 pb-6 capitalize ">
                Why Choose 2nd Passport study group as study abroad consultants?
              </p>
              <p className="text-base text-center md:text-xl  mb-5">
                Our services are distinguished by their exceptional quality,
                setting us apart from competitors. Unlike typical consultancy
                firms in Pakistan, our primary focus is on genuinely caring for
                our students. We consistently aim to provide the most effective
                guidance and solutions tailored to each student's needs. Our
                team comprises experienced counselors and meticulously trained
                compliance experts, readily available to assist you throughout
                the application process. Given the intricate nature of college
                applications and the abundance of consultants available, allow
                us to explain why selecting 2nd Passport Study Group is the best
                choice for you.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyUs;
