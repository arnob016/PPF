/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from '../variants'
import { SectionWrapper } from '../hoc';
import github from "../assets/github.png";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";

const ProjectCard = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex flex-col flex-1 lg:mb-0">
            <div>
              <h2 className="px-2 text-3xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-700 h2"> My projects</h2>
              <p className="px-2 text-xl font-bold mt-7 text-stone-200">
                Here&apos;s what I&apos;ve been working on lately.</p>
              <p className="px-2 pb-2 mt-3 mb-3 text-xl font-bold text-stone-200">
                Were you impressed? Let&apos;s work together 😊</p>
                
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 ml-2">Hire me!</button>
              </div>
              <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}>
            <div className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-black-100"></div>
            <img src={carrent} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-24">
              UI / UX design</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              Project Name
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="#">
              Read Blog Post</a>  
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-48 group-hover:bottom-6" href="#">
              Visit website</a>
            <a href="github.com">
              <img src={github} alt="github" className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md max-h-[50px] -bottom-full left-80 group-hover:bottom-4" href="#">
                </img>
                </a>
              </div>
            </motion.div>
          </div>

          
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
          className="flex flex-col flex-1 gap-y-10">
          <div className="flex p-20 mt-2"></div>
          <div className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-black-100"></div>
            <img src={carrent} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-24">
              UI / UX design</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              Project Name
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="#">
              Read Blog Post</a>  
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-48 group-hover:bottom-6" href="#">
              Visit website</a>
            <a href="github.com">
            <img src={github} alt="github" className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md max-h-[50px] -bottom-full left-80 group-hover:bottom-4" href="#">
              </img>
              </a>
              </div>

          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(ProjectCard,"projects");