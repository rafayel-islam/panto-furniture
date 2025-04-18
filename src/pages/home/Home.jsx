import React from 'react'
import Hero from './Hero'
import WhyChoose from '..home/WhyChoose'
import Products from '../shop/Products'
import Experiences from '..home/Experiences'
import Materials from '../home/Materials'
import Testimonials from '../home/Testimonials'

const Home = () => {
  return (
    <>  
    <Hero />
    <WhyChoose />
    <Products headLine="Best Selling Products"/>
    <Experiences />
    <Materials />
    <Testimonials />
    </>
  )
}

export default Home