"use client"

import { useState, useEffect } from 'react'
import './App.css'

import Lenis from 'lenis'

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
      } light:bg-slate-100 dark:bg-slate-800 dark:text-white transition duration-400`}>
      <main className="overflow-x-hidden flex flex-col mx-auto min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-screen-lg md:pt-10 pt-2">

        {/* Hero */}
        <Hero theme={theme} setTheme={setTheme}/>

        {/* Highlighted projects */}
        <HighlightedProjects/>

        {/* About me */}
        <div className="mt-6">
          <div className="font-extrabold text-2xl dark:text-white">About me</div>
          <div className="mt-4 font-extralight lg:text-lg/8">
            <div>
              I’m Colin Sonnenberg, a cybersecurity engineer based in Philadelphia.
            </div>
            <br />
            <div>
              My interest in technology began at an early age by playing games on the family desktop tower and buzzing CRT monitor.  As I grew up, the rise of social media and smartphones fundamentally changed the way people interacted with each other.  This only reinforced my fascination with technology and solidified my decision to pursue a career focused in it.
            </div>
            <br/>
            <div>
              I conducted my undergraduate studies at the Pennsylvania State University, eventually earning a B.S. Information Technology with a minor in Security and Risk Analysis.  I then began my career at EY working on a range of data protection and privacy projects across retail and financial sectors.
            </div>
            <br />
            <div>
              I later joined Comcast as an information security analyst within the Governance, Risk and Compliance (GRC) organization.  Today, I work on strengthening disaster recovery and continuity capabilities for our critical security platforms and tools.
            </div>
            <br />
            <div>
              Over time I’ve become increasingly drawn to the field of software engineering.  I enjoy the problem solving and creativity involved with building complex software solutions.  My curiosity has grown into a clear goal: to transition into a full-time software engineering role.  I’m supporting that pivot by pursuing a B.S. Computer Science at Oregon State University.
            </div>
            <br />
            <div>
              In my free time, you can find me camping or adding new passport stamps with my partner.
            </div>
            <br />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300">
          <div className="flex flex-row justify-between mt-3 text-sm font-semibold">
            <a href="https://www.linkedin.com/in/colin-sonnenberg/" target="_blank"  className="ml-20 ease-in-out duration-300 light:hover:text-blue-500 dark:hover:text-emerald-300">LinkedIn</a>
            <a href="https://github.com/sonnenco" target="_blank"  className="mr-20 ease-in-out duration-300 light:hover:text-blue-500 dark:hover:text-emerald-300">GitHub</a>
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
