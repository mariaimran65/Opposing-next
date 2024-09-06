// import React from 'react';
// import VehicleCard from '../cards/VehicleCard';
// import PartsCard from '../cards/PartsCard';
// import Container from '@/layouts/Container';
// import { httpClient } from '@/utils/api';

// function PremiumListesCards({ vehicles , parts  }) {

//   return (
//     <Container>
//       <div className="py-4">
//         <h1 className="text-center text-[33px] font-semibold mb-8 mt-10 text-[#40454B]">
//           PREMIUM VEHICLE AND PART LISTINGS
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {vehicles?.map((vehicle, index) => (
//             <VehicleCard
//               from="premium"
//               key={index}
//               thumbnail={`/assets/${vehicle.thumbnail}.jpg`}
//               title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
//               price={vehicle.price}
//               id={vehicle.id}
//               location={vehicle.location}
//               noOfImage={vehicle.noOfImage}
//               number={vehicle.number}
//               drivenMile={vehicle.drivenMile}
//             />
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//           {parts?.map((part, index) => (
//             <PartsCard
//               key={index}
//               thumbnail={`/assets/${part.thumbnail}.jpg`}
//               title={`${part.year} ${part.make} ${part.model}`}
//               price={part.price}
//               id={part.id}
//               location={part.location}
//               noOfImage={part.noOfImage}
//               number={part.phone}
//               condition={part.condition}
//               partName={part.partName}
//             />
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button className="text-[#234579] bg-white bg-no-repeat border-2 text-[16px] font-bold border-[#234579] hover:bg-[#234579] hover:text-white rounded-full py-2.5 px-10 transition-all duration-200 ease-in-out">
//             View All
//           </button>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export async function getServerSideProps(context) {
//   let token = null;
//   let vehicles = [];
//   let parts = [];

//   const { req } = context;
//   const { cookies } = req;
//   token = cookies.token;

//   const fetchVehicles = async (guest) => {
//     try {
//       const response = await httpClient.get(
//         guest
//           ? 'premiumVehiceParts/premium-guest'
//           : 'premiumVehiceParts/premium'
//       );
//       parts = response?.data?.parts || [];
//       vehicles = response?.data?.vehicles || [];
//     } catch (error) {
//       console.error('Error fetching vehicles:', error);
//     }
//   };

//   if (token) {
//     await fetchVehicles();
//   } else {
//     await fetchVehicles(true);
//   }

//   console.log('Fetched vehicles:', vehicles);
//   console.log('Fetched parts:', parts);

//   return {
//     props: {
//       vehicles,
//       parts
//     }
//   };
// }

// export default PremiumListesCards;

import React, { useEffect, useState } from 'react';
import VehicleCard from '../cards/VehicleCard';
import PartsCard from '../cards/PartsCard';
import Container from '@/layouts/Container';
import { httpClient } from '@/utils/api';

function PremiumListesCards() {
  const [vehicles, setVehicles] = useState([]);
  const [parts, setParts] = useState([]);

  const fetchVehicles = async (guest) => {
    try {
      const response = await httpClient.get(
        guest
          ? 'premiumVehiceParts/premium-guest'
          : 'premiumVehiceParts/premium'
      ); // Replace with your API endpoint
      setParts(response?.data?.parts);
      setVehicles(response?.data?.vehicles);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };
  let token = null;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  useEffect(() => {
    if (token) {
      fetchVehicles();
    } else {
      fetchVehicles(true);
    }
  }, []);

  //   const [vehicles, setVehicles] = useState([]);
  //   const [parts, setParts] = useState([]);

  //   useEffect(() => {
  //     // Fetch data from the API
  //     const fetchData = async () => {
  //       const res = await fetch('API_ENDPOINT');
  //       const data = await res.json();

  //       // Split the data into vehicles and parts
  //       const premiumVehicles = data.vehicles.slice(0, 4); // First 4 premium vehicles
  //       const premiumParts = data.parts.slice(0, 4); // First 4 premium parts

  //       setVehicles(premiumVehicles);
  //       setParts(premiumParts);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <Container>
      <div className="  py-4">
        <h1 className="text-center text-[33px] font-semibold mb-8 mt-10 text-[#40454B]">
          PREMIUM VEHICLE AND PART LISTINGS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              from="premium"
              key={index}
              thumbnail={vehicle.carImagesId.images[0]}
              title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              price={vehicle.price}
              id={vehicle.id}
              location={vehicle.location}
              noOfImage={vehicle.carImagesId.images?.length}
              number={vehicle.number}
              drivenMile={vehicle.drivenMile}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {parts.map((part, index) => (
            <PartsCard
              key={index}
              thumbnail={part?.partImagesId?.images[0]}
              title={`${part.year} ${part.make} ${part.model}`}
              price={part.price}
              id={part.id}
              location={part.location}
              noOfImage={part.noOfImage}
              number={part.phone}
              condition={part.condition}
              partName={part.partName}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className=" text-[#234579] bg-white bg-no-repeat border-2 text-[16px] font-bold border-[#234579] hover:bg-[#234579] hover:text-white rounded-full py-2.5 px-10 transition-all duration-200 ease-in-out">
            View All
          </button>
        </div>
      </div>
    </Container>
  );
}

export default PremiumListesCards;
