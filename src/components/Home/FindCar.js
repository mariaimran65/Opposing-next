import { useRouter } from 'next/router';
import React, { useState } from 'react';

function generateYearOptions(startYear, endYear) {
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return years;
}

function FindCar() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState(currentYear - 20);
  const [endYear, setEndYear] = useState(currentYear);

  const yearOptions = generateYearOptions(1980, currentYear);

  const [searchQuery, setSearchQuery] = useState({
    fromYear: null,
    toYear: null,
    make: '',
    model: ''
  });

  const handleSearchChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const queryString = new URLSearchParams();

    // Use forEach to iterate over entries
    Object.entries(searchQuery).forEach(([key, value]) => {
      queryString.append(key, value);
    });

    // Get the final query string
    const finalQueryString = queryString.toString();

    // Navigate to the other screen with the searchQuery as a query parameter
    router.push(`/browse-vehicles?${finalQueryString}`);
  };

  return (
    <div className="bg-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-[33px] font-extrabold text-white mb-6">
        FIND YOUR NEXT CAR
      </h1>
      <div className="w-full max-w-4xl grid gap-4 md:grid-cols-3 sm:grid-cols-3">
        <input
          value={searchQuery.make}
          type="text"
          onChange={handleSearchChange}
          name="make"
          placeholder="Make"
          className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={searchQuery.model}
          type="text"
          onChange={handleSearchChange}
          name="model"
          placeholder="Model"
          className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2 items-center w-full">
          <select
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
            className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Start Year
            </option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <span className="text-white">-</span>
          <select
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
            className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              End Year
            </option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="text-[16px] mt-4 bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white font-extrabold py-3 px-2 rounded-lg hover:bg-white hover:text-[#234579]"
      >
        Find It Now!
      </button>
    </div>
  );
}

export default FindCar;

// import { useRouter } from 'next/router';
// import React, { useState } from 'react';

// function generateYearOptions(startYear, endYear) {
//   const years = [];
//   for (let i = startYear; i <= endYear; i++) {
//     years.push(i);
//   }
//   return years;
// }

// function FindCar() {
//   const router = useRouter();
//   const currentYear = new Date().getFullYear();
//   const [startYear, setStartYear] = useState(currentYear - 20);
//   const [endYear, setEndYear] = useState(currentYear);

//   const yearOptions = generateYearOptions(1980, currentYear);

//   const [searchQuery, setSearchQuery] = useState({
//     // fromAmount: null,
//     // toAmount: null,
//     fromYear: null,
//     toYear: null,
//     make: '',
//     model: ''
//   });

//   const handleSearchChange = (e) => {
//     setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
//   };

//   const handleSearch = () => {
//     const queryString = new URLSearchParams();

//     // Add each key-value pair to the query string
//     for (const [key, value] of Object.entries(searchQuery)) {
//       queryString.append(key, value);
//     }

//     // Get the final query string
//     const finalQueryString = queryString.toString();

//     // Navigate to the other screen with the searchQuery as a query parameter
//     router.push(`/browse-vehicles?${finalQueryString}`);
//   };

//   return (
//     <div className="bg-gray-900 p-6 flex flex-col items-center">
//       <h1 className="text-[33px] font-extrabold text-white mb-6">
//         FIND YOUR NEXT CAR
//       </h1>
//       <div className="w-full max-w-4xl grid gap-4 md:grid-cols-3 sm:grid-cols-3">
//         <input
//           value={searchQuery.make}
//           type="text"
//           onChange={handleSearchChange}
//           name="make"
//           placeholder="Make"
//           className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           value={searchQuery.model}
//           type="text"
//           onChange={handleSearchChange}
//           name="model"
//           placeholder="Model"
//           className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <div className="flex space-x-2 items-center w-full">
//           <select
//             value={startYear}
//             onChange={(e) => setStartYear(Number(e.target.value))}
//             className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="" disabled>
//               Start Year
//             </option>
//             {yearOptions.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//           <span className="text-white">-</span>
//           <select
//             value={endYear}
//             onChange={(e) => setEndYear(Number(e.target.value))}
//             className="p-3 w-full rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="" disabled>
//               End Year
//             </option>
//             {yearOptions.map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <button
//         onClick={handleSearch}
//         className=" text-[16px] mt-4 bg-gradient-to-r from-[#0a2b5c] to-[#43679f] text-white font-extrabold py-3 px-2 rounded-lg hover:bg-white hover:text-[#234579]"
//       >
//         Find It Now!
//       </button>
//     </div>
//   );
// }

// export default FindCar;
