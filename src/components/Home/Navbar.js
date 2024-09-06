import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose, IoSearch } from 'react-icons/io5';
import Container from '@/layouts/Container';
import logo from '../../../public/assets/logo.png';
import NextImage from '../NextImage';
import Avatar from '../../../public/assets/User-avatar.png';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        className={`bg-gradient-to-r from-[#f9fafc] to-[#486ca0] ${
          isSticky ? 'hidden' : 'block'
        }`}
      >
        <Container>
          <header className="flex justify-between items-center py-2">
            <div>
              <Link href="/">
                <NextImage className="h-24" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-2 w-full max-w-sm relative">
              <input
                type="text"
                className="form-control p-2 border h-12 border-gray-300 rounded pl-10 pr-20 w-full"
                placeholder="Search"
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 left-3">
                <IoSearch />
              </span>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white py-2 px-4 rounded absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-white hover:text-[#234579]"
              >
                Search
              </button>
            </div>
            <div className="flex md:hidden items-center space-x-2">
              <button className="text-2xl" onClick={toggleMenu}>
                {menuOpen ? <IoClose /> : <IoMenu />}
              </button>
              <NextImage
                src={Avatar}
                alt="Profile"
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
              <span>Hi, first</span>
            </div>
          </header>
        </Container>
      </div>
      <nav
        className={`bg-[#1D1D1D] text-white  ${
          isSticky ? 'fixed top-0 left-0 w-full z-50' : ''
        } ${menuOpen ? 'block' : 'hidden md:block'}`}
      >
        <Container>
          <div className="md:flex md:items-center md:justify-between">
            <div className="hidden md:flex space-x-8 text-[22px]">
              <Link href="/" className="hover:text-gray-400">
                HOME
              </Link>
              <Link href="/browse-vehicles" className="hover:text-gray-400">
                VEHICLES FOR SALE
              </Link>
              <Link href="/browse-parts" className="hover:text-gray-400">
                PARTS FOR SALE
              </Link>
              <Link href="/list-your-vehicle" className="hover:text-gray-400">
                LIST VEHICLE
              </Link>
              <Link href="#" className="hover:text-gray-400">
                APPAREL
              </Link>
              <Link href="/video" className="hover:text-gray-400">
                VIDEO
              </Link>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <NextImage
                src={Avatar}
                alt="Profile"
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
              <span>Hi, first</span>
            </div>
          </div>
          <div
            className={`md:hidden space-y-2 ${menuOpen ? 'block' : 'hidden'}`}
          >
            <Link href="/" className="block py-2 hover:text-gray-400">
              HOME
            </Link>
            <Link
              href="/browse-vehicles"
              className="block py-2 hover:text-gray-400"
            >
              VEHICLES FOR SALE
            </Link>
            <Link
              href="/browse-parts"
              className="block py-2 hover:text-gray-400"
            >
              PARTS FOR SALE
            </Link>
            <Link
              href="/list-your-vehicle"
              className="block py-2 hover:text-gray-400"
            >
              LIST VEHICLE
            </Link>
            <Link href="#" className="block py-2 hover:text-gray-400">
              APPAREL
            </Link>
            <Link href="/video" className="block py-2 hover:text-gray-400">
              VIDEO
            </Link>
            <Link href="/login" className="block py-2 hover:text-gray-400">
              Login
            </Link>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;

// import Link from 'next/link';
// import Image from 'next/image';
// import { IoSearch } from 'react-icons/io5';
// import Container from '@/layouts/Container';
// import logo from '../../../public/assets/logo.png';

// function Navbar() {
//   return (
//     <div>
//       <div className="bg-gradient-to-r from-[#f9fafc] to-[#486ca0]">
//         <Container>
//           <header className="">
//             <div className="flex justify-between items-center">
//               <div className="py-2">
//                 <Link href="/">
//                   <Image className="h-24" src={logo} alt="Logo" />
//                 </Link>
//               </div>
//               <div className="flex items-center space-x-2 w-full max-w-sm relative">
//                 <input
//                   type="text"
//                   className="form-control p-2 border h-12 border-gray-300 rounded pl-10 pr-20 w-full"
//                   placeholder="Search"
//                 />
//                 <span className="absolute top-1/2 transform -translate-y-1/2 left-3">
//                   <IoSearch />
//                 </span>
//                 <button
//                   type="submit"
//                   className="bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white py-2 px-4 rounded absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-white hover:text-[#234579]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>
//           </header>
//         </Container>
//       </div>
//       <nav className="bg-black text-white py-3">
//         <Container>
//           <div className=" mx-auto px-[10px] flex items-center justify-between ">
//             <div className="flex space-x-8 text-[22px]">
//               <Link href="/" className="hover:text-gray-400">
//                 HOME
//               </Link>
//               <Link href="#" className="hover:text-gray-400">
//                 VEHICLES FOR SALE
//               </Link>
//               <Link href="#" className="hover:text-gray-400">
//                 PARTS FOR SALE
//               </Link>
//               <Link href="#" className="hover:text-gray-400">
//                 LIST VEHICLE
//               </Link>
//               <Link href="#" className="hover:text-gray-400">
//                 APPAREL
//               </Link>
//               <Link href="#" className="hover:text-gray-400">
//                 VIDEO
//               </Link>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/path/to/profile/image.jpg"
//                 alt="Profile"
//                 className="h-8 w-8 rounded-full"
//                 width={32}
//                 height={32}
//               />
//               <span>Hi, first</span>
//             </div>
//           </div>
//         </Container>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
