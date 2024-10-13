import Lottie from "lottie-react";
import React from "react";
import Error from "../lottie/404.json";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-red-500 text-white text-center p-4">
      <Lottie animationData={Error} className="w-full max-w-md" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/home"
        className="bg-red-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
