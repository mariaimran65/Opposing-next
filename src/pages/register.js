'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';

const RegisterView = dynamic(() => import('@/views/registerpage'), {
  loading: () => <Loading />
});

function Register() {
  return <RegisterView />;
}

export default Register;
