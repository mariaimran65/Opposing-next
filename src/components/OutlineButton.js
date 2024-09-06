function OutlineButton({ buttonText }) {
  return (
    <button
      type="button"
      className="border-2 border-primaryColor hover:bg-primaryColor/10 rounded-[12px] lg:px-[34px] md:px-[12px] sm:px-[12px] py-[8px]  text-[16px] text-primaryColor font-semibold"
    >
      {buttonText}
    </button>
  );
}

export default OutlineButton;
