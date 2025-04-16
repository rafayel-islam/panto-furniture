import React from 'react'
import experiencesImg from "../../assets/experiences.png"
import Button from '../../components/Button'
const Experiences = () => {
    return (
        <section className='flex flex-col items-center justify-between gap-8 my-24 section-container bg-secondary-bg md:flex-row md:gap-20'>
            <div className='md:w-1/2 md:h-[#541px]'>
                <img src={experiencesImg} alt="" className='w-full h-full ' />
            </div>
            <div className='mx-auto md:w-1/2'>
            <h3 className='mb-4 text-sm font-semibold uppercase text-primary'>
                Experiences
            </h3>
            <h2 className='mb-4 text-4xl font-bold capitalize lg:w-1/2'>we provide you the best experience</h2>
            <p className='mb-5 text-secondary lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <Button text="More Info"/>
            </div>
        </section>
    )
}

export default Experiences