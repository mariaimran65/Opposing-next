import homeBanner from '../../../../public/assets/home-custom.png';
import homeBanner2 from '../../../../public/assets/home2.png';
import homeBanner3 from '../../../../public/assets/home3.png';
import homeBanner4 from '../../../../public/assets/home4.png';
import Container from '@/layouts/Container';
import NextImage from '../../NextImage';
import { productNameLinkText } from '@/constants/productName';

function HomeAnimatedLarge() {
  return (
    <Container>
      <div className="relative w-full pt-[1.9rem]">
        <div className="relative h-[700px]">
          <NextImage
            className=" object-contain aspect-auto"
            layout="fill"
            loading="eager"
            priority
            objectFit="contain"
            alt={`image showing ${productNameLinkText} dashboard`}
            src={homeBanner}
          />
        </div>
        <div className="absolute top-[186px] left-[7.5%] z-30 cursor-pointer w-[300px] ">
          <div className="relative h-[400px]" id="home_banner_reverse">
            <NextImage
              className=" object-contain aspect-auto"
              layout="fill"
              loading="eager"
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              objectFit="contain"
              alt="image showcasing email warmup and spam reputation"
              src={homeBanner2}
            />
          </div>
        </div>
        <div className="absolute bottom-[50px] cursor-pointer right-[11%] xl:right-[8.8%] h-[250px] z-30  w-[300px]">
          <div className="relative h-[400px]" id="home_banner">
            <NextImage
              className=" object-contain aspect-auto"
              layout="fill"
              loading="eager"
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              objectFit="contain"
              alt="image showing weekly open rate"
              src={homeBanner3}
            />
          </div>
        </div>
        <div className="absolute cursor-pointer  bottom-[380px] right-[8%] xl:right-[6%]  h-[400px] z-30  w-[300px]">
          <div className="relative h-[500px]" id="home_banner">
            <NextImage
              className=" object-contain aspect-auto"
              layout="fill"
              loading="eager"
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              objectFit="cover"
              alt="image showcasing email drip campaigns"
              src={homeBanner4}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeAnimatedLarge;
