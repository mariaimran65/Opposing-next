import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Accordian from '@/components/Accordian';
import OutlineButtonWithIcon from '../OutlineButtonWithIcon';
import Container from '@/layouts/Container';
import ButtonIcon from '../ButtonIcon';

function FAQs({ faqContent }) {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const onButtonCLick = () => {};

  return (
    <Container>
      <div className="relative flex justify-center items-center mt-[1rem] mb-[2.4rem]  md:my-[5rem]">
        <div className=" md:flex md:w-[100%] ">
          <div className="md:w-[50%] ">
            <h2
              style={{ lineHeight: 1.2 }}
              className="text-center text-[24px] sm:text-[24px] md:text-[48px]  md:text-left my-5 md:my-0 lg:w-[80%]"
            >
              Explore Our FAQs: Your Questions,{' '}
              <span
                style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                className="text-primaryColor"
              >
                Our Expertise.
              </span>
            </h2>
            <p className="text-[18px] text-center mx-2 md:text-left text-[#000] md:mx-0 lg:w-[80%] leading-[33px]">
              Have some questions before you get started ? check out our FAQs or
              lets talk :)
            </p>
            <div className="items-center justify-center hidden md:flex md:justify-start my-5">
              <div className="flex flex-col items-center md:flex-row">
                <div>
                  <Link href="/faq">
                    <OutlineButtonWithIcon
                      buttonText="View all FAQs"
                      Icon={ButtonIcon}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] rounded-lg border-[#F1F1F1] w-[90vw] mx-auto my-4 md:w-[50%] md:mx-0 md:my-0">
            {faqContent &&
              faqContent.map((e, i) => (
                <Accordian
                  key={i}
                  open={open === i + 1}
                  onClick={() => handleOpen(i + 1)}
                  heading={e.heading}
                  isLast={faqContent.length === i + 1}
                  body={e.text}
                />
              ))}
          </div>
          <div className="flex items-center justify-center md:hidden">
            <div className="flex flex-col items-center mt-[1rem] md:mt-0">
              <Link href="/faq">
                <OutlineButtonWithIcon
                  buttonText="View all FAQs"
                  Icon={ButtonIcon}
                  onClick={() => onButtonCLick()}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
FAQs.prototype = {
  faqContent: PropTypes.object,
  from: PropTypes.string
};

export default FAQs;
