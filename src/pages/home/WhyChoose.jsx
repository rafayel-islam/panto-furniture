import React from 'react'
import Button from '../../components/Button'

const WhyChoose = () => {
    return (
        <section className='section-container'>
            <div className='grid items-center grid-cols-1 gap-8 my-24 text-left sm:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <h2 className='text-4xl font-bold'>Why <br /> Choose Us</h2>
                </div>
                <div>
                    <h3 className='mb-3 text-2xl font-semibold'>Luxury facilities</h3>
                    <p className='mb-2 text-base '>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <Button text="More Info" />
                </div>
                <div>
                    <h3 className='mb-3 text-2xl font-semibold'>Affordable Price</h3>
                    <p className='mb-2 text-base'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <Button text="More Info" />
                </div>
                <div>
                    <h3 className='mb-3 text-2xl font-semibold'>Many Choices</h3>
                    <p className='mb-2 text-base '>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <Button text="More Info" />
                </div>
            </div>
        </section>
    )
}

export default WhyChoose