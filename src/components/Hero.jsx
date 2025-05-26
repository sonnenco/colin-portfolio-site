import React, { useState } from 'react'
import '../App.css'
import Photo from '../assets/colin_photo.png'
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoGithub } from "react-icons/io5"
import { PiArrowDownThin } from "react-icons/pi"

const Hero = () => { 
  return (
    <div className="flex flex-col mt-4">
        <img src={Photo} className="self-center max-w-65 md:max-w-75"></img>
        <div>
            <div className="mt-5 text-3xl font-light">Hello, I'm</div>
            <div className="text-4xl font-bold">Colin Sonnenberg</div>
            <div className="mt-5 text-md text-gray-600">
                I'm an infrastructure reliability engineer at Comcast based in Philadelphia, USA focusing on
                critical cybersecurity systems and ensuring business continuity.
            </div>
        </div>
        <div className="flex flex-col mt-4 md:flex-row md:items-center justify-between">
          <button className="border-2 rounded-lg border-blue-500 bg-blue-500 font-semibold text-white px-10 py-2 max-w-35 ease-in-out duration-300 hover:bg-white hover:text-blue-500">
            Resume
          </button>
          <div className="flex flex-row justify-between mt-7">
            <PiArrowDownThin className="scale-175 md:hidden"/>
            <div className="flex flex-row">
              <a href="https://www.linkedin.com/in/colin-sonnenberg/" target="_blank">
                <CiLinkedin className="mr-6 scale-200"/>
              </a>
              <a href="https://github.com/sonnenco" target="_blank">
                <IoLogoGithub className="scale-200"/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero