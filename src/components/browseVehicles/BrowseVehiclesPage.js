import React from 'react';
import NextImage from '../NextImage';
import browsebg from '../../../public/assets/browserbg.jpg';
import SearchBar from './SearchBar';
import Container from '@/layouts/Container';
import { fetchVehicles } from './api';
import BrowseVehicleCard from '../cards/BrowseVehicleCard';

function BrowseVehiclesPage() {
  const vehicles = [
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 10,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 15,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 8,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 19,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 9,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 10,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 5,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 14,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 14,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 14,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    },
    {
      thumbnail: 'car-4',
      price: '125,000',
      miles: '2000 ',
      number: ' +1 (713) 725-3310',
      id: '56484541684654',
      noOfLike: 2,
      noOfImage: 14,
      location: 'Blooming Prairie, MN',
      year: '1932',
      make: 'Ford',
      model: 'Tudor'
    }
  ];
  return (
    <>
      <div className="relative h-[440px]">
        <div className="absolute inset-0 z-0">
          <NextImage
            src={browsebg}
            alt="Browse Vehicle Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30  z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Container>
            <div className="flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-6xl font-bold">CARS FOR SALE</h1>
              <p className="mt-4 text-2xl">Discover the Perfect Ride</p>
              <button className="mt-8 px-8 py-2 text-[#234579] bg-white border-2 border-[#234579] font-semibold rounded-full hover:bg-[#234579] hover:text-white">
                List a Vehicle
              </button>
            </div>
          </Container>
        </div>
      </div>
      <SearchBar />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center mb-10">
          {vehicles.map((vehicle, index) => (
            <BrowseVehicleCard
              key={index}
              thumbnail={`/assets/${vehicle.thumbnail}.jpg`}
              title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              price={vehicle.price}
              id={vehicle._id}
              location={vehicle.location}
              noOfImage={vehicle.noOfImage}
              // noOfImage={vehicle.carImagesId.images?.length}
              number={vehicle.number}
              drivenMile={vehicle.miles}
              isLiked={vehicle.isLiked}
            />
          ))}
          {/* {vehicleSlice.length === 0 && <h2>No vehicles found.</h2>} */}
        </div>
      </Container>
    </>
  );
}

export default BrowseVehiclesPage;
