import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const active = (path) =>
    location.pathname === path ? "text-red-600 font-bold" : "font-medium";

  return (
    <nav className="bg-white border-gray-100 border-b-2 dark:bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="../images/Logo.png" className="h-8" alt="SIMS Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            SIMS PPOB
          </span>
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden block text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-8">
          <Link to="/top-up" className={active("/top-up")}>
            Top Up
          </Link>
          <Link to="/transaction" className={active("/transaction")}>
            Transaction
          </Link>
          <Link to="/akun" className={active("/akun")}>
            Akun
          </Link>
        </div>

        {isOpen && (
          <div className="w-full block md:hidden">
            <div className="flex flex-col items-start gap-2 mt-4">
              <Link to="/top-up" className={active("/top-up")}>
                Top Up
              </Link>
              <Link to="/transaction" className={active("/transaction")}>
                Transaction
              </Link>
              <Link to="/akun" className={active("/akun")}>
                Akun
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
