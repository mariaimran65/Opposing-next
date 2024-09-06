import React from 'react';

import dynamic from 'next/dynamic';

import PageSEO from '@/components/pageSEO';
import Loading from '@/components/Loading';

const TeamViewPage = dynamic(() => import('@/views/team'), {
  loading: () => <Loading />
});

function Team() {
  return (
    <>
      <PageSEO pageKey="team" />
      <TeamViewPage />
    </>
  );
}

export default Team;
