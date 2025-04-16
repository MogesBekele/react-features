import React from "react";
import { useContext } from "react";
import { AppContext } from "./Context";

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
  } = useContext(AppContext);

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
      id="usestate"
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-white"
      } transition duration-500`}
    >
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        useState Example
      </h1>
      <h4 className="text-3xl font-bold mb-6 text-center">
        Counter App with Dark Mode
      </h4>

      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a simple counter app using React and Tailwind CSS. You can
        increment, decrement, or reset the counter, and toggle between light and
        dark modes.
      </p>

      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mb-8">
        <p className="text-2xl font-bold text-center mb-4">
          Current Count: <span className="text-green-500">{count}</span>
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>

      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg px-6 py-2 mb-8 transition duration-300"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        {submittedName && (
          <p className="text-2xl font-semibold text-center mb-4 bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
            Hello, {submittedName}! Welcome to the Counter App.
          </p>
        )}
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
