import React from 'react'
import contactBgImg from "../../assets/contact-background.jpg"
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section>

      {/* Banner */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-gray-700"
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl font-light">We're here to help and answer your questions</p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="grid max-w-5xl gap-10 px-6 py-16 mx-auto text-gray-700 md:grid-cols-2">

        {/* Info */}
        <div className="space-y-6">
          <h2 className="mb-4 text-3xl font-semibold">Get in Touch</h2>
          <p>If you have any questions about our furniture collections — beds, sofas, lamps, chairs — feel free to reach out!</p>
          <div>
            <p><strong>📍 Address:</strong> 123 Furniture Street, Dhaka, Bangladesh</p>
            <p><strong>📞 Phone:</strong> +880 1234 567890</p>
            <p><strong>✉️ Email:</strong> support@panto.com</p>
          </div>
          <div>
            <p><strong>🕒 Business Hours:</strong></p>
            <p>Saturday - Thursday: 9:00 AM - 8:00 PM</p>
            <p>Friday: Closed</p>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 mt-6 text-white transition bg-green-500 rounded-md hover:bg-green-600"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form className="p-8 space-y-6 bg-gray-100 shadow rounded-xl">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition rounded-md bg-primary hover:bg-amber-600"
          >
            Send Message
          </button>
        </form>

      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] mt-10">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902264857984!2d90.3912!3d23.7508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89526b8cbd3%3A0x7cb537e88d19321!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1618387993126!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </section>
  )
}

export default Contact
