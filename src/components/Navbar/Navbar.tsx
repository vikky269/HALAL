import React, { useState } from "react";

const Navbar: React.FC = () => {

const [isopen, setisopen] = useState(false)

const togglenav = () => {
    setisopen((isopen)=> !isopen)
}

  return (
    <nav className="bg-white shadow-md font-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className=" cursor-pointer">
            <img src="/logo.png" alt="" className="w-[70%] h-[65%]" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#0066F4]">
              Personal
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0066F4]">
              Business
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0066F4]">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0066F4]">
              Why Halal?
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0066F4]">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-[#0066F4]">
              Community
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[#0066F4] text-white px-2 py-3 rounded-md hover:bg-blue-600"
            >
              Open an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden"
          onClick={togglenav}
          >
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {isopen && (
             <div className="space-y-2 px-4 pb-4">
             <a href="#" className="block text-gray-600 hover:text-blue-500">
               Personal
             </a>
             <a href="#" className="block text-gray-600 hover:text-blue-500">
               Business
             </a>
             <a href="#" className="block text-gray-600 hover:text-blue-500">
               Products
             </a>
             <a href="#" className="block text-gray-600 hover:text-blue-500">
               Why Halal?
             </a>
             <a href="#" className="block text-gray-600 hover:text-blue-500">
               Blog
             </a>
             <a href="#" className="block text-gray-600 hover:text-blue-500">
               Community
             </a>
             <a
               href="#"
               className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600"
             >
               Open an account
             </a>
           </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
