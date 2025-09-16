import React from "react";
import useFetch from "../hooks/useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div
      id="customhook"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white p-6"
    >
      <h1 className="text-4xl font-bold mb-6">Custom Hook Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of a{" "}
        <span className="font-semibold">custom hook</span> in React. The custom
        hook fetches data from an API and handles loading and error states.
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

// A custom hook in React is a reusable JavaScript function that starts with the prefix use and allows you to encapsulate and reuse stateful logic across multiple components. Custom hooks leverage React's built-in hooks (like useState, useEffect, etc.) to create modular and reusable functionality.

// Key Features of Custom Hooks:
// Reusability:

// Custom hooks allow you to extract and reuse logic across multiple components, reducing code duplication.
// Encapsulation:

// They encapsulate complex logic (e.g., fetching data, managing forms, handling timers) into a single function, making components cleaner and easier to maintain.
// Naming Convention:

// Custom hooks must start with the prefix use to follow React's rules of hooks and ensure proper behavior.
// Stateful Logic:

// They can use other React hooks like useState, useEffect, useReducer, etc., to manage state and side effects.
// Example:
// The useFetch hook in your code is a custom hook. It encapsulates the logic for fetching data from an API, managing loading and error states, and returning the fetched data.
// How It Works:
// Input:
// The useFetch hook takes a url as its input.
// Logic:
// It uses useState to manage data, loading, and error states.
// It uses useEffect to fetch data from the provided url when the component mounts or when the url changes.
// Output:
// It returns an object containing data, loading, and error, which can be used in any component.
// Benefits of Custom Hooks:
// Cleaner Components:
// By moving logic into a custom hook, components focus on rendering UI rather than managing state or side effects.
// Improved Maintainability:
// Logic is centralized in the custom hook, making it easier to update or debug.
// Reusability:
// The same hook can be used in multiple components with different inputs.
