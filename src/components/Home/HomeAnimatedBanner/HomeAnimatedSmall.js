import Container from '@/layouts/Container';
import homeImageSmall from '../../../../public/assets/home_main_sm.png';
import NextImage from '../../NextImage';

function HomeAnimatedSmall() {
  return (
    <Container>
      <div className=" xs:h-[260px] h-[390px] sm:h-[620px] relative">
        <NextImage
          alt="home banner"
          src={homeImageSmall}
          loading="eager"
          priority
          layout="fill"
          sizes="(max-width: 600px) 100vw,
                33vw"
          objectFit="cover"
        />
      </div>
    </Container>
  );
}

export default HomeAnimatedSmall;
