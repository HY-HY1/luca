import React from 'react'
import Hero from './_layout/hero/hero'
import Products from './_layout/products/products'
import Mailing from './_layout/mailing/mailing'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Products   />
        <Mailing/>
    </div>
  )
}

export default Home