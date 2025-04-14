import React, { useReducer } from "react";

// Initial state for the form
const initialState = {
  name: "",
  email: "",
  password: "",
};
// Initial value for the counter
const intialValue = 0;
const reducerValue = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialValue;
    default:
      return state;
  }
};

// Reducer function to handle form state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "update_field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, dispatchValue] = useReducer(reducerValue, intialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted:\nName: ${state.name}\nEmail: ${state.email}`);
    dispatch({ type: "reset" }); // Reset the form
  };

  return (
    <div
      id="usereducer"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white p-6 pt-26"
    >
      <h1 className="text-4xl font-bold mb-6">useReducer Examples</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name:
          </label>
          <input
            required
            type="text"
            id="name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "update_field",
                field: "name",
                value: e.target.value,
              })
            }
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            required
            type="email"
            id="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "update_field",
                field: "email",
                value: e.target.value,
              })
            }
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-lg font-semibold mb-2"
          >
            Password:
          </label>
          <input
            required
            type="password"
            id="password"
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: "update_field",
                field: "password",
                value: e.target.value,
              })
            }
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "reset" })}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mt-6">
        <p className="text-2xl font-bold mb-4 mt-4 inline-block">Counter Value:</p>
        <p className="text-3xl font-bold inline-block">{value}</p>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => dispatchValue({ type: "increment" })}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={() => dispatchValue({ type: "decrement" })}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatchValue({ type: "reset" })}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
