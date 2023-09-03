import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 1)}
      className="w-full bg-gradient-to-b from-orange-500 to-yellow-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-300 p-[1px] rounded-3xl ">
      <div
        options={{
          max: 45,
          scale: 2,
          speed: 100,
        }}
          className="bg-tertiary rounded-3xl px-5 [x-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`text-secondary text-[17px] max-w-3xl leading-[30px] mt-4`}
      >
        I'm a software developer with years of experience in project management, blockchain technology. I've also gained experience in programming, problem solving, marketing, and scripting. I'm highly skilled in communications, digital storytelling, and UI designing as well.
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");