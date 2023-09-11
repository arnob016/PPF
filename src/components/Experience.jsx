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
    contentStyle={{ background: 'linear-gradient(to right, rgb(217, 70, 239), rgb(99, 102, 241))', color: '#fff' }}
    contentArrowStyle={{ borderRight: '16px solid rgb(217, 70, 239)' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex items-center justify-center w-full h-full'>
        <img src={experience.icon} alt={experience.title} className='object-contain'/>
      </div>
    }
    >
      <div>
        <h3 className='font-extrabold text-zinc-50 text-[20px]'>
          {experience.title}</h3>
        <p className='font-extrabold text-zinc-50' style={{ margin: 0 }}>{experience.company_name}</p>
        <p className='font-bold text-zinc-50'>{experience.points}</p>
      </div>
      
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <h2 className={styles.sectionHeadText}>Professional experience</h2>
    <p className={styles.sectionSubText}>Where I have worked before&nbsp;:</p>
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

export default SectionWrapper(Experience, "experience")