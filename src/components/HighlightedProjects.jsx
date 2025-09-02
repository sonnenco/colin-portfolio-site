import React, { useRef, useEffect } from 'react'
import Card from './Card'
import Carousel from './Carousel'
import ChessPhoto from '../assets/chess.jpg'
import Exercise from '../assets/exercise.jpg'
import Travel from '../assets/travel.jpg'
import Merlin from '../assets/merlin.png'
import Event from '../assets/event.png'

const HighlightedProjects = () => {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      if (!container) return;
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
  {
    image:Merlin,
    title:"Merlin's Bargain Market",
    description:"Fictional e-commerce site where users can browse Merlin's magical product catalog, manage their shopping cart, and complete checkout — supported by a set of microservices.",
    link:"https://github.com/sonnenco/microservices-project"
  },
  {
    image:Event,
    title:"Event Management Microservice",
    description:"Python-based microservice supporting create, read, update and delete operations via ZeroMQ calls.  Handles calendar events independently from the application to enhance scalability.",
    link:"https://github.com/sonnenco/event-management-microservice"
  },
  {
    image:Travel,
    title:"Wanderlust Travel Agency",
    description:"WTA is a fictional business which connects customers to adventures abroad with bookings for a variety of travel packages. Employees need a website to help manage the growing business.",
    link:"https://github.com/sonnenco/wanderlust_travel_agency"
  }, {
    image:Exercise,
    title:"Exercise Tracker",
    description:"MERN application that tracks exercises for a user. Uses React for the frontend UI and a REST API using Node and Express for the backend web service. MongoDB is used for persistence.",
    link:"https://github.com/sonnenco/exercise-app"
  }, {
    image:ChessPhoto,
    title:"Atomic Chess",
    description:"Chess variant played in the terminal. Introduces explosive twists and fast-paced strategy, offering a unique chess experience right from your command line.",
    link:"https://github.com/sonnenco/atomic-chess"
  }];

  return (
    <>
      <div className="font-extrabold text-2xl mt-10 lg:mb-10 dark:text-white">Project highlights</div>
      <div ref={scrollRef}>
        <Carousel>
          {projects.map((project, index) => (
              <Card key={index} {...project} />
            ))}
        </Carousel>  
      </div>
    </>
  )
}

export default HighlightedProjects