import React from 'react'

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card relative w-[80vw] max-w-100 h-95 my-10 mx-5 overflow-hidden border-4 border-gray-300 rounded-xl shadow-[4px_4px_8px_rgba(0,0,0,0.1)]">
      <img src={image} alt={title} className="card-image w-full max-h-40 object-cover" />
      <div className="card-content p-4">
        <div className="card-title font-bold">{title}</div>
        <div className="card-description mt-2 text-sm/5">{description}</div>
        <a href={link} className="card-link inline-block absolute bottom-4 border-2 rounded-lg border-blue-500 bg-blue-500 text-xs font-semibold text-white px-3 py-2" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    </div>
  )
}

export default Card