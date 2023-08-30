import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ThreeObject } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen max-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-full h-auto mx-auto sm:px-16 pl-6 flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-violet-500'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
      </div>
      <div className='flex flex-row w-full justify-between'>
        <div>
          <div className={`${styles.visible}  xl:h-20 lg:h-20`}></div>
          <h1 className={`${styles.heroHeadText}`}>Hello&nbsp;there,&nbsp;I'm<br/>
            <span className="text-violet-500">&nbsp;Arnob Dey!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> Welcome to my portfolio!</p>
          <div className='md:20 xl:20 lg:h-20'></div>
        </div>
      
      <div className={`${styles.visible}`}></div>
      <div className={`ml-4 w-full pl-4 px-4 overflow-hidden ${styles.visible}`}>
        <ThreeObject/>
        </div>
  </div>
  </div>
    

<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>      

    </section>
  )
}

export default Hero