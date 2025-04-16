import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-20 pb-5 mt-5 text-black bg-secondary-bg ">
            <div className="grid grid-cols-1 gap-8 px-8 section-container sm:grid-cols-2 md:grid-cols-5">
                {/* Logo and Description */}
                <div className="md:col-span-2">
                    <h2 className="mb-4 text-2xl font-bold">Panto</h2>
                    <p className=" md:mr-12 lg:w-2/3">
                    The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                    </p>
                </div>

                {/* Menu 1 */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold text-primary">Services</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="transition hover:text-primary">Email Marketing</a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-primary">Campaigns</a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-primary">Branding</a>
                        </li>
                    </ul>
                </div>

                {/* Menu 2 */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold text-primary">Furniture</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="transition hover:text-primary">Beds</a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-primary">Chair</a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-primary">All</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="mb-4 text-xl font-semibold text-primary">Follow Us</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="https://www.facebook.com/Eex.Raf" className="flex items-center space-x-2 transition hover:text-primary">
                            <FaFacebookF /> <span>Facebook</span>
                        </a>
                        <a href="https://www.facebook.com/Eex.Raf" className="flex items-center space-x-2 transition hover:text-primary">
                            <FaTwitter /> <span>Twitter</span>
                        </a>
                        <a href="https://www.facebook.com/Eex.Raf" className="flex items-center space-x-2 transition hover:text-primary">
                            <FaInstagram /> <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col gap-4 pt-4 mt-12 text-left text-black border-t border-gray-300 section-container sm:flex-row sm:justify-between sm:items-center sm:text-center">
                <p> &copy; {new Date().getFullYear()}  All rights reserved.</p>
                <p className='flex gap-4 '>

                    <Link to="/">Terms & Conditions</Link>
                    <Link to="/">Privacy Policy</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
