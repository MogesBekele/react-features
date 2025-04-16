import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav  className="bg-gray-800 text-white py-8 fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div ><a className="text-2xl font-bold" href="#">React Features</a></div>
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
            <li>
              <a href="#usememo" className="hover:text-blue-400">
                UseMemo
              </a>
            </li>
            <li>
              <a href="#usereducer" className="hover:text-blue-400">
                UseReducer
              </a>
            </li>
            <li>
              <a href="#usecallback" className="hover:text-blue-400">
                UseCallback
              </a>
            </li>
            <li>
              <a href="#uselayout" className="hover:text-blue-400">
                UseLayoutEffect
              </a>
            </li>
            <li>
              <a href="#customhook" className="hover:text-blue-400">
                Custom Hook
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
