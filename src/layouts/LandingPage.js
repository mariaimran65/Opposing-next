import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import cross from '@iconify/icons-eva/close-fill';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { BASE_URI } from 'config';
import Footer from '@/components/Footer';
import Navbar from '@/components/Home/Navbar';
import PageSEO from '@/components/pageSEO';
import BreadCrumb from '@/components/BreadCrumb';
import Container from '@/layouts/Container';
import ClubSection from '@/components/club';

// const BookNowSection = dynamic(() =>
//   import('@/components/Home/BookNowSection')
// );

function LandingPage(props) {
  const [showButton, setShowButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [shadow, setShadow] = useState(false);
  const {
    pageKey,
    pageNumber,
    children,
    from,
    showBreadCrumb,
    crumbContent,
    background
  } = props || {};

  const [isEarlyAccessPage, setIsEarlyAccessPage] = useState(
    from === 'earlyAccess'
  );
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      if (window.pageYOffset > 1) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setShowMenu(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      <PageSEO pageKey={pageKey} pageNumber={pageNumber} />

      {/* Add the conditional statement here */}

      <div
        className={`${
          showMenu ? 'h-screen' : ''
        } z-50 sticky top-0 left-0 right-0 ${shadow && 'shadow-md'}`}
      >
        {isEarlyAccessPage && (
          <div className="sticky z-100000 flex flex-row justify-around items-center py-3 bg-gradient-to-r from-[#9747FF] to-[#BA8FFF]/70">
            <Container>
              <div className="flex flex-row items-center">
                <span className="sm:w-3 sm:h-3 h-2 w-2 flex align-middle justify-center rounded-full relative bg-white opacity-100">
                  <span className="sm:h-3 sm:w-3 h-2 w-2 rounded-full bg-white absolute animate-ping inset-0">
                    {' '}
                  </span>
                </span>
                <span className="ml-4 sm:text-lg text-sm text-left text-white">
                  Top 100 ‘Early Access’ users will get 85% Off on our ‘Yearly
                  Growth Plan’
                </span>
                <span className="text-[#56289F] hidden sm:block ml-5 text-lg text-left border-b-2 border-[#56289F]">
                  <Link href={`${BASE_URI}/pricing`}>View Pricing Plans</Link>
                </span>
                <div className="flex flex-grow justify-end">
                  <Icon
                    onClick={() => setIsEarlyAccessPage(false)}
                    icon={cross}
                    height={30}
                    className="self-end text-primaryColor cursor-pointer" // remove flex classes and add self-end
                  />
                </div>
              </div>
            </Container>
          </div>
        )}

        <Navbar
          isEarlyAccessPage={isEarlyAccessPage}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>

      {showBreadCrumb && (
        <BreadCrumb crumbContent={crumbContent} background={background} />
      )}

      <div className={`${showMenu ? 'hidden' : ''} `}>
        {children}
        {/* {from !== 'blog' &&
          from !== 'earlyAccess' &&
          from !== 'privacy' &&
          from !== 'terms' &&
          from !== 'tools' && <BookNowSection />} */}

        {from !== 'login' && from !== 'register' && from !== 'listVehicle' && (
          <ClubSection />
        )}
        <Footer />
      </div>
      {showButton && (
        <button type="button" onClick={scrollToTop} className="back-to-top">
          <BsArrowUp />
        </button>
      )}
    </>
  );
}

export default LandingPage;
