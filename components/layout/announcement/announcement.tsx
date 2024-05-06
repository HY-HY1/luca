"use client"
import { ShieldIcon, Truck } from 'lucide-react'
import React from 'react'
import { useMediaQuery } from '@react-hook/media-query'

const MobileAnnouncement = () => {
  return (
    <div className='h-[25px] w-full bg-slate-300 border-b border-black border-opacity-15 '>
      <div className='w-full m-auto'>
        <div className='text-center text-sm opacity-85'><h1>Free Shipping on all orders</h1></div>
      </div>
    </div>
  )
}

const DesktopAnnouncement = () => {
  return (
    <div className='h-[25px] w-full bg-slate-300 border-b border-black border-opacity-15 '>
      <div className='w-full m-auto'>
        <div className='text-sm w-full grid grid-cols-3 gap-10'> 
          <div className='m-auto flex flex-row text-sm content-center'>
            <ShieldIcon size={20}/> 
            <p className='px-2 sm:px-4 opacity-80'>Secure Payments</p>
          </div>
          <div><p className='text-center'>Free Shipping on all orders</p></div>
          <div className='m-auto flex flex-row text-sm content-center'>
            <Truck size={20}/> 
            <p className='px-2 sm:px-4 opacity-80'>Fast delivery</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

const Announcement = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  return (
    <>
      {isDesktop ? <DesktopAnnouncement /> : <MobileAnnouncement />}
    </>
  );
}

export default Announcement;
