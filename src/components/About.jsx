/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ppf from "../assets/ppf.jpg";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 1)}
      className="w-full bg-gradient-to-b from-orange-500 to-yellow-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-300 p-[1px] rounded-3xl ">
      
        <div
          options={{
            max: 45,
            scale: 1.5,
            speed: 450,
          }}
          className='bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='object-contain w-16 h-16'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-10 lg:flex-row'>
      <div className='flex flex-col justify-center'>
        <motion.div variants={textVariant()}
        className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 via-cyan-300 to-zinc-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Introduction.
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-[17px] max-w-3xl leading-[30px] bg-clip-text font-bold '
        >
          I&apos;m a Computer Science student with 1 year of experience in project management and blockchain technology (Stellar). I&apos;ve also gained experience in programming, problem solving, marketing, and scripting during my academic period in Daffodil International University. I&apos;m skilled in community management and UI designing as well.
        </motion.p>
      </div>
      <motion.div variants={textVariant()} className='-mt-2'>
      <img src={ppf} alt='Picture' className='object-contain h-64 border-4 border-transparent rounded-full bg-clip-border bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300'/>
      </motion.div>
      </div>
      
      
      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");