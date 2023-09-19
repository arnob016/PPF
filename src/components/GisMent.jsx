/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SectionWrapper } from "../hoc";
import Giscus from '@giscus/react';
import {motion} from "framer-motion";
import { slideIn } from '../utils/motion';

const GisMent = () => {
  return (
    <div className='flex items-center overflow-hidden'>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className = "items-center justify-center w-full h-auto bg-black-100 hover:bg-purple-900 rounded-xl ">
        <div className='flex flex-col items-center gap-4 p-4 font-bold'>
          <div className='w-full max-w-5xl'>
          <div className='flex justify-center w-full mt-4 md:hidden'>Did you like my portfolio? Leave a comment below</div>
      
            <Giscus
              id="comments"
              repo="arnob016/PPF"
              repoId="R_kgDOKLcLmg"
              category="General"
              categoryId="DIC_kwDOKLcLms4CZbVb"
              mapping="pathname"
              term="Powered by giscus ✊"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="purple_dark"
              lang="en"
              loading="lazy"
              />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(GisMent, "GisMent");