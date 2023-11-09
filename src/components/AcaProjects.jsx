/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from '../variants'
import { SectionWrapper } from '../hoc';
import { Tilt } from "react-tilt";
import actionverse from "../assets/actionverse.png";
import tree from "../assets/tree.png";
import blklnc from "../assets/blklnc.png";
import pyclass from "../assets/pyclass.png";
blklnc

const AcademyProjects = () => {
  return (
    <section className="overflow-hidden section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex flex-col flex-1 gap-y-12 lg:mb-0">
            <div>
              <h2 className="p-2 text-3xl font-extrabold leading-tight text-transparent lg:mt-20 bg-gradient-to-l from-rose-500 to-indigo-700 bg-clip-text h2">Academic Projects</h2>
              <p className="justify-end gap-2 px-2 pt-2 text-xl font-bold lg:flex lg:flex-col mt-7 text-stone-200">
                <span>These are projects I completed during my study&nbsp;</span>
              <span> period during Daffodil International University ❤️</span></p>
              <button className="text-white bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-lime-400 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg
               dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 lg:-mb-4 xl:mb-20 m-4">View my degree</button>
              </div>
              <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}>
            
          <div className="hidden md:flex xl:p-8"></div>
             <Tilt
          options={{
            max:15,
            scale:1,
            speed:400,
            reverse: true,
            reset:true
          }}  className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-blue-950"></div>
            <img src={tree} alt="Project Pic" className="transition-all duration-500 bg-blue-300 group-hover:scale-125" />
            <div className="absolute z-50 hidden font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 lg:flex group-hover:bottom-40">
            Research Project</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full decoration-auto left-6 md:left-12 group-hover:bottom-20">
            Indoor Plant Recommendation <br/> in Urban Environments <br/> Using Machine Learning and Sensor Data
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-6 md:left-12 group-hover:bottom-6" href="https://drive.google.com/file/d/1pC7Tqgg91sOJVu0K8hPKOFpI8UoNPt2e/view?usp=sharing">
              Read Research Paper</a>  
            
          </Tilt>
          </motion.div>
          </div>
          
          <div className="py-3 lg:hidden"></div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
          className="flex flex-col flex-1 gap-y-5">
            
          <Tilt
          options={{
            max:15,
            scale:1,
            speed:400,
            reverse: true,
            reset:true
          }}  className="relative overflow-hidden border-2 group border-white-100 lg:my-0.5 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-blue-950"></div>
            <img src={blklnc} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-24">
              Web Engineerin Project</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              Blocklancer
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="https://github.com/SpeedOut-Source/BlockLancer/blob/main/README.md">
              Check it out!</a>  
          </Tilt>

          <Tilt
          options={{
            max:15,
            scale:1,
            speed:400,
            reverse: false,
            reset:true
          }}  className="relative overflow-hidden border-2 group border-white-100 rounded-xl">
            <div className="absolute z-40 w-full h-full transition-all duration-300 opacity-70 group-hover:bg-blue-950"></div>
            <img src={pyclass} alt="Project Pic" className="transition-all duration-500 group-hover:scale-125 " />
            <div className="absolute z-50 font-bold text-transparent transition-all duration-700 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text -bottom-full left-12 group-hover:bottom-28">
              Developer</div>
            <div className="absolute z-50 font-extrabold text-transparent transition-all duration-1000 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text -bottom-full left-12 group-hover:bottom-16">
              PyClass : A Github Repo with all python problem solutions on CSE course.
            </div> 
            <a className="absolute z-50 px-2 font-extrabold transition-all duration-1000 border-2 border-transparent rounded-md bg-gradient-to-r from-purple-400 to-yellow-400 -bottom-full left-12 group-hover:bottom-6" href="https://github.com/arnob016/PyClass">
              Check it out!</a>        
          </Tilt>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(AcademyProjects,"AcademyProjects");