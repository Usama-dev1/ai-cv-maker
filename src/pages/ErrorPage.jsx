import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div></div>
      <div className="flex flex-col justify-center h-dvh items-center text-4xl">
        <button className="p-3">
          <Link
            to="/"
            className="px-3 w-full bg-green-600 hover:bg-green-500 text-white text-xl py-2 px- rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out flex items-center justify-center">
            <FaArrowLeft className="mx-1" />
            Go back
          </Link>
        </button>
        <FaReact className="animate-spin text-8xl text-indigo-600" />
        <h1 className="text-7xl text-indigo-600">404 Error</h1>
        <p className="text-4xl">Page Not Found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
