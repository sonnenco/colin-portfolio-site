const Card = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col my-6 mx-auto bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-250 hover:shadow-lg hover:-translate-y-1 w-full max-w-80 md:max-w-sm h-[400px]">
      <img
        src={image}
        alt={title}
        className="h-45 w-full object-cover"
      />
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto border-2 text-sm rounded-lg font-semibold px-2 py-2 max-w-30 text-center
            ease-in-out duration-300
            light:text-white light:border-blue-500 light:bg-blue-500 light:hover:bg-white light:hover:text-blue-500
            dark:text-slate-800 dark:border-emerald-300 dark:bg-emerald-300 dark:hover:bg-slate-800 dark:hover:text-emerald-300"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Card;