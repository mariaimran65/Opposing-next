import React, { lazy, Suspense, useState } from 'react';
import LandingPage from '@/layouts/LandingPage';
import { faqPageContent } from '@/constants/faqSeoContent';
import FaqsPageSeo from './FaqsPageSeo';

const Accordian = lazy(() => import('@/components/Accordian'));

function FaqsPage() {
  const [open, setOpen] = useState(1);
  const [openTab, setTab] = useState('general');
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const crumbContent = [
    {
      text: 'FAQs'
    }
  ];
  return (
    <LandingPage
      showBreadCrumb
      crumbContent={crumbContent}
      background="bg-lightColor"
    >
      <FaqsPageSeo faqPageContent={faqPageContent} />
      <div className="bg-lightColor">
        <div className="flex items-center justify-center pt-10 ">
          <h1 className="text-[28px] leading-9 text-center sm:text-[28px] md:text-[54px] lg:text-[54px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[90%]">
            Frequently Asked{' '}
            <span
              className="text-primaryColor"
              style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
            >
              Questions
            </span>
          </h1>
        </div>
      </div>
      {/* Now i start responsiveness */}
      <div className="grid md:grid-cols-3 md:gap-10 md:mx-[6rem] lg:mx-[10rem] mx-5 my-[5rem]">
        <div className="md:col-span-3 border-[1px] rounded-lg border-[#F1F1F1] min-w-full  mx-auto my-4 md:w-[100%] md:mx-0  md:my-0">
          <Suspense fallback={<div>Loading...</div>}>
            {faqPageContent &&
              faqPageContent[openTab].map((e, i) => (
                <Accordian
                  key={i}
                  open={open === i + 1}
                  onClick={() => handleOpen(i + 1)}
                  heading={e.questionName}
                  isLast={faqPageContent.length === i + 1}
                  body={e.acceptedAnswerText}
                />
              ))}
          </Suspense>
        </div>
      </div>
    </LandingPage>
  );
}

export default FaqsPage;
