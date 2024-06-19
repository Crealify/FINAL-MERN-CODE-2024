import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to={"/"}>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
