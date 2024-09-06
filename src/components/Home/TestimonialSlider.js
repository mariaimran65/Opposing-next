import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import Slide from './Slide';
import { testimonialContent } from '@/constants/homeContent';

function TestimonialSlider() {
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <div className="w-full  lg:w-[100vw] ">
          <Slider {...settings} className="cstm-slider">
            {testimonialContent.map((e, i) => (
              <Slide
                key={i}
                text={e.text}
                image={e.image}
                name={e.name}
                role={e.role}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
