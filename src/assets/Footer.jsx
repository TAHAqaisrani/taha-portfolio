import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
  <>
  <div className="bg-black flex flex-col md:flex-row items-center md:justify-between gap-3 p-4 md:p-6">
    <div className="flex items-center gap-3">
      <nav className="bg-white px-3 py-1 rounded-2xl shadow-md font-bold text-blue-500 text-lg">
        MT
      </nav>
      <div className="font-extrabold text-white text-lg tracking-wide"> M.Taha Khan</div>
    </div>

  <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0">

  {/* Social Links */}
  <div className="flex items-center gap-4">
    <a
      href="https://github.com/TAHAqaisrani"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub
        size={40}
        className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
      />
    </a>

    <a
      href="https://www.linkedin.com/in/taha-alyas-951376347/"
      target="_blank"
      rel="noopener noreferrer"
      className="border-l-2 border-white pl-4"
    >
      <FaLinkedin
        size={40}
        className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
      />
    </a>
  </div>

  {/* Contact Info */}
  <p className="text-white hover:text-gray-400 cursor-pointer border-l-2 border-white px-4 py-1">
    m.tahaqaisrani@gmail.com
  </p>
  <p className="text-white hover:text-gray-400 cursor-pointer border-l-2 border-white px-4 py-1">
    +923306721738
  </p>
</div>
</div>
</>

  )
}

export default Footer