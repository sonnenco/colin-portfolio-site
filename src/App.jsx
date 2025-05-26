"use client"

import { useState, useEffect } from 'react'
import './App.css'

import Lenis from 'lenis'

/* Import icons */
import { FiSun, FiMoon } from 'react-icons/fi'

/* Import components */
import Hero from './components/Hero'
import HighlightedProjects from './components/HighlightedProjects'

function App() {
  const [theme, setTheme] = useState('');
  
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
    <div className={`${
      theme ? "dark" : "light"
      } dark:bg-zinc-700 dark:text-white transition duration-400`}>
      <main className="overflow-x-hidden flex flex-col mx-auto min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-lg md:pt-10">     
        
        {/* Header */}
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold text-2xl leading-none">COLIN S.</div>
          <div className="flex items-center justify-centers scale-110 p-1 rounded-md light:bg-zinc-100 dark:bg-zinc-600">
            <button
              className="bg-transparent p-2 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-md"
              onClick={() => {
                setTheme("");
            }}>
              <FiSun/>
            </button>
            <button
              className="bg-transparent rounded-md p-2 hover:bg-zinc-200"
              onClick={() => {
                setTheme("dark");
            }}>
              <FiMoon/>
            </button>
          </div>
        </div>

        <Hero theme={theme}/>

        {/* Highlighted projects */}
        <HighlightedProjects/>

        {/* About me */}
        <div className="mt-6">
          <div className="font-bold text-xl">About me</div>
          <div className="text-sm/5 mt-4">
            <div className="">
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
            <a href="https://www.linkedin.com/in/colin-sonnenberg/" target="_blank"  className="ml-20 ease-in-out duration-300 hover:text-blue-500">LinkedIn</a>
            <a href="https://github.com/sonnenco" target="_blank"  className="mr-20 ease-in-out duration-300 hover:text-blue-500">GitHub</a>
          </div>
          <div className="flex flex-col mt-4 items-center">
            <div className="text-sm font-semibold">🌎 Philadelphia, PA, USA</div>
            <div className="mt-4 mb-6 text-[10px] italic">Lightly sketched in Figma and built with React + Tailwind CSS.</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
