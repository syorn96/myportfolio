import React from 'react';
import {motion} from 'framer-motion';

type Props = {
    directionLeft?: boolean;
    skillImage?: {
      url: string;
      name: string;
    }[];
};

export default function Skill({ directionLeft, skillImage}: Props) {
  return (
    <div className='group relative flex cursor-pointer items-center justify-center'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={`${skillImage?.url}`}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale' 
        />
        <div className='relative bottom-0'>{skillImage?.name}</div>
    </div>
  )
}