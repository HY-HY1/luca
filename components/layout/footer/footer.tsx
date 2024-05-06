import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full min-h-[200px] border-t border-black border-opacity-30 bg-blue-950 text-white'>
        <div className='w-[70vw] m-auto'>
          <div className='w-full h-[60px] border-b border-white flex flex-row py-4 '>
            <Link href={'/policies/delivery-returns'} ><p>Delivery & Returns</p></Link>
            <Link href={'/policies/terms-conditions'} ><p className='px-6'>Terms & Conditions</p></Link>
            <Link href={'/policies/privacy'} ><p>Privacy Policy</p></Link>
          </div>
            <div className='w-full flex flex-col py-3'>
              <h1 className='text-xl'>Contact</h1>
              <p>sales@ryzenswholesale.co.uk</p>
            </div>
        </div>
    </div>
  )
}

export default Footer