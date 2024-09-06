import Link from 'next/link';
import NextImage from '../NextImage';
import joinBg from '../../../public/assets/join-bg.jpg';
import logo from '../../../public/assets/logo.png';

function RegisterForm() {
  return (
    <div className="px-3">
      <div className=" pb-16 pt-[1px] flex items-center justify-center ">
        <div className="w-full bg-white rounded-lg shadow-xl flex flex-col lg:flex-row md:flex-row">
          <div className="w-full lg:w-9/12 md:w-9/12 px-[48px] py-[80px]">
            <h2 className="text-[33px] text-[#40454B] font-bold text-center mb-4">
              Sign Up
            </h2>
            <p className="text-center text-[#40454B] text-[15px] font-bold mb-6">
              Enter your new account information
            </p>
            <form className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 sm:w-1/2 px-2 mb-4 md:mb-0 rounded-full">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="w-full md:w-1/2 sm:w-1/2 px-2">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#40454B] text-[15px] font-bold">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  className="w-full md:w-1/2 sm:w-1/2 p-3 border border-gray-300 rounded-full"
                />
              </div>

              <div>
                <label className="block text-[#40454B] text-[15px] font-bold">
                  Street Address *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full mb-2"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>

              <div>
                <label className="block text-[#40454B] text-[15px] font-bold">
                  Country *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full"
                />
              </div>

              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 sm:w-1/2 px-2 mb-4 md:mb-0">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    City *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="w-full md:w-1/2 sm:w-1/2 px-2">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    State / Province *
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-full"
                    defaultValue="Alabama"
                  >
                    <option value="Alabama">Alabama</option>
                    {/* Add more states/provinces as needed */}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 sm:w-1/2 px-2 mb-4 md:mb-0">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="w-full md:w-1/2 sm:w-1/2 px-2">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    Phone *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#40454B] text-[15px] font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-full"
                />
              </div>

              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 sm:w-1/2 px-2 mb-4 md:mb-0">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
                <div className="w-full md:w-1/2 sm:w-1/2 px-2">
                  <label className="block text-[#40454B] text-[15px] font-bold">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-full"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white font-bold text-[16px] py-3 px-8 hover:text-[#e94242] rounded-full border-2 border-[#234579] transition-all duration-200 ease-in-out"
                >
                  Join
                </button>
              </div>

              <p className="text-center mt-4 text-[15px] text-[#40454B] font-bold">
                Already have an account?{' '}
                <Link href="/login" className="text-[#234579]">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
          <div className="hidden lg:block md:block w-[450px] relative overflow-hidden">
            <NextImage
              src={joinBg}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="z-0 rounded-r-lg"
            />

            <div className="relative inset-0 top-24 z-20 flex justify-center items-center">
              <NextImage src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
