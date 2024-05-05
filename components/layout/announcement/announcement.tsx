import { Car, ShieldIcon, Truck, TruckIcon } from 'lucide-react'
import React from 'react'

const Announcement = () => {
  return (
    <div className='h-[25px] bg-slate-300 border-b border-black border-opacity-15'>
        <div className='w-[80vw] m-auto'>
            <div className='w-full grid grid-cols-3 gap-10'>
                <div className='m-auto flex flex-row text-sm content-center'><ShieldIcon size={20}/> <p className='px-4 opacity-80'>Secure Payments</p></div>
                <div><p>Free Shipping on orders over £100</p></div>
                <div className='m-auto flex flex-row text-sm content-center'><Truck size={20}/> <p className='px-4 opacity-80'>Next Day Delivery</p></div>
            </div> 
        </div>
    </div>
  )
}

export default Announcement