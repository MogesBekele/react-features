import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav  className="bg-gray-800 text-white py-8 fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold"><a href="#">React Features</a></div>
          <ul className="flex space-x-4">
            <li>
              <a href="#usestate" className="hover:text-blue-400">
                UseState
              </a>
            </li>
            <li>
              <a href="#useeffect" className="hover:text-blue-400">
                UseEffect
              </a>
            </li>
            <li>
              <a href="#useref" className="hover:text-blue-400">
                UseRef
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Add padding to prevent content from being hidden behind the fixed navbar */}
      <div className="pt-20"></div>
    </div>
  );
};

export default Navbar;
