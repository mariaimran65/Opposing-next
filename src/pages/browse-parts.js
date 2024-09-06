'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import PageSEO from '@/components/pageSEO';

const BrowsePartsView = dynamic(() => import('@/views/BrowsePartsPage'), {
  loading: () => <Loading />
});

function BrowseParts() {
  return (
    <>
      <PageSEO pageKey="browseparts" />
      <BrowsePartsView />
    </>
  );
}

export default BrowseParts;
