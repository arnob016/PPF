import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ThreeObject } from './canvas';
import HexFect from './HexFect';


const Hero = () => {
  const heroText = "WELCOME TO MY PORTFOLIO !";

  return (
    <section className='relative w-full h-screen max-auto'>
      <div className={`absolute inset-0 top-[150px] lg:top-[220px] max-w-full h-auto mx-auto sm:px-16 pl-6 flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-violet-500'/>
        <div className='w-1 h-40 sm:h-80 violet-gradient'/>
      </div>
      <div className='flex justify-between w-full overflow-hidden xs:flex-col sm:flex-col md:flex-col lg:flex-row'>
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
      
      <div className={`ml-4 w-full pl-4 px-4 overflow-hidden ${styles.visible}`}>
        <ThreeObject/>
        </div>

      <div className={`ml-4 mt-20 w-full pl-4 px-10 overflow-hidden ${styles.invisible}`}>
        <ThreeObject/>
        </div>
  </div>
  </div>

<div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
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
  )
}

export default Hero