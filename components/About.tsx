import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <div className='flex relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 1,
        }}
        transition={{
            duration: 2.2,
        }}
        whileInView={{
            x: 0,
        }}
        viewport={{ once: true }} 
        src='./StephenYornAbout.png'
        className='-mb-20 md:mb-0 flex w-56 h-56 full object-cover md:lg md:w-64'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>A little about me ...</h4>
            <p className='text-sm'>After working in the customer service and health industry for more than half a decade - I decided to take the skills I learned and pursue software engineering. My goal is help, guide and teach others with technical difficulties; whilst creating fun, inspiring and engaging applications. I love learning new concepts and implementing my dose of creativity into every project.</p>
        </div>
    </div>
  )
}

export default About