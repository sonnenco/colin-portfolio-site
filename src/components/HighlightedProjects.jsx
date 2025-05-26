import React, { useRef, useEffect } from 'react'
import Card from './Card'
import Carousel from './Carousel'
import ChessPhoto from '../assets/chess.jpg'
import Exercise from '../assets/exercise.jpg'

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
    image:Exercise,
    title:"Exercise Tracker",
    description:"Full stack MERN application that allows users to add, view, edit and delete exercise routines. Written as a portfolio project for CS 290 at Oregon State University.",
    link:"https://github.com/sonnenco/exercise-app"
  }, {
    image:ChessPhoto,
    title:"Atomic Chess",
    description:"Introduces explosive twists and fast-paced strategy. Written as a portfolio project for CS 162 at Oregon State University.",
    link:"https://github.com/sonnenco/atomic-chess"
  }, {
    image:ChessPhoto,
    title:"Project 3",
    description:"Description.",
    link:"https://github.com/sonnenco/atomic-chess"
  }];

  return (
    <>
      <div className="font-bold text-xl mt-10">Project highlights</div>
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