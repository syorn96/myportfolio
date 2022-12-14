import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex-tems-start flex justify-between max-w-7xl mx-auto'>
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }} 
        className='flex flex-row items-center'>
          <SocialIcon 
          url='https://www.linkedin.com/in/stephenyorn/' 
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
          />
          <SocialIcon 
          url='https://github.com/syorn96' 
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
          />
          <SocialIcon
          url='https://www.instagram.com/luckyducktc/'
          fgColor='gray'
          bgColor='transparent'
          target='_blank' 
          />
        </motion.div>
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}  
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon
          className='cursor-pointer' 
          network='email'
          fgColor='gray'
          bgColor='transparent'
          href='#contact'
           />
          <Link href='#contact'>
            <button className='heroButton uppercase hidden md:inline-flex text-sm text-gray-500'>Contact me</button>
          </Link>
        </motion.div>
    </header>
  )
}

export default Header