import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UseRef = () => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  const handleRef = (e) => {
  
    e.preventDefault();

    const inputElement = editorRef.current;
    const inputValue = inputElement.value;
    setEditor(inputValue);

    // Clear the input field after submission
    inputElement.value = "";
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
    </div>
  );
};

export default UseRef;
