import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { reviews } from '../../utils/reviews';
import Rating from '../../components/Rating';

const Testimonials = () => {
    return (
        <section className='px-8 section-container'>
            <div className='mb-12 text-center'>
                <h3 className='mb-4 text-sm font-semibold uppercase text-primary'>
                    Testimonials
                </h3>
                <h2 className='mb-4 text-4xl font-bold capitalize'>Our Client Reviews</h2>
            </div>

            {/* Reviews Card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
               
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index} className='bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(${review.coverImg})` }}>
                            <div className='md:h-[547px] justify-center items-center flex mb-4'>
                                <div className='relative w-full p-4 mt-16 mb-5 bg-white border rounded-xl md:w-4/5'>
                                    <img src={review.image} alt="" className='absolute object-cover -translate-x-1/2 rounded-full size-20 -top-10 ring-2 ring-primary left-1/2 ' />
                                    <div className='mt-16 text-center'>
                                        <h3 className='text-lg font-semibold'>{review.name}</h3>
                                        <p className='mb-3 '>Verified Customer</p>
                                        <p className='text-gray-500'>{review.review}</p>
                                        <div className='flex items-center justify-center w-full mx-auto mt-2 text-center'>
                                            <Rating rating={review.rating} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default Testimonials