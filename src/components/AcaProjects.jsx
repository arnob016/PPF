/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from '../variants'
import { SectionWrapper } from '../hoc';
import { Tilt } from "react-tilt";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";

const AcademyProjects = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0">
          <div className="hidden py-5 lg:block"></div>
            <div>
              <h2 className="p-2 text-3xl font-extrabold leading-tight text-transparent bg-gradient-to-l from-rose-500 to-indigo-700 bg-clip-text h2">Academic Projects</h2>
              <p className="px-2 pt-2 text-xl font-bold mt-7 text-stone-200">
                These are projects I completed during my study</p>
              <p className="px-2 pb-2 my-5 text-xl font-bold text-stone-200">
                period during Daffodil International University ❤️</p>
                
                <button className="text-white bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-400 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-[60px] m-2">View my degree</button>
              </div>
              <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}>
            <Tilt
          options={{
            max:15,
            scale:1,
            speed:400,
            reverse: true,
            reset:true
          }}  className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-black-100"></div>
            <img src={carrent} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-24">
              UI / UX design</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              Project Name
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="#">
              Read Blog Post</a>  
           
          </Tilt>
          </motion.div>
          </div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
          className="flex flex-col flex-1 gap-y-10">
          <Tilt
          options={{
            max:15,
            scale:1,
            speed:400,
            reverse: true,
            reset:true
          }}  className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-black-100"></div>
            <img src={carrent} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-24">
              UI / UX design</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              Project Name
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="#">
              Read Blog Post</a>  
           
              </Tilt>

          <Tilt
          options={{
            max:15,
            scale:1,
            speed:400,
            reverse: false,
            reset:true
          }}  className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-black-100"></div>
            <img src={carrent} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-24">
              UI / UX design</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              Project Name
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="#">
              Read Blog Post</a>        
          </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(AcademyProjects,"projects");