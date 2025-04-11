import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} React Features. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
