import { useEffect, useState } from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { uniContent } from '@/constants/uniConstants';
import Container from '@/layouts/Container';

function UniSlider() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  }, [width]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow: false,
    autoplay: true,
    slidesToShow: width < 500 ? (width < 400 ? 1 : 2) : width < 767 ? 3 : 5,
    slidesToScroll: width < 500 ? (width < 400 ? 1 : 2) : width < 767 ? 3 : 5
  };

  return (
    <div className="bg-primaryColor/5">
      <Container>
        <p className="text-primaryColor text-xl sm:text-2xl md:text-3xl  lg:text-4xl text-center font-semibold pt-6 pb-6 uppercase">
          Our Top-tier Affiliates
        </p>

        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="w-full  lg:w-[100vw] ">
              <Slider {...settings} className="cstm-slider">
                {uniContent.map((e, i) => (
                  <div key={i} className="flex justify-center items-center">
                    <div className="md:min-h-[90px] lg:min-h-[90px] xl:min-h-[90px] md:p-5 lg:p-5 xl:p-5 bg-white shadow-lg rounded-lg m-1 p-1 md:m-5 lg:m-5 xl:m-5">
                      <Image
                        src={`/assets/${e.image}.webp`}
                        layout="contain"
                        width={300}
                        height={150}
                        objectFit="fill"
                        alt={e.image}
                        className="h-[70px] w-[70%]"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UniSlider;
