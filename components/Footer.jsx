'use client'
import styles from '@styles'
import { footerVariants } from '@utils/motion'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <section className={` ${styles.flexCenter} relative w-full mt-[155px] `}>
      <motion.div
      variants={footerVariants}
      initial='hidden'
      whileInView='show'

      className={`${styles.flexCenter} flex-col w-full bg-[#1C1C65] `} >
        <div className='footerGradient'/>
      <div className=' flex md:w-full w-[72%]  md:justify-center md:py-[100px] py-[65px]  flex-col relative '>
        <motion.img animate={{y:[0,10,0]} } transition={
      {duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType:'reverse'
       }} src="footer.svg" alt="footer" className='absolute w-[407px] h-[469px]  top-[-294px] right-[-40px] md:w-[1020px] md:h-[1070px] md:top-[-754px] md:right-[0px]' />
        <motion.img animate={{rotateZ:[10,5,10]} } transition={
      {duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType:'reverse'
       }}src="footer2.svg" alt="footer" className='absolute w-[200px] top-[-117px] left-[-54px]  md:w-[335px] md:top-[-190px] md:left-0 lg:w-[400px] lg:top-[-210px] lg:left-0' />
        <div className={`  flex items-center justify-center  md:gap-[4.25rem] gap-[1.25rem] mb-[3.5rem] flex-wrap  `}>
          <a><img src="home.svg" alt="home" /><span>home</span></a>
          <a><img src="person.svg" alt="person" /><span>about me</span></a>
          <a><img src="work.svg" alt="work" /> <span>work</span></a>
          <a><img src="phone2.svg" alt="phone" /><span>contact</span></a>
        </div>
        <div>
          <div className={`${styles.flexCenter} sm:ml-0 ml-[14px] flex-wrap`}>
            <img src="Instagram.svg" alt="instagram" />
            <img src="Twitter.svg" alt="twitter" />
            <img src="Linkedin.svg" alt="Linkdin" />
            <img src="Facebook.svg" alt="facebook" />
          </div>
        </div>
       


      </div>
      <div className='w-full sm:px-[5rem] px-[2rem] bg-[#1C1C65]'>
      <div className=' w-[100%]  border-t-white border-t-solid border-t-[1px]   '>
        <p className='float-right px-2 py-6 text-secondary-white'>Terms of Service - Privacy Policy disigned by <strong>Sourasith</strong></p>

         </div>
         </div>
         </motion.div>
    </section>
  )
}

export default Footer
