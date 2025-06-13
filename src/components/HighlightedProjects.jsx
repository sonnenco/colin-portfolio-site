import React, { useRef, useEffect } from 'react'
import Card from './Card'
import Carousel from './Carousel'
import ChessPhoto from '../assets/chess.jpg'
import Exercise from '../assets/exercise.jpg'
import Travel from '../assets/travel.jpg'

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
  
  const projects = [{
    image:Travel,
    title:"Wanderlust Travel Agency",
    description:"Wanderlust Travel Agency ('WTA') is a portfolio project for CS 340 at Oregon State University created by Rebecca Rosenberg and Colin Sonnenberg. WTA is a fictional business where agency employees need a website to help make and manage bookings.",
    link:"https://github.com/sonnenco/wanderlust_travel_agency"
  }, {
    image:Exercise,
    title:"Exercise Tracker",
    description:"Full stack MERN application that allows users to add, view, edit and delete exercise routines. Written as a portfolio project for CS 290 at Oregon State University.",
    link:"https://github.com/sonnenco/exercise-app"
  }, {
    image:ChessPhoto,
    title:"Atomic Chess",
    description:"Introduces explosive twists and fast-paced strategy. Written as a portfolio project for CS 162 at Oregon State University.",
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