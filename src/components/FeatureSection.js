import dynamic from 'next/dynamic';
import { useState } from 'react';
import Container from '@/layouts/Container';
import NextImage from './NextImage';
import { productName } from '@/constants/productName';
import newGraphic from '../../public/assets/newgraphic1.png';

const EmailAccordian = dynamic(() => import('./EmailCampaigns/EmailAccordian'));

function FeatureSection({ featureContent, customCss, video }) {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Container>
      <div
        className={`flex justify-center w-[100%] items-center mt-[2.5rem] lg:mt-[8rem] mb-[1rem] ${customCss}`}
      >
        <div className="flex items-center flex-col  w-full">
          <h2
            style={{ lineHeight: 1.2 }}
            className="text-[24px] font-[700] text-center sm:text-[25px] md:text-[48px] lg:text-[48px] w-[70%] sm:w-[75%] md:w-[40%] lg:w-[49%] xl:w-[35%] mb-[2rem] lg:mb-[3.3rem]"
          >
            The{' '}
            <span
              className="text-primaryColor"
              style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
            >
              Features
            </span>{' '}
            you Need to know
          </h2>
          <div className="md:flex md:w-[100%] md:justify-between md:min-h-[500px] md:max-h-[500px]">
            <div className="md:ml-[0%] md:w-[40%]">
              {featureContent &&
                featureContent.map((e, i) => (
                  <EmailAccordian
                    key={i}
                    index={i + 1}
                    heading={e.heading}
                    text={e.text}
                    open={open === i + 1}
                    onClick={() => handleOpen(i + 1)}
                  />
                ))}
            </div>

            <div className="hidden relative md:flex md:w-[45%] lg:max-w-[620px] xl:max-w-[700px] xl:max-h-[400px] md:min-h-[300px]: md:max-h-[300px] lg:max-h-[320px]">
              <NextImage
                height={420}
                width={720}
                alt={`${productName}-img`}
                src={newGraphic}
                layout="contain"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                objectFit="fill"
                className={` object-contain mx-auto mt-2 md:mx-0 md:mt-0 md:ml-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FeatureSection;
