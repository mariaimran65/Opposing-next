import Container from '@/layouts/Container';
import line from '../../../public/assets/line.png';
import NextImage from '../NextImage';
import { productName, productNameLinkText } from '@/constants/productName';

function ProductDescription() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row  md:w-[100%] md:mx-auto my-[4rem] md:space-x-[4rem] lg:space-x-[6rem]">
        <div className=" text-[20px] mb-5 md:mb-0 text-center lg:text-left  md:w-[50%] lg:w-[49.8%] md:text-[48px]">
          <h2
            style={{ lineHeight: 1.2 }}
            className=" text-[24px]  sm:text-[24px]  md:text-[2.4rem] font-bold  lg:text-5xl "
          >
            {productName} specializes in providing business solutions, including{' '}
          </h2>
          <div className="overflow-hidden h-[45px] md:h-[65px]">
            <p
              className="text-[24px] leading-[40px] sm:text-[24px] sm:leading-[50px] md:text-[2.4rem] font-bold md:leading-[60px] lg:text-5xl lg:leading-[70px]"
              id="animated-text"
            >
              Lead Generation <br />
              Nurturing Leads <br />
              Sales Generation <br />
              Brand Awareness
            </p>
          </div>
          <NextImage
            alt={`${productNameLinkText}-img`}
            loading="lazy"
            src={line}
            className="w-[200px] mx-auto sm:w-[250px] md:w-[300px] lg:w-[400px] lg:mx-0"
          />
        </div>
        <div className="lg:pt-[11px] leading-[33px] lg:text-left md:w-[50%]">
          <p className="text-[18px] text-[#000] px-2 md:px-0">
            {productName} offers AI-powered email marketing solutions that help
            businesses of all sizes increase open and click-through rates,
            generate leads, and drive sales.
          </p>
          <p className="text-[18px] text-[#000] px-2 md:px-0">
            Our tools enable dynamic and engaging content creation, optimized
            send times, and targeted drip campaigns to nurture leads.
          </p>
          <p className="text-[18px] text-[#000] px-2 md:px-0">
            Say goodbye to stale and ineffective email campaigns, and embrace
            {productName}'s advanced solutions for your business.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ProductDescription;
