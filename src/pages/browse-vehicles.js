'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import PageSEO from '@/components/pageSEO';

const BrowseVehiclesView = dynamic(() => import('@/views/BrowseVehiclesPage'), {
  loading: () => <Loading />
});

function BrowseVehicles() {
  return (
    <>
      <PageSEO pageKey="browsevehicles" />
      <BrowseVehiclesView />;
    </>
  );
}

export default BrowseVehicles;
