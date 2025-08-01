'use client';

import dynamic from 'next/dynamic';
import StallRoom from './_components/Room';

const Stall = dynamic(() => import('./_components/Stall'), { ssr: false });

export default function ClientStall() {
  return (
    <div className='bg-yellow-400/80'>
      <Stall />
    </div>
  )
}
