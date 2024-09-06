function ToolButton({ text, icon, rounded, from }) {
  return (
    <div
      className={`flex min-w-[160px] ${
        text !== 'Upselling and Cross-Selling' ? 'md:w-[15rem]' : 'md:w-[19rem]'
      } justify-center px-2 py-3 items-center cursor-pointer ${
        !rounded
          ? 'hover:bg-primaryColor/10 hover:rounded-3xl'
          : 'rounded-3xl  bg-[#fff]'
      }`}
    >
      <i className="w-[12px] h-[12px] md:w-[24px] md:h-[24px] mr-2">{icon}</i>
      <p
        className={`text-[12px] md:text-[18px] text-primaryColor ${
          !rounded ? '' : 'font-semibold'
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default ToolButton;
