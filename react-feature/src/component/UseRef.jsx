import React, { useContext } from "react";

import { AppContext } from "./Context";

const UseRef = () => {
const {  editor,
  setEditor,
  editorRef, inputRef} =useContext(AppContext);

  const handleRef = (e) => {
    e.preventDefault();

    const inputElement = editorRef.current;
    const inputValue = inputElement.value;

    if (!inputValue) {
      alert("Please enter a value.");
      return;
    }
    setEditor(inputValue);
    inputElement.value = "";
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div id="useref" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 pt-26">
      <h1 className="text-5xl font-bold mb-6">useRef Example</h1>
      <p className="text-lg mb-8 text-center">
        This is a demonstration of the{" "}
        <span className="font-semibold">useRef</span> hook in React, styled with
        Tailwind CSS.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <label htmlFor="input" className="block mb-2 text-lg font-semibold">
          Enter a Value:
        </label>
        <input
        placeholder="enter something"
          type="text"
          id="input"
          ref={editorRef}
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 mb-6 transition duration-300"
          onClick={handleRef}
        >
          Submit
        </button>
        {editor && (
          <p className="text-center text-lg font-semibold text-green-600">
            You entered: {editor}
          </p>
        )}
      </div>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mt-8">
        <input
          type="text"
          ref={inputRef}
          placeholder="Type something..."
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
          onClick={handleFocus}
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default UseRef;
