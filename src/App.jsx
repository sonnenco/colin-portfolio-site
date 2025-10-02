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
              My name is Colin Sonnenberg, and I'm currently a cybersecurity engineer based in Philadelphia.
            </div>
            <br />
            <div>
              My lifelong interest in technology began early — some of my first memories involve playing games on our family’s beige Gateway desktop, complete with a buzzing CRT monitor. 
              As I grew up, the rise of social media and the first wave of smartphones only deepened my fascination with tech and solidified my desire to pursue a technology-focused career.
            </div>
            <br/>
            <div>
              That path eventually led me to the Pennsylvania State University, where I earned a B.S. in Information Technology and a minor in Security and Risk Analysis. 
              My education opened the door to my first role at EY, where I worked on a range of data protection and privacy projects. 
              This aligned with the emergence of GDPR-style legislation in the U.S. and the development of regulatory bodies tasked with enforcing compliance.
            </div>
            <br />
            <div>
              I later joined Comcast as an information security analyst within the Governance, Risk, and Compliance (GRC) team. 
              Today, I focus on implementing disaster recovery and continuity capabilities across critical security platforms and tools.
            </div>
            <br />
            <div>
              Over time, my work in cybersecurity has led me to collaborate closely with engineering teams, where I found myself increasingly drawn to the technical problem-solving and creativity involved in building software.
              That curiosity has grown into a clear goal: to transition into a full-time software engineering role.
              To support that pivot, I'm currently pursuing a second B.S. in Computer Science from Oregon State University.
            </div>
            <br />
            <div>
              In my free time, you’ll either find me traveling the world with my partner or relaxing at home with our three cats.
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
