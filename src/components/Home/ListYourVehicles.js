import React from 'react';
import Image from 'next/image';
import ListVehcileCard from '../cards/ListVehiclesCard';
import backgroundImage from '../../../public/assets/list-your-vehicle.png';
import Container from '@/layouts/Container';
import {
  listVehicleConstant,
  listVehicleHeader
} from '@/constants/ListVehicles.Constant';

function ListYourVehicles() {
  return (
    <div className="relative flex items-center justify-center h-[225vh] sm:h-[120vh] md:h-[70vh] lg:h-[65vh]">
      <Image
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background Image"
        className="z-0"
        objectPosition="center"
      />
      <div className="z-10">
        <Container>
          <h1 className="text-[33px] font-bold text-white mb-8 text-center">
            {listVehicleHeader}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {listVehicleConstant.map((vehicle, index) => (
              <ListVehcileCard
                key={index}
                icon={vehicle.icon}
                iconHover={vehicle.iconHover}
                title={vehicle.title}
                price={vehicle.price}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ListYourVehicles;
