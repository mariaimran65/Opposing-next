import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Container from '@/layouts/Container';

import logo from '../../public/assets/logo.png';

import NextImage from './NextImage';

import mapIcon from '../../public/assets/mapmarker.svg';
import emailIcon from '../../public/assets/email.svg';
import phoneIcon from '../../public/assets/phone.svg';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#1d1d1d]">
      <Container>
        <footer className="text-white py-8">
          <div className="mx-auto flex flex-col md:flex-row justify-around items-start">
            <div className="flex flex-col items-start md:items-start lg:pt-3 md:pt-2">
              <NextImage
                src={logo}
                alt="Opposing Cylinders Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="mt-4 md:mt-0">
              <h4 className="text-lg mb-2 font-bold">Links</h4>
              <ul>
                <li className="mb-3">
                  <Link
                    href="/"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    Video
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    Browse Vehicles
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    Shop
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="#"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    List Your Vehicle
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0">
              <h4 className="text-lg font-bold mb-2">Contact Information</h4>
              <ul>
                <li className="mb-2 flex items-center">
                  <NextImage src={emailIcon} className="mr-2" />
                  <Link
                    href="mailto:info@opposingcylinders.com"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    info@opposingcylinders.com
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <NextImage src={phoneIcon} className="mr-2" />
                  <Link
                    href="tel:+19374300242"
                    className="hover:text-hoverColor font-extrabold"
                  >
                    (937) 430-0242
                  </Link>
                </li>
                <li className="mb-2 flex items-center">
                  <NextImage src={mapIcon} className="mr-2" />
                  <div className="font-extrabold">
                    <p>Opposing Cylinders</p>
                    <p>PO Box 8094</p>
                    <p>Carlisle, Ohio 45005</p>
                  </div>
                </li>
              </ul>
              <div className="flex mt-4 space-x-4">
                <Link href="#" className="hover:text-hoverColor text-2xl ">
                  <FaFacebook />
                </Link>
                <Link href="#" className="hover:text-hoverColor text-2xl">
                  <FaTwitter />
                </Link>
                <Link href="#" className="hover:text-hoverColor text-2xl">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <hr className="bg-gray-500 opacity-10 my-4 border-0 border-t border-t-custom" />
          <div className="container mx-auto text-[15px] font-extrabold text-center mt-7">
            <p>© {year} All Rights Reserved By Opposing Cylinders</p>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
