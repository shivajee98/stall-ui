import React from 'react'
import dynamic from 'next/dynamic'

const Stall = dynamic(() => import("./_components/Stall"), {
    ssr: false,
})

 const Home = () => {
  return (
    <div className='bg-yellow-400/80'>
        <Stall />
    </div>
  )
}


export default Home
