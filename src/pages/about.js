'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import PageSEO from '@/components/pageSEO';

const AboutUsView = dynamic(() => import('@/views/aboutpage'), {
  loading: () => <Loading />
});

function About() {
  return (
    <>
      <PageSEO pageKey="about" />
      <AboutUsView />
    </>
  );
}

export default About;
