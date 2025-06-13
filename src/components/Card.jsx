const Card = ({ image, title, description, link }) => {
  return (
    <div className="card relative w-[80vw] max-w-100 h-95 my-10 mx-5 overflow-hidden border-4 rounded-xl shadow-[6px_4px_8px_rgba(0,0,0,0.2)] border-slate-300 dark:border-white
    lg:my-2 lg:h-95">
      <img src={image} alt={title} className="card-image w-full max-h-40 object-cover" />
      <div className="card-content p-4">
        <div className="card-title font-bold text-xl underline">{title}</div>
        <div className="card-description mt-2 text-sm/5">{description}</div>
        <a href={link} className="card-link inline-block absolute bottom-4 border-2 rounded-lg text-xs font-semibold px-3 py-2
          ease-in-out duration-300
          light:text-white light:border-blue-500 light:bg-blue-500 light:hover:bg-white light:hover:text-blue-500
          dark:text-slate-800 dark:border-emerald-300 dark:bg-emerald-300 dark:hover:bg-slate-800 dark:hover:text-emerald-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}

export default Card