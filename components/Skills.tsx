import React from 'react';
import {motion} from 'framer-motion';
import Skill from './Skill'

const iconArray = ['https://img.icons8.com/color/512/javascript--v1.png','https://img.icons8.com/color/512/html-5.png','https://img.icons8.com/color/512/git.png','https://img.icons8.com/color/512/github.png','https://img.icons8.com/color/512/nodejs.png','https://img.icons8.com/color/512/my-sql.png','https://img.icons8.com/color/512/postgreesql.png','https://img.icons8.com/color/512/mongodb.png','https://img.icons8.com/color/512/react-native.png','https://img.icons8.com/color/512/python.png','https://img.icons8.com/color/512/tailwind_css.png','https://img.icons8.com/color/512/bootstrap.png']

type Props = {}

function Skills({}: Props) {
    const Skills = iconArray.map((img) => {
        return <Skill skillImage={img}/>
    })
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        
        </h3>
        <div className='grid grid-cols-4 gap-5'>
            {Skills}
        </div>
    </motion.div>
  )
}

export default Skills