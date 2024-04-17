'use client'
import styles from "@styles"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { navVariants } from "@utils/motion"






const NavBar = () => {
  const [bar, setBar] = useState(true)
 
  return (
    <motion.nav 
    variants={navVariants}
    initial='hidden' 
    whileInView='show'
     className={`${styles.flexCenter}  ${styles.innerWidth}lg:p-[27px] p-[40px] xl:pl-[320px] xl:pr-[13rem] lg:pl-[253px] md:pl-[14.75rem] sm:pl-[3rem]  pl-[3rem]  ` }>
      
      <ul className="  relative flex  items-center 
      xl:gap-[7rem] lg:gap-[5rem] md:gap-[12rem]
      sm:gap-[13rem] gap-[5rem] flex-nowrap
       text-secondary-white text-[15px] font-medium  ">

        <div className="md:flex hidden  ">
        <div className='navGradient'/>
          <img src="top1.svg" alt="top" className="absolute left-[-218px] top-[-14px] w-[395px] object-contain" />
          </div>
        <li><a href="/">home</a></li>
        <li><a href="#about">about</a></li>
        <Image src='/logo.svg' alt="logo" width={46}
        height={46}  className="object-contain sm:mr-0 mr-9 "/>
        <li><a href="#mywork">my work</a></li>
        <li><a href="#contact">contact</a></li>
        <div className='navGradient1'/>
        <img  src={bar?  'bar.svg'  : 'barin.svg' }  onClick={() => bar? setBar(false) : setBar(true)} alt="bar" className="w-[40px] h-[40px] lg:hidden  " />
      </ul>
    </motion.nav>
  )
}

export default NavBar