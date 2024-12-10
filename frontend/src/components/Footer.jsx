import React from "react";
import {
  FaFacebook,
  FaTumblr,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";
import "./styling/footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8">
      <div className="container mx-auto flex flex-col items-center justify-between ">
        <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.svg" />

        <div className="icons my-3">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTumblr />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaEnvelope />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaPinterest />
          </a>
        </div>
        {/* add seperating line */}
        <nav className="footersec flex my-7 space-y-2 md:space-y-0 md:space-x-8">
          <a href="#">Stores</a>
          <a href="#">Elite</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>
          <a href="#">About Us</a>
        </nav>

        {/* add seperating line */}

        <div className="flex-col my-6 md:mt-0">
          <h2 className=" getintouch font-bold my-4 ">GET IN TOUCH</h2>
          <div className="flex space-x-16">
            <div className="flex-col">
              <h3 className="text-lg font-bold mb-2">Call us at</h3>
              <p className="text-gray-400">
                <b>1800-209-9933</b>
                <br />
                Monday to Saturday: 09:00 AM - 07:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Support</h3>
              <a className="text-gray-400">
                <b>hello@sugarcosmetics.com</b>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Careers</h3>
              <a className="text-gray-400">
                <b>We are hiring!</b>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Press and media</h3>
              <a className="text-gray-400">
                <b>pr@sugarcosmetics.com</b>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Influencer Collab</h3>
              <a className="text-gray-400">
                <b>Join us</b>
              </a>
            </div>
          </div>
        </div>

        {/* add seperating line */}

        <div>
          <div className="flex space-x-6 my-6">
            <div>
              {" "}
              <h3 className="text-lg font-bold mb-2">
                GET THE NEW SUGAR APP TODAY!
              </h3>
              <p className="text-gray-400 mb-2">
                Tap into a better shopping experience.
              </p>
            </div>

            <div className="flex space-x-2 ">
              <a href="#">
                <img
                  src="https://in.sugarcosmetics.com/playstore.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#">
                <img
                  src="https://in.sugarcosmetics.com/apple-store.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        Copyright © 2024 SUGAR Cosmetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
