function OutlineButtonWithIcon({ buttonText, Icon, customStyle, onClick }) {
  return (
    <button
      type="button"
      className={`flex select-none h-[40px] md:h-auto  items-center border border-primaryColor gap-2 rounded-lg py-1 md:py-4 px-4 md:px-6  text-center align-middle font-sans text-xs font-bold  text-primaryColor transition-all hover:bg-primaryColor/10 active:bg-primaryColor/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${customStyle}`}
      onClick={onClick}
    >
      <p className="text-primaryColor font-semibold text-[12px] md:text-[16px]">
        {buttonText}
      </p>

      <span className="text-primaryColor ml-2">
        <Icon />
      </span>
    </button>
  );
}

export default OutlineButtonWithIcon;
