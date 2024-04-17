'use client'
import styles from "@styles"
import { staggerContainer, slideIn } from "@utils/motion"
import {motion} from 'framer-motion'



const Hero = () => {
  return (
    <section className={`${styles.innerWidth} ${styles.flexCenter} overflow-hidden  `}>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false , amount:0.25}} 
      className={`relative ${styles.flexCenter} w-full`}>
      <motion.div
      variants={slideIn('right' ,'tween' , 0.2 , 1)}
       className=" absolute lg:top-[195px] top-[30px] lg:left-[295px] md:w-[450px] md:left-[295px] left-[22px] lg:w-[670px] w-[283px] h-auto">
        
        <h1 className="text-white font-bold lg:text-[55px] md:text-[40px] text-[25px] lg:leading-[70px] align-start   ">
        Creative UI Designer
        Sourasith Phomhome
        Based in Montreal
      </h1>
      <div className="md:p-[30px] md:pt-[2rem] pt-[25px]  flex justify-end gap-7">
        <button className="btn btn1">hire me</button>
        <button className="btn btn2">download CV</button>
        </div>
      
      </motion.div>
      
      <motion.div
      variants={slideIn('up' ,'tween' , 0.4 , 1)}
      ><img src='hero.svg' alt="hero" className="w-[900.353px]  object-contain   xl:ml-[360px]  xl:mt-[187px] lg:ml-[105px] lg:mt-[185px] md:mt-[100px] mt-[140px]"/>
      </motion.div>
      </motion.div>
    </section>
    
  )
}

export default Hero