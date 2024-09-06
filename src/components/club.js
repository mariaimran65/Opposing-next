import Image from 'next/image';
import bg from '../../public/assets/bg.jpg';
import Container from '@/layouts/Container';
import {
  mainHeading,
  secondHeading,
  priceHeading,
  priceHeading2,
  buttonTag
} from '../constants/clubConstant';

function ClubSection() {
  return (
    <div className="relative w-full h-[450px] md:h-[500px] lg:h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src={bg}
        alt="Club Promo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute w-[185%] h-[280%] left-[-80%] top-[-110px] bg-[#000000A1] transform rotate-[-59deg]  " />
      <Container>
        <div className="relative z-20 px-4 md:px-8 lg:px-0 text-left">
          <h2 className="text-[15px] text-[#F8F9FA] md:text-[15px] lg:text-[15px]  font-semibold uppercase">
            {mainHeading}
          </h2>
          <h1 className="mt-4 text-[35px] md:text-[33px] lg:text-[33px] font-medium leading-[43px] md:leading-[44px] lg:leading-[63px] lg:max-w-[70%] ">
            {secondHeading}
          </h1>
          <p className="mt-4 text-[15px] font-bold">
            {priceHeading}
            <br className="hidden md:block" />
            {priceHeading2}
          </p>
          <button className="mt-4 text-white bg-gradient-to-r from-[#0a2b5c] to-[#43679f] border-2 border-[#234579] rounded-full px-10 py-[10px] pb-[13px] transition-all duration-200 ease-in-out hover:bg-white hover:border-[#234579] hover:text-[#234579] ">
            {buttonTag}
          </button>
        </div>
      </Container>
    </div>
  );
}

export default ClubSection;
