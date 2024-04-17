'use client';
import styles from '@styles'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@utils/motion'


const Work = () => {
  return (
    <section id='mywork' className={`${styles.innerWidth} pt-10  `}>
      <div className={`${styles.flexCenter}  relative workBackground`}>
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:true,amount:0.25}} 
         className={`flex justify-center items-center  z-10  w-full`  }>
          <motion.div
          variants={fadeIn('right','spring',1 * 0.5 ,0.75)} 
           className={`${styles.flexCenter} vs:w-[105px] vs:h-[85px] lg:w-[300px] lg:h-[205px] lg:rounded-[20px] lg:pb-10 sm:w-[195px] sm:h-[120px] sm:rounded-[14px]  rounded-[14px] sm:p-[11px] sm:mr-[-15px]  w-[150px]  h-[110px] bg z-0  `}>
            <img src="card1.svg" alt="card1." />
          </motion.div>
          <motion.div
          variants={fadeIn('right','spring',2 * 0.5 ,0.75)} 
           className={`${styles.flexCenter} vs:w-[125px] vs:h-[95px]   sm:w-[220px] sm:h-[145px] sm:rounded-[14px] lg:w-[350px] lg:h-[240px] px-[10px] lg:pb-7 lg:rounded-[20px] rounded-[14px]  w-[170px]  h-[125px] bg1 z-10 ml-[-8px] `}>
            <img src="card2.svg" alt="card2"  className='w-[291px] '  />
          </motion.div>
          <motion.div
          variants={fadeIn('right','spring',3 * 0.5 ,0.75)} 
           className={`${styles.flexCenter} vs:w-[105px] vs:h-[85px]  lg:w-[300px] lg:h-[205px] lg:rounded-[20px] lg:p-5 sm:w-[195px] sm:h-[120px] sm:rounded-[14px] sm:ml-[-15px] rounded-[14px] sm:p-[25px]    w-[150px]  h-[110px] bg2 z-0 ml-[-5px]  `}>
            <img src="card3.svg" alt="card3." />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default Work