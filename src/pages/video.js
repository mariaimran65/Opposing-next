'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';

const VideoView = dynamic(() => import('@/views/VideoPage'), {
  loading: () => <Loading />
});

function Video() {
  return <VideoView />;
}

export default Video;
