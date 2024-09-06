'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import PageSEO from '@/components/pageSEO';
import Loading from '@/components/Loading';

const ListYourVehicleView = dynamic(() => import('@/views/ListVehiclePage'), {
  loading: () => <Loading />
});

function ListYourVehicle() {
  return (
    <>
      <PageSEO pageKey="listyourvehicle" />
      <ListYourVehicleView />
    </>
  );
}

export default ListYourVehicle;
