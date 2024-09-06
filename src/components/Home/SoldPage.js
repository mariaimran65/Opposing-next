// import Link from 'next/link';
// import Container from '@/layouts/Container';
// import SoldCard from '../cards/SoldCard';
// import { httpClient } from '../../utils/api';

// function SoldPage({ soldVehicles }) {
//   return (
//     <Container>
//       <div className="container">
//         <h1 className="text-[33px] text-[#40454B] font-bold my-10">
//           Recently Sold Vehicles
//         </h1>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {soldVehicles?.slice(0, 4).map((vehicle, index) => (
//             <SoldCard
//               key={index}
//               id={vehicle._id}
//               thumbnail={vehicle?.carImagesId?.images[0]}
//               title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
//             />
//           ))}
//         </div>

//         <div className="flex justify-center mt-10 mb-9">
//           <Link href="/recent-sold-vehicle">
//             <button className="px-6 py-[14px] text-[15px] font-semibold bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-lg">
//               View All Sold Vehicles
//             </button>
//           </Link>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export async function getServerSideProps() {
//   console.log('get server side props');
//   let soldVehicles = [];

//   try {
//     const response = await httpClient.get('vehicles/sold');
//     soldVehicles = response.data;
//     console.log(soldVehicles, 'soldVehicles');
//   } catch (error) {
//     console.error('Error fetching sold vehicles:', error);
//     soldVehicles = [];
//   }

//   return {
//     props: {
//       soldVehicles
//     }
//   };
// }

// export default SoldPage;

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchSoldVehicles } from './api';
import Container from '@/layouts/Container';
import SoldCard from '../cards/SoldCard';

function SoldPage() {
  const [soldVehicles, setSoldVehicles] = useState([]);

  useEffect(() => {
    const getSoldVehicles = async () => {
      try {
        const soldVehiclesData = await fetchSoldVehicles();
        setSoldVehicles(soldVehiclesData);
      } catch (error) {
        console.error(error);
      }
    };

    getSoldVehicles();
  }, []);

  return (
    <Container>
      <div className="container">
        <h1 className="text-[33px] text-[#40454B] font-bold my-10">
          Recently Sold Vehicles
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {soldVehicles.slice(0, 4).map((vehicle, index) => (
            <SoldCard
              key={index}
              id={vehicle._id}
              thumbnail={vehicle?.carImagesId?.images[0]}
              title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 mb-9">
          <Link href="/recent-sold-vehicle">
            <button className="px-6 py-[14px] text-[15px] font-semibold bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-lg">
              View All Sold Vehicles
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SoldPage;
