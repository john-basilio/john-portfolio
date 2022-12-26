import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex flex-col  justify-end h-screen w-screen text-white overflow-hidden'>


      <div className='flex flex-col  mb-[50px] ml-[15px] lg:ml-[50px] lg:mb-[20px]'>

        <div className='flex flex-row'>
          <motion.h3 className='font-open-sans text-[1rem]' initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:1, delay:1 }}>&quot;Explore, &nbsp;</motion.h3>

          <motion.h3 className='font-open-sans text-[1rem]' initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:1, delay:2.5}}>Improve, &nbsp;</motion.h3>

          <motion.h3 className='font-open-sans text-[1rem]' initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:1, delay:3.5}}>Repeat!&quot;</motion.h3>
        </div>
        

        <motion.div className='flex flex-row font-open-sans text-[3rem]' initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{duration:1, delay:5 }}>
          Hi! I&apos;m&nbsp; <h1 className='text-yellow-500 font-open-sans' >John</h1>,  
        </motion.div>

        <motion.div className='flex flex-row font-open-sans text-[1.5rem] lg:text-[2.5rem]'initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1, delay:5.5 }}>
          A &nbsp;<h1 className='text-red-500 font-open-sans'>Front-end</h1> &nbsp;web developer
        </motion.div>


      </div>

      <motion.div className='flex items-center justify-center mb-[130px] lg:justify-start lg:mb[150px] lg:ml-[50px]' initial={{y:170}} animate={{y:0}} transition={{duration:1, delay:6.5, type:'spring', bounce:0.4 }}>
        <Link href={"About"}>
          <button className=' px-[30px] h-[40px] border rounded-xl lg:text-[1.2rem] lg:px-[40px] lg:' >See more about me</button>
        </Link>
      </motion.div>
    </div>
  )
}