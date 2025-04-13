import React, { useState, useMemo } from "react";

const UseMemo = ({ items = [] }) => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <div id="usememo" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white p-6 pt-26">
      <h1 className="text-4xl font-bold mb-6">useMemo Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of the{" "}
        <span className="font-semibold">useMemo</span> hook in React. It
        optimizes performance by memoizing the filtered list of items.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="divide-y divide-gray-300">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="py-2 text-gray-700 hover:bg-gray-100 rounded-lg px-2 transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseMemo;
