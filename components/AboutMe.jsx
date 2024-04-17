'use client'
import styles from "@styles"
import { motion } from "framer-motion"
import { staggerContainer, planetVariants  } from "@utils/motion"



const AboutMe = () => {
  return (
    <section id="about" className={` ${styles.innerWidth} ${styles.flexCenter} justify-center xl:mt-[150px] md:mt-[100px] mt-[40px] overflow-hidden `}>
        <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:true,amount:0.25}}  
         className="relative " >
          <motion.div  variants={planetVariants('right')}
    animate={{y:[0,10,0]} } transition={
      {duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType:'reverse'
       }
    }>
          <img src="about.svg" alt="about" className=""  />
          </motion.div>
        
        </motion.div>
       


    </section>
  )
}

export default AboutMe