import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UseRef = () => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);
  const inputRef = useRef(null);

  const handleRef = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    const inputElement = editorRef.current;
    const inputValue = inputElement.value;
    // Check if the input value is empty
    if (!inputValue) {
      alert("Please enter a value.");
      return;
    }
    setEditor(inputValue);

    inputElement.value = "";
  };
  const handleFocus = () => {
    // Focus the input element using the ref
    inputRef.current.focus();
  };


  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">UseRef Example</h1>
      <p className="text-lg mb-4">
        The following is a simple useRef example using React and Tailwind CSS.
      </p>
      <div>
        <label htmlFor="input" className="block mb-2 text-lg font-semibold">
          Input:{editor}
        </label>
        <input
          type="text"
          id="input"
          ref={editorRef}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-1/2"
        />

        <button
          className="rounded-full px-6 py-2 bg-amber-500 text-black"
          onClick={handleRef}
        >
          submit
        </button>
      </div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        className="border border-gray-300 rounded-lg p-2 mb-4 w-1/2"
      />
      <button
        className="rounded-full px-6 py-2 bg-blue-500 text-white"
        onClick={handleFocus}
      >
        Focus Input
      </button>
    </div>
  );
};

export default UseRef;
