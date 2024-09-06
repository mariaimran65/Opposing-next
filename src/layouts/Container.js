function Container({ children }) {
  return (
    <div className="h-auto w-[90vw] md:w-[90vw] xl:max-w-[1370px] xl:min-w-[1370px] mx-auto">
      {children}
    </div>
  );
}

export default Container;
