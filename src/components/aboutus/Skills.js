import React from 'react';
import { skills } from '@/constants/skills';
import Container from '@/layouts/Container';
import NextImage from '../NextImage';

function Skills() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 my-5">
          {skills.map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg shadow-xl min-h-auto p-5 ${
                i % 2 === 0 ? 'hover:rotate-3' : 'hover:-rotate-3'
              } transform transition duration-300 ease`}
            >
              <div className="flex">
                <div className="overflow-hidden pl-5 flex content-center justify-center">
                  <NextImage
                    src={`/assets/${service.coverImage}.png`}
                    alt={service.heading}
                    width={200}
                    height={250}
                    className="h-[200] w-[200]"
                  />
                </div>
                <div>
                  {' '}
                  <div className="pt-3">
                    <h2 className="text-lg text-center font-semibold mb-2 uppercase">
                      {service.heading}
                    </h2>
                    <p className=" text-center text-[14px] px-5 md:text-lg lg:text-lg xl:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Skills;
