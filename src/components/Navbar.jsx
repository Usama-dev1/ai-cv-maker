import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenuToggle = () => setOpen(!open);
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:block bg-indigo-700 text-white">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo Section */}

          <button className="flex-1">
            <Link to="/">
              <h1 className="text-white text-3xl">Cv Maker</h1>
            </Link>
          </button>

          {/* Navigation Links */}
          <ul className="flex-1 flex justify-center space-x-4 font-semibold text-nowrap text-sm sm:text-lg">
            <li className="hover:bg-indigo-600 p-2 rounded">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-indigo-600 t p-2 rounded">
              <Link to="/dash">Make Cv</Link>
            </li>
            <li className="hover:bg-indigo-600 p-2 rounded">
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex-1 flex justify-end space-x-4 text-2xl">
            <a href="/">
              <FaFacebook className="hover:text-indigo-300" />
            </a>
            <a href="/">
              <FaInstagram className="hover:text-indigo-300" />
            </a>
            <a href="/">
              <FaYoutube className="hover:text-indigo-300" />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden bg-indigo-600 text-white">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-white text-2xl">LOGO</h1>
          <button onClick={handleMenuToggle}>
            {open ? (
              <IoClose className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </nav>
        {open && (
          <div className="fixed inset-0 bg-indigo-600 text-white z-50">
            <div className="container mx-auto px-4 py-8">
              <button
                onClick={handleMenuToggle}
                className="absolute top-4 right-4">
                <IoClose className="text-2xl" />
              </button>
              <ul className="flex flex-col space-y-8 text-center text-lg">
                {/* Logo Section */}
                <button className="flex-1">
                  <Link to="/">
                    <h1 className="text-white text-3xl">Cv Maker</h1>
                  </Link>
                </button>
                <li>
                  <Link to="/" className=" hover:underline block py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dash" className=" hover:underline block py-2">
                    Make Cv
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className=" hover:underline block py-2">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="flex justify-center space-x-6 mt-8 text-2xl">
                <a href="/" className="hover:text-indigo-300">
                  <FaFacebook />
                </a>
                <a href="/" className="hover:text-indigo-300">
                  <FaInstagram />
                </a>
                <a href="/" className="hover:text-indigo-300">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
