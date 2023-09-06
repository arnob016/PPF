/* eslint-disable no-unused-vars */
import React from 'react';
import { SectionWrapper } from "../hoc";

const ProjectCard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 overflow-hidden border-2'>
        <div className='gap-2 p-2 m-2'>
            <div className='flex flex-col'>
                <div className='border-2 bg-clip-border bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300'>
                    <div></div>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default SectionWrapper(ProjectCard, "ProjectCard");