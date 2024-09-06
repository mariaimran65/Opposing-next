// import BannerButton from './BannerButton';
// import Container from '@/layouts/Container';

// import ellipse from '../../../public/assets/Ellipse.png';
// import campImage from '../../../public/assets/image-100.png';
// import mailImage from '../../../public/assets/image-101.png';

// import NextImage from '../NextImage';

function HomeBanner() {
  return (
    <>
      {/* <div className="relative">
        <div className="absolute top-[60px] left-[100px]">
          <NextImage
            alt="ellipse-img"
            src={ellipse}
            className="w-[68px] hidden md:block lg:block xl:block h-[30px] my-4 md:my-0"
          />
        </div>
        <div className="absolute top-[235px] left-[-40px]">
          <NextImage
            alt="campImage-img"
            src={campImage}
            className=" hidden md:block lg:block xl:blockw-[120px] h-[60px] my-4 md:my-0"
          />
        </div>
        <div className="absolute top-[150px] right-[-35px]">
          <NextImage
            alt="mailImage-img"
            src={mailImage}
            className="hidden md:block lg:block xl:block w-[102px] h-[50px] my-4 md:my-0"
          />
        </div>
      </div>
      <div className="bg-[#FBF9FF]">
        <Container>
          <div className=" pb-[2rem] pt-[4rem] flex justify-center relative lg:pt-[5rem]">
            <div className="flex flex-col items-center  md:w-[100%] ">
              <h1 className="text-[28px] leading-9 text-center sm:text-[28px] md:text-[54px] lg:text-[54px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[90%]">
                <span
                  className="text-primaryColor"
                  style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                >
                  Less Emails: More Customers
                </span>{' '}
              </h1>
              <h1 className="pb-5 text-[28px] leading-9 text-center sm:text-[28px] md:text-[50px] lg:text-[50px] md:leading-[4rem] lg:leading-[4rem] lg:max-w-[100%]">
                Grow Your Business with AI-Enabled, Data-Driven Acquisition!
              </h1>{' '}
              <a
                href={`https://calendly.com/pribox-io/discovery-call?month=${new Date().getFullYear()}-${(
                  new Date().getMonth() + 1
                )
                  .toString()
                  .padStart(2, '0')}`}
                target="_blank"
                rel="noreferrer"
              >
                <BannerButton
                  buttonText="Get a Demo"
                  altText="A white arrow pointing to the right for get a demo button"
                />
              </a>
            </div>
          </div>
        </Container>
      </div> */}
    </>
  );
}

export default HomeBanner;
