'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import PageSEO from '@/components/pageSEO';

const ContactView = dynamic(() => import('@/views/contactpage'), {
  loading: () => <Loading />
});

function Contact() {
  return (
    <>
      <PageSEO pageKey="contact" />
      <ContactView />
    </>
  );
}

export default Contact;
