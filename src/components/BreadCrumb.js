import Link from 'next/link';
import Container from '@/layouts/Container';

function Breadcrumb({ crumbContent, background }) {
  return (
    <div className={`${background} `}>
      <Container>
        <nav className={`flex  py-3 ${background}'}  `} aria-label="Breadcrumb">
          <ul className="inline-flex items-center space-x-1 md:space-x-3 ">
            <li className="inline-flex items-center ">
              <Link
                href="/"
                className="inline-flex items-center text-[9px] md:text-sm font-medium  hover:text-primaryColor "
              >
                Home
              </Link>
            </li>
            {Array.from(crumbContent).length >= 1 &&
              Array.from(crumbContent).map((nav, i) => (
                <li className="" key={i}>
                  <div className="flex items-center">
                    {nav.link ? (
                      <div className="min-w-[4px] min-h-[4px] md:w-[6px] md:h-[6px]  rounded-full bg-primaryColor md:ml-[0.5rem]" />
                    ) : (
                      <div className=" min-w-[4px] min-h-[4px] md:w-[6px] md:h-[6px]  rounded-full bg-gray-500 md:ml-[0.5rem]" />
                    )}

                    {nav.link ? (
                      <Link
                        href={nav.link}
                        className="ml-1 text-[9px] md:text-sm font-medium  hover:text-primaryColor md:ml-[1.2rem] "
                      >
                        {nav.text}
                      </Link>
                    ) : (
                      <p className="ml-1  text-[9px] md:text-sm font-medium  text-gray-500  md:ml-[1.2rem] ">
                        {nav.text}
                      </p>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Breadcrumb;
