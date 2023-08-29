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
          <div className='xs:invisible md:invisible sm:invisible xl:h-20 lg:h-20'></div>
          <h1 className={`${styles.heroHeadText}`}>Hello&nbsp;there,&nbsp;I'm<br/>
            <span className="text-violet-500">&nbsp;Arnob Dey!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> Welcome to my portfolio!</p>
          <div className='md:20 xl:20 lg:h-20'></div>
        </div>
      <div className={`${styles.visible}`}></div>
      <div className={`ml-4 w-full pl-4 px-4 ${styles.visible} `}>
        <ThreeObject/>
      </div>
      </div>


      </div>
            
      
    </section>
  )
}

export default Hero