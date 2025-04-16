import React from 'react'
import bannerImg from "../../assets/banner.png"
import { FaSearch } from 'react-icons/fa'
const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${bannerImg})`}} className="h-screen text-center text-white bg-center bg-cover ">
      <div className="px-2 pt-24 mx-auto space-y-4 text-center md:w-1/2 md:pt-36">
        <h1 className="text-3xl font-medium leading-snug lg:text-6xl lg:leading-tight">Make your interior more
        minimalistic & modern</h1>
        <p className="mx-auto text-sm font-normal lg:w-1/2">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        
        {/* search field */}
        <div className='relative z-30 inline-block'>
          <input type="text" placeholder='Search Furniture' className='w-full px-6 py-2 border border-gray-400 rounded-full placeholder:text-gray-200 bg-white/25 focus:outline-none md:w-80'/>
          <div className='absolute p-2 transform -translate-y-1/2 rounded-full cursor-pointer bg-primary right-2 top-1/2'>
            <FaSearch/>
          </div>
        </div>
      </div>
      {/* bottom blur effect */}
      <div className='absolute inset-x-0 bottom-0 -mb-2 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'/>
    </section>
  )
}

export default Hero