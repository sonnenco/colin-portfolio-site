"use client"

import { useState, useEffect } from 'react'
import './App.css'

import Lenis from 'lenis'

/* Import icons */
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoGithub, IoMenu } from "react-icons/io5"
import { PiArrowDownThin } from "react-icons/pi"

/* Import components */
import Hero from './components/Hero'
import HighlightedProjects from './components/HighlightedProjects'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis()
  
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
    }
  }, []);

  useEffect(() => {
    document.title = 'Colin Sonnenberg';
  }, []);

  return (
    <>
      <main className="overflow-x-hidden flex flex-col mx-auto min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-lg md:mt-10">     
        
        {/* Header */}
        <div className="flex flex-row justify-between mt-4">
          <div className="font-bold text-xl">COLIN S.</div>
          <IoMenu className="scale-150"/>
        </div>

        <Hero />

        {/* Highlighted projects */}
        <HighlightedProjects/>

        {/* About me */}
        <div className="mt-6">
          <div className="font-bold text-xl">About me</div>
          <div className="text-sm/5 mt-4 text-gray-600">
            <div>
              I'm Colin Sonnenberg, an infrastructure reliability engineer at Comcast based in Philadelphia, USA.
            </div>
            <br />
            <div>
              A lifelong passion for technology and problem-solving initially led me to earn a B.S. Information Technology from the Pennsylvania State University.
              I spent several years working for EY, later joining Comcast as an information security analyst.
            </div>
            <br />
            <div>
              Today I focus on strengthening the resiliency and fault tolerance of critical cybersecurity applications and services.  I'm also pursuing
              a B.S. Computer Science from Oregon State University part-time to further my education.
            </div>
            <br />
            <div>
              Outside of work and university, you can find me adding new stamps to my passport, adding projects to my portfolio or cooking new recipes in the kitchen.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 mt-6">
          <div className="flex flex-row justify-between mt-3 text-sm font-semibold">
            <a href="https://www.linkedin.com/in/colin-sonnenberg/" target="_blank"  className="ml-20 ease-in-out duration-350 hover:text-gray-500">LinkedIn</a>
            <a href="https://github.com/sonnenco" target="_blank"  className="mr-20 ease-in-out duration-350 hover:text-gray-500">GitHub</a>
          </div>
          <div className="flex flex-col mt-4 items-center">
            <div className="text-sm font-semibold">🌎 Philadelphia, PA, USA</div>
            <div className="mt-4 mb-6 text-[10px] text-gray-400 italic">Lightly sketched in Figma and built with React + Tailwind CSS.</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
