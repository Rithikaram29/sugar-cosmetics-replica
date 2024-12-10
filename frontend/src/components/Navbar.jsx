import React from "react";
import { logo, background } from "../utils/Imagedata";
import "./styling/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faBagShopping,
  faPercent,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <>
      {/* Top Banner */}
      <div className=" top-nav h-9 text-center text-sm py-2">
        <div className="carousel ml-32">
          <div className="carousel-track">
            <a href="https://in.sugarcosmetics.com/products/sugar-drop-a-tint-lip-oil">
              <strong>New launch ⚠️</strong>: Try our Drop A Tint Lip Oil at
              Rs.599
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
          <a href="#" className="hidden lg:block text-sm font-medium ">
            GET APP
          </a>
          <a href="#" className="hidden lg:block text-sm font-medium ">
            STORE
          </a>
          <a href="#" className="hidden lg:block text-sm font-medium ">
            GIFT CARD
          </a>
          <a href="#" className="hidden lg:block text-sm font-medium ">
            HELP
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="h-20 flex items-center justify-between px-4 py-3 lg:px-8 bg-black ">
        {/* Left - Logo */}
        <div className="flex items-center ml-12">
          <img src={logo} alt="SUGAR Logo" className="h-8 " />
        </div>

        {/* Center - Search Bar */}
        <div className="flex-grow mx-4 hidden lg:block ">
          <div className="wrap-input relative flex items-center justify-center ">
            <input
              type="text"
              placeholder='Try "Liquid Lipstick"'
              className="searchbar w-full px-4 py-2 text-gray-500 focus:ring-2 "
            />
            <button
              className="w-40 h-10 bg-white text-black"
              type="submit"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </button>
          </div>
        </div>

        {/* Right - Links and Icons */}
        <div className="flex items-center space-x-6 text-white mr-12">
          <a href="#login" className="text-sm font-medium flex items-center mx-12">
            <span>
              {" "}
              <FontAwesomeIcon icon={faUser} className="mx-3"/>
            </span>{" "}
            Login/Register
          </a>
          <span className="material-icons cursor-pointer">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="material-icons cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
          <span className="material-icons cursor-pointer">
            <FontAwesomeIcon icon={faPercent} />
          </span>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <div className="bg-customgrey-100 h-12">
        <ul className="flex text-white items-center justify-around space-x-6 text-sm font-medium py-2 mr-5">
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
