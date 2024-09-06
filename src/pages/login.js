'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';

const LoginView = dynamic(() => import('@/views/loginPage'), {
  loading: () => <Loading />
});

function Login() {
  return <LoginView />;
}

export default Login;
