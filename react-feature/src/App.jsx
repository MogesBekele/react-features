import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-bold">Counter App</h1>

      <p className="text-lg mt-2">
        The following is a simple counter app using React and Tailwind CSS
      </p>

      <p className="text-lg text-green-400">Current count: {count}</p>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>

        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className="bg-amber-700 text-white rounded-full px-6 py-2"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>



      <form className="mt-4">
        <label className="block mb-2 text-lg">Enter your name:</label>

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </form>
    </div>
  );
};

export default App;
