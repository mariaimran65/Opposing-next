import NextImage from './NextImage';
import arrow from '../../public/assets/right-arrow.svg';

export default function Icon() {
  return (
    <NextImage
      src={arrow}
      alt="A purple arrow pointing to the right for the view all blogs button"
      width={24}
      height={24}
      className="h-[24px] w[24px]"
    />
  );
}
