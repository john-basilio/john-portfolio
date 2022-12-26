import React from 'react'
import BackgroundSnow from '../components/BackgroundSnow'
import Link from 'next/link'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative w-screen h-screen flex justify-evenly items-center flex-col px-[50px] text-white'>
        
        <BackgroundSnow/>
        <h1 className=' font-comfortaa text-[1.5rem] lg:text-[2rem] '>Oops! This area is still under construction. Please come back next time.</h1>
      
        <div className='flex items-center justify-center mb-[130px] lg:justify-start lg:mb[150px] lg:ml-[50px]'>
        <Link href={"/"}>
          <button className=' px-[30px] h-[40px] border rounded-xl lg:text-[1.2rem] lg:px-[40px] lg:' >Go back</button>
        </Link>
      </div>
    </div>
  )
}