import React from "react";
import About from "./About";
import { Link } from "react-router-dom";
const Header = () => {
  return (
   <div className="bg-blue-300 flex flex-col md:flex-row items-center justify-between p-4 shadow-md rounded-b-2xl">
  <div className="flex items-center gap-3 mb-3 md:mb-0">
    <nav className="bg-white px-3 py-1 rounded-2xl shadow-md font-bold text-blue-500 text-lg">  MT </nav>
    <div className="font-extrabold text-white text-lg tracking-wide"> M.Taha Khan </div>
  </div>

  <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-3 md:mb-0">
    
    <Link to="/" className="px-3 py-2 font-medium text-blue-800 hover:bg-blue-500 hover:text-white rounded-md transition duration-300 text-center">
      Home </Link>
    
    <Link to="/about" className="px-3 py-2 font-medium text-blue-800 hover:bg-blue-500 hover:text-white rounded-md transition duration-300 text-center">
      About
    </Link>

    <Link to="/skills" className="px-3 py-2 font-medium text-blue-800 hover:bg-blue-500 hover:text-white rounded-md transition duration-300 text-center">
      Skills </Link>
    <Link to="/contact" className="px-3 py-2 font-medium text-blue-800 hover:bg-blue-500 hover:text-white rounded-md transition duration-300 text-center">
      Contact
    </Link>
  </div>



</div>

  );
};

export default Header;
