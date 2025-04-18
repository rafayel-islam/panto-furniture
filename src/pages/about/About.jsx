import React from 'react'
import aboutBgImg from "../../assets/about-background.jpg"
import Testimonials from '../home/Testimonials'


const About = () => {
  return (
    <section>
      {/* Banner */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-gray-700"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">About Panto</h1>
          <p className="mt-4 text-xl font-light">Furniture That Feels Like Home</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl px-6 py-16 mx-auto text-gray-700">
        <h2 className="mb-6 text-3xl font-semibold">Who We Are</h2>
        <p className="mb-4 text-lg leading-relaxed">
          At <strong>Panto</strong>, we believe furniture is more than just a product — it's a part of your lifestyle. 
          Whether you're looking for a cozy bed, a stylish sofa, elegant lamps, or comfortable chairs, 
          Panto is here to bring comfort and beauty into your home.
        </p>

        <h2 className="mt-12 mb-6 text-3xl font-semibold">Our Mission</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Our mission is to make quality furniture accessible to everyone. We blend modern design with durable materials 
          to deliver products that not only look good but last long.
        </p>

        <h2 className="mt-12 mb-6 text-3xl font-semibold">Why Choose Us?</h2>
        <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
          <li>Premium quality furniture at affordable prices</li>
          <li>Modern and elegant designs</li>
          <li>Fast and reliable delivery</li>
          <li>Friendly customer support</li>
        </ul>

        <p className="mt-10 text-lg">
          Thank you for choosing <strong>Panto</strong>. Let's make your home beautiful — one piece at a time.
        </p>
      </div>
      <Testimonials />
    </section>
  )
}

export default About
