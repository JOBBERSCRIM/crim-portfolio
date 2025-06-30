import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white py-4 shadow-md">
      <div className="flex justify-center items-center gap-8 uppercase text-sm font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition ${
              isActive ? "text-green-500" : "hover:text-green-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/today"
          className={({ isActive }) =>
            `transition ${
              isActive ? "text-green-500" : "hover:text-green-500"
            }`
          }
        >
          Today with JOBBERS
        </NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;