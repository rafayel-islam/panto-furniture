import React from 'react'
import materialImg1 from "../../assets/material1.png"
import materialImg2 from "../../assets/material2.png"
import materialImg3 from "../../assets/material3.png"
import Button from '../../components/Button'
const Materials = () => {
    return (
        <section className='flex flex-col items-center justify-between gap-8 my-24 section-container md:flex-row md:gap-20'>
            <div className='mx-auto md:w-1/2'>
                <h3 className='mb-4 text-sm font-semibold uppercase text-primary'>
                    Materials
                </h3>
                <h2 className='mb-4 text-4xl font-bold capitalize lg:w-1/2'>Very serious materials for making furniture</h2>
                <p className='mb-5 text-secondary lg:w-1/2'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <Button text="More Info" />
            </div>
            <div className='grid items-center grid-cols-2 md:items-end md:grid-cols-3 md:w-1/2'>
                <div>
                    <img src={materialImg1} alt="" />
                    <img src={materialImg2} alt="" />
                </div>
                <div className='col-span-1 md:col-span-2'>
                    <img src={materialImg3} alt="" className='w-full md:h-[#541px]' />
                </div>
            </div>
        </section>
    )
}

export default Materials