import React from "react";
import useFetch from "../hooks/useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Custom Hook Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of a <span className="font-semibold">custom hook</span> in React. The custom hook fetches data from an API and handles loading and error states.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {data && (
          <ul className="divide-y divide-gray-300">
            {data.slice(0, 10).map((post) => (
              <li key={post.id} className="py-4">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomHook;
