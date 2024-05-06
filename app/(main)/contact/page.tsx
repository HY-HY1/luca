import React from 'react'
import { ContactForm } from '../_components/contactForm'

const Contact = () => {
  return (
    <div>
        <div className='w-[90vw] sm:w-[90vw] md:w-[60vw] m-auto'>
            <div className='py-4'>
                <h1 className='text-xl '>Wholesale Inquiry</h1>
                <p className='opacity-80 text-sm'>Provide the requested information</p>
            </div>
            <div className='w-full'>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact