import React from 'react'
import { ContactForm } from '../_components/contactForm'

const Contact = () => {
  return (
    <div>
        <div className='w-[90vw] sm:w-[90vw] md:w-[60vw] m-auto'>
            <div>
                <h1 className='text-xl py-4'>Wholesale Inquiry</h1>
            </div>
            <div className='w-full'>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact