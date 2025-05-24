import React from 'react'
import '../App.css'
import Photo from '../assets/colin_photo.png'

const Hero = () => {
  return (
    <div className="flex flex-col mt-6">
        <img src={Photo} className="self-center max-w-65 object-scale-down"></img>
        <div>
            <div className="mt-5 text-3xl font-light">Hello, I'm</div>
            <div className="text-4xl font-bold">Colin Sonnenberg</div>
            <div className="mt-5 text-md">I'm an infrastructure reliability engineer at Comcast, focusing on
                critical cybersecurity systems and ensuring business continuity.
            </div>
            <div className="flex flex-row justify-between mt-5">
                <button className="border-2 rounded-lg border-blue-500 bg-blue-500 font-semibold text-white px-10 py-2">Contact</button>
                <button className="border-2 rounded-lg border-blue-500 bg-white font-semibold text-blue-500 px-10 py-2">Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Hero