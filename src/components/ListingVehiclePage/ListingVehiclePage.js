import React from 'react';

import LandingPage from '@/layouts/LandingPage';
import Container from '@/layouts/Container';
import PricingPlans from './ListPage';

function BrowsePartsComponent() {
  return (
    <LandingPage from="listVehicle">
      <Container>
        <PricingPlans />
      </Container>
    </LandingPage>
  );
}

export default BrowsePartsComponent;
