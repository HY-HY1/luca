import { Search, User } from 'lucide-react'
import React from 'react'
import Navigation from './navigation'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[75px] w-full border-b border-black border-opacity-30'>
        <div className='w-[90vw] m-auto'>
            <div className='w-full h-full place-content-center m-auto grid grid-cols-3 gap-10'>
                <div className='m-auto '><h1 className='m-auto text-2xl py-4'>RYZENS</h1></div>
                <div className='m-auto py-4'><Navigation/></div>
                <div className='m-auto flex flex-row justify-between w-[80px]'>
                    <div><Link href={'/login'}><User/></Link></div>
                    <div><Search/></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar