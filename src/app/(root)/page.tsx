'use client';

import dynamic from 'next/dynamic';

const Stall = dynamic(() => import('./_components/Stall'), { ssr: false });

export default function ClientStall() {
  return <Stall />}
