import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";

const navItems = [
  { path: '/', label: 'Furniture' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className='flex flex-col items-center gap-8 md:flex-row md:space-x-8'>
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu} className='text-lg font-medium'>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "hover:text-primary transition-all duration-300"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 ease-in-out 
      ${isScrolled || isMenuOpen ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}
    >
      <nav className='container flex items-center justify-between px-4 py-6 mx-auto max-w-screen-2xl'>

        {/* logo */}
        <Link to="/" className='text-xl font-bold'>Panto</Link>

        {/* hamburger menu */}
        <div onClick={toggleMenu} className='text-xl cursor-pointer hover:text-primary md:hidden'>
          {!isMenuOpen && <FaBars />}
        </div>

        {/* desktop menu */}
        <div className='hidden md:flex'>
          <NavItems />
        </div>

        {/* mobile menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
          <div className='absolute text-xl cursor-pointer top-5 right-5' onClick={toggleMenu}>
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/* cart icon */}
        <div className='relative hidden cursor-pointer md:block'>
          <FaShoppingBag />
          <sup className='absolute top-0 flex items-center justify-center w-4 h-4 text-xs text-white rounded-full -right-2 bg-primary'>
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
