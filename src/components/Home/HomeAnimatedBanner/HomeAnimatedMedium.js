import Container from '@/layouts/Container';
import NextImage from '../../NextImage';
import homeAnimation from '../../../../public/assets/home_main.png';

function HomeAnimatedMedium() {
  return (
    <Container>
      <div className=" xs:h-[260px] sm:h-[490px] md:h-[620px] lg:h-[768px]   relative  ">
        <NextImage
          alt="home banner"
          src={homeAnimation}
          loading="eager"
          priority
          layout="fill"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
          objectFit="cover"
        />
      </div>
    </Container>
  );
}

export default HomeAnimatedMedium;
