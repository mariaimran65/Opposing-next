import NextImage from '@/components/NextImage';
import ellipse from '../../../../public/assets/Vector143.png';

function HomeAnnimatedBanner() {
  return (
    <>
      <div className="relative">
        <div className="absolute hidden md:block lg:block xl:block top-[126px] right-[10px]">
          <NextImage
            alt="ellipse-img"
            src={ellipse}
            className="w-[68px] h-[50px] my-4 md:my-0"
          />
        </div>
      </div>
      <div className="h-auto pt-[75px] w-[90vw] md:w-[90vw] xl:max-w-[1196px] xl:min-w-[1196px] mx-auto ">
        <div className="h-[300px] md:h-[500px] lg:h-[650px] xl:h-[650px]">
          <iframe
            title="Go Customer Tour"
            src="https://app.supademo.com/embed/eYCFS7cRtcgydjv8G0_R2"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allow="fullscreen"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          paddingBottom: "calc(49.020833333333336 % +'88px)",
          height: 0
        }}
      >
        <iframe
          title="Go Customer Tour"
          src="https://app.supademo.com/embed/btYvQTkES_m3wxXijCfYY"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allow="fullscreen"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </>
  );
}

export default HomeAnnimatedBanner;
