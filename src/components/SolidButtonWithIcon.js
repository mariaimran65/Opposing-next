function SolidButtonWithIcon({ buttonText, Icon }) {
  return (
    <button
      type="button"
      className={`flex items-center border-2 border-primaryColor bg-primaryColor rounded-[12px] my-2 px-[34px] py-[8px]  `}
    >
      <i className="w-[10px] mr-4 sm:mr-5 text-lightColor">
        <Icon />
      </i>

      <p className="mx-2 text-[8px] sm:text-[14px] font-semibold text-lightColor">
        {buttonText}
      </p>
    </button>
  );
}

export default SolidButtonWithIcon;
