import React from "react";
import { useContext } from "react";

import { AppConext } from "./Context";

import { useContext } from "react";

const Usestate = () => {
  const {
    count,
    setCount,
    isDarkMode,
    setIsDarkMode,
    name,
    setName,
    submittedName,
    setSubmittedName,
  } = useContext(AppConext);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    setSubmittedName(name);
    setName("");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      } transition duration-500`}
    >
      <h1 className="text-5xl font-extrabold mb-6 text-center">Counter App</h1>

      <p className="text-lg mb-4 text-center max-w-2xl">
        This is a simple counter app using React and Tailwind CSS. You can
        increment, decrement, or reset the counter, and toggle between light and
        dark modes.
      </p>

      <p className="text-2xl font-bold text-green-400 mb-6">
        Current count: {count}
      </p>

      <div className="flex gap-4 mb-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>

        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        {submittedName && (
          <p className="text-2xl font-semibold text-center mb-4 bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
            Hello, {submittedName}! Welcome to the Counter App.
          </p>
        )}
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="border border-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Usestate;
