/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { SectionWrapper } from "../hoc";
import { blockchain } from '../assets';
import { projects } from '../constants';

const ProjectCard = () => {
  return (
    <a href="#" className="project-link">
    <div className='mx-5 flex-col md:flex-row flex rounded-md ring ring-[#cbd3d8] bg-[#cbd3d8] w-[70%] items-center gap-3 overflow-hidden text-black-100 text-decoration-none transition duration-350 ease-in-out
    hover:-translate-y-1 hover:translate-x-1 hover:ring-[#cbd3d8] hover:shadow-slate-400 hover:drop-shadow-md hover:text-black-200 hover:bg-gray-200 '>
      <div className='flex flex-col w-[70%] md:pl-10 my-2 md:m-2 gap-x-2'>
        <div className='flex flex-row mt-3'><p className='text-xl md:text-2xl'>Project Title</p>
        <img src='https://www.jobalign.com/wp-content/uploads/2017/07/Icon-Placeholder-1.png' className='rounded-xl pl-2 ml-7 w-[10%] h-[10%] hidden xl:flex'/>
        </div>
        <p className='text-xs md:text-sm'> Contribution - Month, Date</p>
        <p className='my-2 text-sm md:text-lg'>Project Description</p>
      <div className='flex flex-row items-center mb-4 justify-normal'>
      <button className='p-2 my-2 text-xs md:text-md xl:text-xl bg-gray-100 rounded-md hover:bg-[#cbd3d8] hover:border-gray-100  hover:-translate-y-1'>Read case study</button>
      <img src='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/5fd4f3b57684da0e44ba39cb_ArrowRight.svg'
      className='p-2 mx-2 bg-gray-100 hover:translate-x-2 rounded-3xl'/>     
      </div>
      <div className='flex-row items-center hidden md:flex'>
      <p className='py-2 text-sm'>Tags:</p>
      <p className='px-2 py-1 mx-2 text-xs bg-red-400 border-2 border-red-600 rounded-3xl'>#tag 1</p>
      <p className='px-2 py-1 mx-2 text-xs bg-blue-400 border-2 border-blue-600 rounded-3xl'>#tag 2</p>
      <p className='px-2 py-1 mx-2 text-xs bg-green-400 border-2 border-green-600 rounded-3xl'>#tag 3</p>
        
      </div>
      </div>
      <img src={blockchain} alt='project' className='p-2 min-w-[30%] h-72 rounded-3xl bg-transparent' />
   
    </div>
    </a>
  );
};

export default SectionWrapper(ProjectCard, "ProjectCard");
