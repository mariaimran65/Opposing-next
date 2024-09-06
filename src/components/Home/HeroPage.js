import { useState, useEffect } from 'react';
import { fetchVehicles } from './api';
import HeroCard from '../cards/HeroCard';
import RecentVideos from '../cards/RecentVedios';
import Container from '@/layouts/Container';

function HeroPage() {
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesCount, setVehiclesCount] = useState(null);

  let token = null;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

  // const token = localStorage.getItem('token');

  useEffect(() => {
    const getVehicles = async () => {
      try {
        if (token) {
          const { vehicles, vehiclesCount } = await fetchVehicles();
          setVehicles(vehicles);
          setVehiclesCount(vehiclesCount);
        } else {
          const { vehicles, vehiclesCount } = await fetchVehicles(true);
          setVehicles(vehicles);
          setVehiclesCount(vehiclesCount);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getVehicles();
  }, [token]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container>
      <div className="custom-container py-2 grid grid-cols-1 lg:grid-cols-4 gap-2 pt-16">
        <div className="lg:col-span-3">
          <h1 className="text-[33px] font-bold mb-4 text-[#40454B]">
            OUR NEWEST LISTINGS
          </h1>
          <div className="hero-card-container">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                style={{
                  width: '300px',
                  // height: "",
                  borderRadius: '10px',
                  float: 'left',
                  margin: '5px'
                }}
              >
                <HeroCard
                  thumbnail={vehicle?.carImagesId?.thumbnail}
                  isThumbnail={vehicle?.carImagesId?.thumbnail || false}
                  oldImage={vehicle?.carImagesId?.images[0]}
                  title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  price={vehicle.price}
                  likes={vehicle.noOfLike}
                  isLiked={vehicle.isLiked}
                  id={vehicle.id}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-[90%] mt-1 mb-3">
            <button className="mt-4 text-[15px] text-white bg-gradient-to-r from-[#0a2b5c] to-[#43679f] border-2 border-[#234579] rounded-md px-10 py-[10px] pb-[13px] transition-all duration-200 ease-in-out hover:bg-white hover:border-[#234579] hover:text-[#234579]">
              View All {vehiclesCount} Vehicles
            </button>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="hero-vedio-container">
            <RecentVideos />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroPage;

// import React from 'react';
// import HeroCard from './HeroCard';
// import RecentVideos from './RecentVedios';
// import Container from '@/layouts/Container';

// function HeroPage() {
//   const listings = [
//     {
//       image: 'hero-img',
//       title: '1932 FORD ROADSTER P/U',
//       price: '$145000',
//       noOfLike: 1
//     },
//     {
//       image: 'bg',
//       title: '1964 Chevrolet Corvette',
//       price: '$75000',
//       noOfLike: 2
//     },
//     {
//       image: 'car-1',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     },
//     {
//       image: 'car-2',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     },
//     {
//       image: 'car-3',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     },
//     {
//       image: 'car-4',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     },
//     {
//       image: 'car-5',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     },
//     {
//       image: 'bg',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     },
//     {
//       image: 'bg',
//       title: '1970 Ford F-100',
//       price: '$95000',
//       noOfLike: 1
//     }
//   ];
//   return (
//     <Container>
//       <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8   pt-16">
//         <div className="lg:col-span-3">
//           <h1 className="text-3xl font-bold mb-4 text-[#40454B]">
//             OUR NEWEST LISTINGS
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-2">
//             {listings.map((listing, index) => (
//               <HeroCard
//                 key={index}
//                 image={`/assets/${listing.image}.jpg`}
//                 title={listing.title}
//                 price={listing.price}
//                 likes={listing.noOfLike}
//               />
//             ))}
//           </div>
//           <div className="flex justify-center mt-1 mb-3">
//             <button className="mt-4 text-white bg-gradient-to-r from-[#0a2b5c] to-[#43679f] border-2 border-[#234579] rounded-md px-10 py-[10px] pb-[13px] transition-all duration-200 ease-in-out hover:bg-white hover:border-[#234579] hover:text-[#234579]">
//               View All Vehicles
//             </button>
//           </div>
//         </div>

//         <div className="lg:col-span-1 pt-0">
//           <RecentVideos />
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default HeroPage;
