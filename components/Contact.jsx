'use client'
import styles from '@styles'
import { slideIn , staggerContainer } from '@utils/motion'
import { motion } from 'framer-motion'
import React from 'react'


const Contact = () => {
  return (
    <section id='contact' className={`${styles.innerWidth} ${styles.flexCenter} overflow-hidden`}>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false , amount:0.25}} 
       className={`${styles.flexCenter}   w-full md:mt-[295px] sm:mt-[240px] mt-[180px] md:px-[10px] z-10 `}>
      <motion.div
      variants={slideIn('right' ,'tween' , 0.2 , 1)}
       className={`${styles.flexCenter}   md:flex-row flex-col relative md:w-[720px] lg:w-[900px] w-[280px] h-[895px] sm:w-[425px] md:h-[600px] sm:h-[940px]  contactBackground md:px-[90px] px-[40px] md:py-[8px] py-[34px] pt-[54px]`}>
        <motion.img variants={slideIn('down' ,'tween' , 0.5 , 1)} src="working.svg" alt="working" className='absolute md:w-[460px] md:top-[-577px] md:left[-158px] lg:top-[-626px] sm:top-[-495px] lg:left-[-191px] sm:left-[-134px] left-[-61px] lg:w-[500px] sm:w-[385px] w-[198px] top-[-244px] ' />
        <div className='flex flex-col flex-1 justify-center items-start  md:mb-[120px] mb-0 '>
          <div className='md:w-[290px] w-[250px] sm:w-[341px] sm: text-start md:mb-[55px] mb-[25px]'>
            <h2 className='text-white text-[24px] sm:text-[33px] md:text-[30px] leading-8 font-bold py-5'>Get in touch</h2>
            <p className='text-secondary-white text-[17px] sm:text-[23px]  md:text-[19px] sm:leading-8 leading-6 font-normal '>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <img src="Phone.svg" alt="phone" className='pr-4 rounded-full' />
            <p className='text-[15px] font-normal text-secondary-white'>1-514-456-2753</p>
          </div>
          <div className='flex justify-center items-center'>
          <div className='bg-[#656599] rounded-full p-[10px] mr-4 '>
            <img src="Exclude.svg" alt="Exclude"  className='w-full h-full object-contain'/>
          </div>
          <p className='text-[15px] font-normal text-secondary-white'>Sou12@gmail.com</p>
          </div>

        </div>
        {/*-----------------------------------------------*/ }
        <div className='flex flex-col flex-1 justify-center items-start gap-3 mb-10'>
          <h2 className='text-white text-[24px] leading-8 font-bold py-5'>send me a message</h2>
          <input type="text" placeholder='Name' className='w-full  p-2 inputBackground placeholder-[#ffffffd8]  font-[300]'  />
          <input type="email" placeholder='Email Address' className='w-full  placeholder-[#ffffffd8] font-[300] p-2 inputBackground '  />
          <input type="text" placeholder='Subject' className='w-full  p-2 inputBackground placeholder-[#ffffffd8]  font-[300]'  />
          <textarea id="subject" placeholder='your message' className='w-full h-[200px]  placeholder-[#ffffffd8] font-[300] p-2 inputBackground '  />
          <button type='submit' className='p-2 px-8  btnGradient text-white font-normal'>send message</button>

        </div>
        

      </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact