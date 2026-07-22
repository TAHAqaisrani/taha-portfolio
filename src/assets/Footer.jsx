import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
  <footer className="fade-in-up border-t border-slate-200/70 bg-white/70 text-slate-900 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/70 dark:text-slate-100">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <div className="display-font text-lg font-bold tracking-wide text-slate-950 dark:text-white">Muhammad Taha Khan</div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Computer Science Undergraduate | Web Developer</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
        <a href="mailto:m.tahaqaisrani@gmail.com" className="transition hover:text-slate-950 dark:hover:text-white">m.tahaqaisrani@gmail.com</a>
        <a href="tel:+923306721738" className="transition hover:text-slate-950 dark:hover:text-white">+92 330 6721738</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/TAHAqaisrani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <AiFillGithub size={32} className="text-slate-800 dark:text-slate-200 transition hover:text-amber-500 dark:hover:text-amber-400" />
        </a>
        <a href="https://www.linkedin.com/in/taha-qaisrani-dev-055841328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={32} className="text-slate-800 dark:text-slate-200 transition hover:text-amber-500 dark:hover:text-amber-400" />
        </a>
      </div>
    </div>
  </footer>

  )
}

export default Footer
