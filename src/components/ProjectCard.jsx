/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { SectionWrapper } from "../hoc";

const ProjectCard = () => {
  return (
    <div className='mx-5 flex-row flex rounded-md ring  justify-between ring-[#cbd3d8] bg-[#cbd3d8] w-[90%] items-center gap-3 overflow-hidden text-black-100 text-decoration-none transition duration-350 ease-in-out
    hover:-translate-y-1 hover:translate-x-1 hover:ring-[#cbd3d8] hover:shadow-slate-400 hover:drop-shadow-md hover:text-black-200 hover:bg-gray-200 '>
      <div className='flex flex-col w-full p-4 m-2 border-2'>
      <div className='flex flex-row items-center gap-2 justify-normal'>
      <button className='p-2 m-2 w-[40%] bg-gray-100 rounded-md hover:bg-[#cbd3d8] hover:border-gray-100 hover:border-2 hover:-translate-y-1'>Read case study</button>
      <img src='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/5fd4f3b57684da0e44ba39cb_ArrowRight.svg' className='p-2 bg-gray-100 hover:translate-x-2 rounded-3xl'/>
      </div>
      </div>
      <img src='https://picsum.photos/200/300' alt='project' className='p-2 min-w-[40%] h-96 rounded-3xl' />
   
    </div>
  );
};

export default SectionWrapper(ProjectCard, "ProjectCard");
