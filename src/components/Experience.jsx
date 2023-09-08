/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {experiences} from '../constants';
import { SectionWrapper } from '../hoc';
import {textVariant} from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement
    contentStyle={{ background: 'linear-gradient(to right bottom, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))', color: '#fff' }}
    contentArrowStyle={{ borderRight: '16px solid  rgb(251, 113, 133)' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex items-center justify-center w-full h-full'>
        <img src={experience.icon} alt={experience.title} className='object-contain'/>
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[20px] font-bold'>
          {experience.title}</h3>
        <p className='text-lg font-semibold text-secondary' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>
      
        <ul className='mt-5 ml-5 space-y-2 list-disc'>
          {experience.points.map((point,index) => (
            <li key={`experinece-point-${index}`} className='text-white text-[17px] pl-1 tracking-wider'>{point}
            </li>    
          ))}
        </ul> 
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Here&apos;s what/who I worked for:</p>
    <h2 className={styles.sectionHeadText}>Experience:</h2>
    </motion.div>
    
    <div className='flex flex-col mt-20 overflow:hidden '>
      <VerticalTimeline>
        {experiences.map((experience,index) => (
        <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>

    </div>

    </>    
  )
}

export default SectionWrapper(Experience, "work")