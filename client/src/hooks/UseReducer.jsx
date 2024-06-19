import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Counter with useReducer</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <span className="text-2xl font-bold">{state.count}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
