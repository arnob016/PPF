import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ThreeObject } from './canvas';
import HexFect from './HexFect';
const Hero = () => {
  const heroText = "WELCOME TO MY PORTFOLIO !";

  return (
    <div id="hero-wrapper">
    <section className='relative w-full h-screen max-auto'>
      <div className={`absolute inset-0 top-[150px] lg:top-[220px] max-w-full h-auto mx-auto sm:px-16 pl-6 flex flex-row  items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-violet-500'/>
        <div className='w-1 h-40 sm:h-80 violet-gradient'/>
      </div>
      <div className='flex flex-col justify-between w-full overflow-hidden lg:flex-row'>
        <div className='w-full'>
          <div className={`${styles.visible}  xl:h-10 lg:h-10 `}></div>
          <h1 className={`${styles.heroHeadText}`}>Hello&nbsp;there,&nbsp;I&#39;m<br/>
            <span className="text-violet-500">&nbsp;Arnob Dey!</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <HexFect textToAnimate={heroText} />
          </div>

          <div className='md:20 xl:20 lg:h-20'></div>
        </div>
 
       
      <div className={`mt-20 lg:mt-0 px-10 ml-4 w-full pl-4 lg:px-4 overflow-hidden lg:flex`}>
        <ThreeObject/>
        </div>

        
  </div>
 
  </div>

<div className='absolute items-center justify-center hidden w-full xs:bottom-10 bottom-32 md:flex'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
    </div>
  )
}

export default Hero