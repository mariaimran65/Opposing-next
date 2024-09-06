function OutlineButton({ buttonText, onClick }) {
  return (
    <button
      type="button"
      className=" bg-primaryColor font-[520] border-2 w-full md:text-[16px] md:w-auto lg:w-auto hover:bg-secondaryColor border-primaryColor rounded-[12px] px-[34px] py-[8px]  text-[16px] text-[#fff]"
      onClick={() => {
        onClick();
      }}
    >
      {buttonText}
    </button>
  );
}

export default OutlineButton;
