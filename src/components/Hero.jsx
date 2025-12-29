import React from 'react'
import '../App.css'
import Photo from '../assets/colin_photo.png'

/* Import icons */
import { FiSun, FiMoon } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoGithub } from "react-icons/io5"
import { PiArrowDownThin } from "react-icons/pi"

const Hero = ({ theme, setTheme }) => {
  return (
    <div className="flex flex-col justify-between h-svh sm:h-screen md:h-120">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="font-extrabold text-2xl leading-none dark:text-emerald-300">COLIN S.</div>
        <div className="flex items-center justify-centers scale-110 p-1 rounded-md light:bg-white dark:bg-slate-600">
          <button
            className="bg-transparent p-2 light:hover:bg-slate-200 dark:hover:bg-slate-400 rounded-md transition duration-300"
            onClick={() => {
              setTheme("");
          }}>
            <FiSun/>
          </button>
          <button
            className="bg-transparent p-2 light:hover:bg-slate-200 dark:hover:bg-slate-400 rounded-md transition duration-300"
            onClick={() => {
              setTheme("dark");
          }}>
            <FiMoon/>
          </button>
        </div>
      </div>
      
      {/* Photo and tagline */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        <img src={Photo} className="self-center w-50 md:max-w-70" alt="Colin Sonnenberg" />
        <div className="mt-4 lg:ml-10">
          <div className="text-3xl font-light">Hello, I'm</div>
          <div className="text-4xl font-bold dark:text-emerald-300 md:text-5xl">Colin Sonnenberg</div>
          <div className="font-extralight text-lg mt-2 md:text-xl">
            Cybersecurity professional and aspiring software engineer pursuing B.S. Computer Science at Oregon State University.
          </div>
        </div>
      </div>
      
      {/* Resume, down arrow and links */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <a
          href="https://drive.google.com/file/d/1LXl14qK9sTc6UnNvD2etOJz1U6qV_2xt/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 rounded-lg font-semibold px-10 py-2 mb-4 md:mb-0
          ease-in-out duration-300 max-w-35
          light:text-white light:border-blue-500 light:bg-blue-500 light:hover:bg-slate-100 light:hover:text-blue-500
          dark:text-slate-800 dark:border-emerald-300 dark:bg-emerald-300 dark:hover:bg-slate-800 dark:hover:text-emerald-300">
          Resume
        </a>

        <div className="flex flex-row justify-between items-center h-20">
          <PiArrowDownThin className="scale-175 md:hidden mr-4" />
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/colin-sonnenberg/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="mr-6 scale-200 transition duration-300
                light:hover:bg-slate-100 light:hover:text-blue-500
                dark:hover:bg-slate-800 dark:hover:text-emerald-300" />
            </a>
            <a href="https://github.com/sonnenco" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub className="scale-200 transition duration-300
                light:hover:bg-slate-100 light:hover:text-blue-500
                dark:hover:bg-slate-800 dark:hover:text-emerald-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero