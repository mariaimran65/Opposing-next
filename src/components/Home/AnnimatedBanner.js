import vector from '../../../public/assets/vector1.png';
import Container from '@/layouts/Container';
import NextImage from '../NextImage';
import { productName } from '@/constants/productName';

function AnnimatedBanner({
  image,
  isImage,
  newbanner,
  imageCss,
  emailCampaingCss
}) {
  return (
    <div
      className="bg-lighColor"
      style={{
        background: isImage
          ? 'linear-gradient(0deg, rgba(255,254,253,1) 54%, rgba(251,249,255,1) 54%)'
          : 'none'
      }}
    >
      <Container>
        <div
          className={`${emailCampaingCss} ${imageCss} relative h-[auto] flex justify-center lg:pt-[4rem] lg:pb-[2rem] items-center ${
            newbanner && 'lg:pt-[0px]'
          }`}
        >
          {isImage ? (
            <div className="relative w-[370px] sm:w-[90%] h-[370px] sm:h-[570px]">
              <NextImage
                alt={`A descriptive image showing how ${productName} works`}
                src={image}
                layout="fill"
              />
            </div>
          ) : (
            <video autoPlay loop muted>
              <source src={`/assets/${image}.mp4`} />
            </video>
          )}

          {!emailCampaingCss && (
            <div className="absolute bottom-[-3.6rem] right-4 hidden lg:block">
              <NextImage
                alt={`${productName}-img`}
                src={vector}
                className="object-contain w-auto "
              />
            </div>
          )}
        </div>
      </Container>
      {emailCampaingCss && (
        <div className="absolute bottom-[-35rem] right-[12rem] xl:right-[25vw] hidden lg:block">
          <NextImage
            alt={`${productName}-img`}
            src={vector}
            className="object-contain w-auto "
          />
        </div>
      )}
    </div>
  );
}

export default AnnimatedBanner;
