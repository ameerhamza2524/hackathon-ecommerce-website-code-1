import React from 'react';

const FooterSection = () => {
  return (
    <div className="relative mt-16 ">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-5 mx-20 rounded-2xl absolute top-[-80px]  left-0 right-0 z-10">
        <div className="max-w-screen-lg mx-auto w-[1000px] flex justify-between items-center">
          {/* H2 Section - Left aligned */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-left leading-tight">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>

          {/* Email Input and Button Section - Right aligned */}
          <div className="flex flex-col gap-4 items-end">
            <div className="w-[400px] max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="w-full max-w-md">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg w-full">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

     {/* Footer Section */}
<footer className="bg-gray-300 text-black py-16 mt-[20px]">
  <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-24">
    {/* Shop.co Info */}
    <div>
      <h3 className="text-2xl font-semibold mb-6">SHOP.CO</h3>
      <p className="text-black-400 mb-6">
        We offer clothes that match your unique style and make you feel proud. From women’s to men’s fashion.
      </p>
      <div className="flex gap-6 mt-4">
        <a href="#" className="text-white hover:text-gray-300 transition duration-300">Facebook</a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300">Instagram</a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300">Pinterest</a>
      </div>
    </div>

    {/* Company, Help, FAQ, Resources in a single row */}
    <div className="col-span-3 grid grid-cols-4 gap-8">
      {/* Company Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">COMPANY</h3>
        <ul className="text-gray-400 space-y-4">
          <li><a href="#" className="hover:text-gray-300 transition duration-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Features</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Works</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Career</a></li>
        </ul>
      </div>

      {/* Help Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">HELP</h3>
        <ul className="text-black-400 space-y-4">
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Customer Support</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Delivery Details</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a></li>
        </ul>
      </div>

      {/* FAQ Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
        <ul className="text-black-400 space-y-4">
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Account</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Manage Deliveries</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Orders</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Payments</a></li>
        </ul>
      </div>

      {/* Resources Links */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">RESOURCES</h3>
        <ul className="text-black-1000 space-y-4">
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Free eBooks</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">Development Tutorials</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">How-to Blog</a></li>
          <li><a href="#" className="hover:text-gray-300 transition duration-300">YouTube Playlist</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mt-12 text-center text-gray-500 text-sm">
    Shop.co © 2000-2023. All Rights Reserved.
  </div>
</footer>

    </div>
  );
};

export default FooterSection;
