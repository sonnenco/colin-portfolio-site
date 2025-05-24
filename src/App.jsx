import { useState } from 'react'
import './App.css'

/* Import icons */
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoGithub, IoMenu } from "react-icons/io5"
import { PiArrowDownThin } from "react-icons/pi"

/* Import components */
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col mx-auto min-h-screen max-w-screen-lg px-6">     
      <div className="flex flex-row justify-between mt-4">
        <div className="font-bold text-xl">COLIN S.</div>
        <IoMenu className="scale-150"/>
      </div>

      <Hero />

      <div className="mt-8 flex flex-row justify-between">
        <PiArrowDownThin className="scale-175"/>
        <div className="flex flex-row">
          <CiLinkedin className="mr-6 scale-200"/>
          <IoLogoGithub className="scale-200"/>
        </div>
      </div>

      {/* Highlighted projects, links to other projects */}

      {/* About me */}

      {/* Footer */}
    </main>
  )
}

export default App
