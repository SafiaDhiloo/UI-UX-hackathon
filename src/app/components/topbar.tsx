'use client';

import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm flex items-center justify-center">
      {/* TopBar Container */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-between px-4 gap-2 sm:gap-0">
        {/* Left Section */}
        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap w-full sm:w-auto text-center">
          {/* Email */}
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span className="hidden sm:inline">mhhasanul@gmail.com</span>
          </a>
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap w-full sm:w-auto text-center">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
          <a href="/login" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaUser />
            <span className="hidden sm:inline">Login</span>
          </a>

          {/* Wishlist */}
          <a href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaHeart />
            <span className="hidden sm:inline">Wishlist</span>
          </a>

          {/* Cart */}
          <a href="/cart" className="cursor-pointer hover:text-gray-200">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;