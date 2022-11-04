import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

function ExperienceCard2({}: Props) {
  return (
    <article className='flex-col flex rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[900px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }} 
        className='w-32 h-32 rouned-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://smarttalktherapy.com/wp-content/uploads/2020/06/Kaiser-Permanente-Logo.jpg'
        alt='Kaiser Permanente Logo'/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Pharmacy Help Desk Clerk</h4>
            <p className='font-bold text-2xl mt-1'>Kaiser Permanente</p>
            <p className='uppercase py-5 text-gray-300'>FEB 2018 - FEB 2022</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Assist and guide team members with insurance benefits and healthcare applications.</li>
                <li>Provide consistent Call Center customer service to all Kaiser patients with their Pharmaceutical needs: prescription refills, insurance benefits, and refunds.</li>
                <li>Receive and maintain high volume of calls from all Northern California members with their pharmacy concerns.</li>
                <li>Customer Service</li>
                <li>Teamwork</li>
                <li>Troubleshooting</li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard2