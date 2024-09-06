import React from 'react';

import LandingPage from '@/layouts/LandingPage';
import Container from '@/layouts/Container';
import { teamConstants } from '@/constants/teamComponent';

import TeamCard from './teamCard';

const crumbContent = [
  {
    text: 'Our Team'
  }
];

function TeamComponent() {
  return (
    <LandingPage showBreadCrumb crumbContent={crumbContent}>
      <div className="bg-primaryColor/5">
        <Container>
          <p className="text-primaryColor text-4xl text-center font-semibold pt-[2rem] pb-[2rem] ">
            Welcome our talented team of professionals
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-5 mt-20">
            {teamConstants.map((card, index) => (
              <TeamCard card={card} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </LandingPage>
  );
}

export default TeamComponent;
