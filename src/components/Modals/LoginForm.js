import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaLock
} from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NextImage from '../NextImage';
import loginImage from '../../../public/assets/login-bg.jpg';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username or email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      // Handle form submission here
    }
  });

  return (
    <div className="px-16">
      <div className="pb-16 pt-[1px] flex items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow-xl flex flex-col lg:flex-row md:flex-row">
          <div className="w-full lg:w-1/2 md:w-1/2 px-[48px] py-[80px]">
            <h2 className="text-[33px] text-[#40454B] font-semibold text-center mb-1">
              Login
            </h2>
            <p className="text-center text-[15px] font-bold text-[#40454B] mb-[20px]">
              Welcome back ! Please enter your details.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-[#40454B] text-[15px] font-bold mb-2"
                  htmlFor="username"
                >
                  Email / Username
                </label>
                <div className="flex items-center border rounded-full py-2 px-4">
                  <FaEnvelope className="text-gray-400 text-[17px] mr-2" />
                  <input
                    className="w-full p-2 border-none focus:ring-0 focus:outline-none"
                    id="username"
                    type="text"
                    placeholder="Enter your username or email"
                    {...formik.getFieldProps('username')}
                  />
                </div>
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#40454B] text-[15px] font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="flex items-center border rounded-full py-2 px-4">
                  <FaLock className="text-gray-400 text-[17px] mr-2" />
                  <input
                    className="w-full p-2 border-none focus:ring-0 focus:outline-none"
                    id="password"
                    type="password"
                    placeholder="********"
                    {...formik.getFieldProps('password')}
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="flex justify-end items-end mb-6">
                <a
                  className="inline-block align-baseline font-extrabold text-[13.125px] text-[#234579]"
                  href="#"
                >
                  Forget Password?
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white font-bold text-[16px] py-3 px-8 hover:text-[#e94242] rounded-full border-2 border-[#234579] transition-all duration-200 ease-in-out"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center text-[15px] text-[#40454B] font-bold mt-4">
              Don't have an account?
              <Link
                className="font-bold ml-[6px] text-[#254579]"
                href="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="hidden lg:block md:block w-1/2 relative overflow-hidden">
            <NextImage
              src={loginImage}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="z-0 rounded-r-lg relative"
            />
            <div className="absolute left-0 top-0 transform translate-x-0 translate-y-0 w-full h-full [clip-path:polygon(0%_0%,_100%_0%,_0%_100%)] bg-gradient-to-b from-[#0a2b5cde] to-[#43679fbf]" />
            <div className="absolute inset-0 bottom-[225px] z-20 flex items-center">
              <div className="ml-10 text-white space-y-6">
                <h2 className="text-[33px] font-bold">
                  Call us today for more
                  <br className="hidden md:block" />
                  information
                </h2>
                <div className="flex items-center text-lg">
                  <ImPhone className="mr-2 text-[25px]" />
                  <span className="text-[23px] font-extrabold">
                    937-430-0242
                  </span>
                </div>
                <div className="flex space-x-4 text-4xl">
                  <FaFacebook className="text-[#e94242] hover:text-white cursor-pointer" />
                  <FaTwitter className="text-[#e94242] hover:text-white cursor-pointer" />
                  <FaInstagram className="text-[#e94242] hover:text-white cursor-pointer" />
                  <FaYoutube className="text-[#e94242] hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaLock
// } from 'react-icons/fa';
// import { ImPhone } from 'react-icons/im';
// import Link from 'next/link';
// import NextImage from '../NextImage';
// import loginImage from '../../../public/assets/login-bg.jpg';

// function LoginForm() {
//   return (
//     <div className="px-16">
//       <div className=" pb-16 pt-[1px] flex items-center justify-center ">
//         <div className="w-full bg-white rounded-lg shadow-xl flex flex-col lg:flex-row md:flex-row">
//           <div className="w-full lg:w-1/2 md:w-1/2 px-[48px] py-[80px]">
//             <h2 className="text-[33px] text-[#40454B] font-semibold text-center mb-1">
//               Login
//             </h2>
//             <p className="text-center text-[15px] font-bold text-[#40454B] mb-[20px]">
//               Welcome back ! Please enter your details.
//             </p>
//             <form>
//               <div className="mb-4">
//                 <label
//                   className="block text-[#40454B] text-[15px] font-bold mb-2"
//                   htmlFor="username"
//                 >
//                   Email / Username
//                 </label>
//                 <div className="flex items-center border rounded-full py-2 px-4">
//                   <FaEnvelope className="text-gray-400 text-[17px] mr-2" />
//                   <input
//                     className="w-full p-2 border-none focus:ring-0 focus:outline-none"
//                     id="username"
//                     type="text"
//                     placeholder="Enter your username or email"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-[#40454B] text-[15px] font-bold mb-2"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <div className="flex items-center border rounded-full py-2 px-4">
//                   <FaLock className="text-gray-400 text-[17px] mr-2" />
//                   <input
//                     className="w-full p-2 border-none focus:ring-0 focus:outline-none"
//                     id="password"
//                     type="password"
//                     placeholder="********"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-end items-end mb-6">
//                 <a
//                   className="inline-block align-baseline font-extrabold text-[13.125px] text-[#234579]"
//                   href="#"
//                 >
//                   Forget Password?
//                 </a>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   className="bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white font-bold text-[16px] py-3 px-8 hover:text-[#e94242] rounded-full border-2 border-[#234579] transition-all duration-200 ease-in-out"
//                   type="button"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//             <p className="text-center text-[15px] text-[#40454B] font-bold mt-4">
//               Don't have an account?
//               <Link
//                 className="font-bold ml-[6px] text-[#254579]"
//                 href="/register"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//           <div className="hidden lg:block md:block w-1/2 relative overflow-hidden">
//             <NextImage
//               src={loginImage}
//               alt="Background"
//               layout="fill"
//               objectFit="cover"
//               className="z-0 rounded-r-lg relative"
//             />
//             <div className="absolute left-0 top-0 transform translate-x-0 translate-y-0 w-full h-full [clip-path:polygon(0%_0%,_100%_0%,_0%_100%)] bg-gradient-to-b from-[#0a2b5cde] to-[#43679fbf]" />
//             <div className="absolute inset-0 bottom-[225px] z-20 flex items-center">
//               <div className="ml-10 text-white space-y-6">
//                 <h2 className="text-[33px] font-bold">
//                   Call us today for more
//                   <br className="hidden md:block" />
//                   information
//                 </h2>
//                 <div className="flex items-center text-lg">
//                   <ImPhone className="mr-2 text-[25px]" />
//                   <span className="text-[23px] font-extrabold">
//                     937-430-0242
//                   </span>
//                 </div>
//                 <div className="flex space-x-4 text-4xl">
//                   <FaFacebook className="text-[#e94242] hover:text-white cursor-pointer" />
//                   <FaTwitter className="text-[#e94242] hover:text-white cursor-pointer" />
//                   <FaInstagram className="text-[#e94242] hover:text-white cursor-pointer" />
//                   <FaYoutube className="text-[#e94242] hover:text-white cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
