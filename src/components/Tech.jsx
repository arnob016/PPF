/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import React from 'react';

const Tech = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center w-full p-5 m-5 text-xl font-extrabold border-b-2 border-dashed rounded-sm '>Techstack that I am learning right now</div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas
            icon={technology.icon}
          />
        </div>
      ))}
      </div>
      </div>
  )
}

export default SectionWrapper(Tech, "");