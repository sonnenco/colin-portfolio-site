import React, { useState } from 'react'
import '../App.css'
import Photo from '../assets/colin_photo.png'
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoGithub } from "react-icons/io5"
import { PiArrowDownThin } from "react-icons/pi"

const Hero = ({ theme } ) => { 
  return (
    <div className={`${
      theme ? "dark" : "light"
      } dark:text-white flex flex-col mt-4`}>
        <div className="flex flex-col lg:flex-row lg:my-14 lg:items-center">
          <img src={Photo} className="self-center max-w-65 md:max-w-75"></img>
          <div className="lg:ml-10">
              <div className="mt-5 text-3xl font-light">Hello, I'm</div>
              <div className="text-4xl font-bold dark:text-emerald-300 md:text-5xl">Colin Sonnenberg</div>
              <div className="mt-4 text-md md:text-lg">
                  I'm an infrastructure reliability engineer focused on developing
                  and implementing business continuity and disaster recovery strategies
                  for critical cybersecurity systems at Comcast.
              </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 md:flex-row md:items-center justify-between">
          <a
            href="https://drive.google.com/file/d/1Cz-7yFYJmm8KOGaR-0ZM7-NL_l7usxQz/view?usp=share_link"
            target="_blank"
            className="border-2 rounded-lg font-semibold px-10 py-2 max-w-35 
            ease-in-out duration-300
            light:text-white light:border-blue-500 light:bg-blue-500 light:hover:bg-white light:hover:text-blue-500
            dark:text-slate-800 dark:border-emerald-300 dark:bg-emerald-300 dark:hover:bg-slate-800 dark:hover:text-emerald-300">
            Resume
          </a>
          <div className="flex flex-row justify-between mt-7 md:mt-0">
            <PiArrowDownThin className="scale-175 md:hidden"/>
            <div className="flex flex-row">
              <a href="https://www.linkedin.com/in/colin-sonnenberg/" target="_blank">
                <CiLinkedin className="mr-6 scale-200 transition duration-300
                  light:hover:bg-white light:hover:text-blue-500
                  dark:hover:bg-slate-800 dark:hover:text-emerald-300"/>
              </a>
              <a href="https://github.com/sonnenco" target="_blank">
                <IoLogoGithub className="scale-200 transition duration-300
                  light:hover:bg-white light:hover:text-blue-500
                  dark:hover:bg-slate-800 dark:hover:text-emerald-300"/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero