import React from 'react'
import Hero from './_layout/hero/hero'
import Products from './_layout/products/products'
import Mailing from './_layout/mailing/mailing'
import Footer from '@/components/layout/footer/footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Products   />
        <Mailing/>
        <Footer/>
    </div>
  )
}

export default Home