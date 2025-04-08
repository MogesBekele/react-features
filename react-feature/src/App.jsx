import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.classList.toggle("light", isDarkMode);
    document.body.classList.toggle("bg-gray-900", !isDarkMode);
  

 
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Counter App</h1>

      <p className="text-lg text-gray-700 mt-2">
        the following is a simple counter app using react and tailwind css
      </p>

      <p className="text-lg text-green-400">Current count: {count}</p>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={() => setCount((count) => count + 1)}
        >
          count
        </button>

        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2 c"
          onClick={() => setCount((count) => count - 1)}
        >
          decrement
        </button>
        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={() => setCount(0)}
        >
          reset
        </button>

        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

export default App;
