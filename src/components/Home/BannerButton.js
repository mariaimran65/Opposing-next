import whitearrow from '../../../public/assets/whitearrow.png';
import NextImage from '../NextImage';

function BannerButton({ buttonText, altText, onClick }) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="cursor-pointer md:px-2 h-[40px] sm:h-[56px] bg-primaryColor  hover:bg-[#034982] hover:border-[#034982] border-primaryColor text-[#fff] flex items-center justify-center rounded-lg shadow-2xl"
    >
      <div className="justify-between flex items-center px-3 space-x-2">
        <p
          className="text-[10px] sm:text-[14px] md:text-[16px] font-semibold"
          aria-label="learn more to explore"
        >
          {buttonText}
        </p>

        <i className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]">
          <NextImage src={whitearrow} alt={altText} />
        </i>
      </div>
    </div>
  );
}

export default BannerButton;
