import React from "react";
import { logo, background } from "../utils/Imagedata";
import "./Navbar.css"


const Navbar = () => {




  return (
<>
      {/* Top Banner */}
      <div className=" top-nav h-9 text-center text-sm py-2">
        <div className="carousel ml-32">
            <div className="carousel-track">
            <a href="https://in.sugarcosmetics.com/products/sugar-drop-a-tint-lip-oil">
            <strong>New launch ⚠️</strong>: Try our Drop A Tint Lip Oil at Rs.599
            </a>
            <a href="https://in.sugarcosmetics.com/products/confidence-charm-bracelet">
            <strong>Merch Drop</strong>: confidence charm bracelet @1799
            </a>
            <a href="https://in.sugarcosmetics.com/all-makeup">
            <strong>use code</strong>: Treat10 for discounts 🙌
            </a>
            <a href="https://in.sugarcosmetics.com/collections/999-offer">
            Enjoy Rs.300 Off on orders above Rs.999! Use Code: FESTIVE300🎉
            </a>
            <a href="https://in.sugarcosmetics.com/products/glide-peptide-serum-lipstick">
            New launch⚠️: Try our Glide Peptide Serum Lipstick at Rs.499
            </a>
            </div>
          
        </div>
        <div className="flex gap-7 mr-32">
        <a
            href="#"
            className="hidden lg:block text-sm font-medium "
          >
            GET APP
          </a>
          <a
            href="#"
            className="hidden lg:block text-sm font-medium "
          >
            STORE
          </a>
          <a
            href="#"
            className="hidden lg:block text-sm font-medium "
          >
            GIFT CARD
          </a>
          <a
            href="#"
            className="hidden lg:block text-sm font-medium "
          >
            HELP
          </a>
        </div>

      </div>

      {/* Main Navbar */}
      <nav className="h-20 flex items-center justify-between px-4 py-3 lg:px-8 bg-black ">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src= {logo}
            alt="SUGAR Logo"
            className="h-8 "
          />
        </div>

        {/* Center - Search Bar */}
        <div className="flex-grow mx-4 hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder='Try "Liquid Lipstick"'
              className="w-full px-4 py-2 border rounded-full text-gray-300 focus:ring-2 focus:ring-pink-500"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300"
              type="submit"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Right - Links and Icons */}
        <div className="flex items-center space-x-6 text-white">
          
          <a
            href="#login"
            className="text-sm font-medium hover:text-pink-500 flex items-center"
          >
            <span className="material-icons mr-1">person</span> Login/Register
          </a>
          <span className="material-icons hover:text-pink-500 cursor-pointer">
            favorite_border
          </span>
          <span className="material-icons hover:text-pink-500 cursor-pointer">
            shopping_cart
          </span>
          <span className="material-icons hover:text-pink-500 cursor-pointer">
            settings
          </span>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <div className="bg-gray-900">
        <ul className="flex items-center justify-center space-x-6 text-sm font-medium py-2">
          <li>
            <a href="#" className="hover:text-pink-500">
              SUGAR PLAY
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              LIPS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              EYES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              FACE
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              NAILS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              SKINCARE
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              ACCESSORIES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              GIFTING
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              BESTSELLERS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              NEW LAUNCHES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              OFFERS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              BLOG
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              SUGAR POP
            </a>
          </li>
        </ul>
      </div>
  </>
  );
};

export default Navbar;