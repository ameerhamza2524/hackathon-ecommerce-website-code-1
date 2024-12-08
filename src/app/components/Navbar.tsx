import React from 'react';
import Image from 'next/image';

function NaveBar() {
  return (
    <div>
      <header>
        {/* Top Bar */}
        <div className="bg-black text-white flex justify-between items-center px-4 md:px-20 py-2">
          <p className="text-sm md:text-base">
            Get 10% off your first order.{' '}
            <a href="#" className="text-gray-400 font-bold">
              Sign Up Now
            </a>
          </p>
          <button className="text-white text-xl font-bold focus:outline-none">
            &times;
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-between items-center px-4 md:px-20 py-4">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-black">
            SHOP.CO
          </div>

          {/* Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 md:space-x-6 text-black font-bold text-sm md:text-base">
              <li>
                <a href="/brand" className="hover:text-gray-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  On Sale
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-500">
                  Product
                </a>
              </li>
              <li>
                <a href="/onsale" className="hover:text-gray-500">
                  Cart
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="block md:hidden text-black text-xl">
            ☰
          </button>

          {/* Search and Icons */}
          <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-64 lg:w-[500px] text-sm focus:outline-none"
            />
            <div className="flex space-x-2 md:space-x-4">
              <Image
                src="/images/Frame-1.png"
                alt="Cart"
                width={24}
                height={24}
              />
              <Image
                className="cursor-pointer"
                src="/images/Frame.png"
                alt="User"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NaveBar;
