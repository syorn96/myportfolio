import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {
    const projects = [
        {
            name: 'Lucky Duck',
            img: './LuckyDuck.png',
            link: 'https://github.com/syorn96/Lucky-Duck',
            summary: 'An ORIGINAL online tarot game based on REAL duck memes. This project focuses on the importance of synchronous "on-click" functions and integrates them with the infamous "Fisher-Yates" formula. Users can enjoy the application and compete with a friend, family or their own personal computer to see who is the "luckier" duck.'
        },
        {
            name: 'Words Not From Buddha',
            img: './WordsNotFromBuddha.png',
            link: 'https://github.com/syorn96/WordsNotFromBuddha',
            summary: "Words have the power to create or break a person's reality. Words Not From Buddha is inspired by moments of clarity that I've experienced through reading meaningful words strung together. This online application will generate random quotes from ZenQuotes API (often related to inspiration, motivation, or life truths) in order to stimulate the user's ability to meditate, reflect or create intentions. Users that sign up will also receive a FREE daily horoscope through Aztro API. My goal is to create a virtual space and give users the ability to just Zen Out."
        },
        {
            name: 'Pod Cats',
            img: './PodCats.png',
            link: 'https://github.com/syorn96/pod-cats',
            summary: 'Pod Cats is a social media application designed for cat enthusiasts. This online application will allow cat owners to post and share pictures of their cute and diabolical best friend. Additionally users will be able to view posts from other cat enthusiasts!'
        },
        {
            name: 'Merge Request',
            img: './MergeRequest.png',
            link: 'https://github.com/syorn96/merge-request-client-1',
            summary: 'Looking for friends? A soulmate? Look no further than Merge Request, an online connection app. We all know software engineers are focused and introverted so we made an app that make it easy to connect with others to help bring them out of their comfort zone. A dating app for developers to develop meaningful relationships.'
        }
    ]

    const myProjects = projects.map((project, i) => (
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
            <motion.img
            initial={{
                y: -300,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y: 0 }}
            viewport={{ once: true }} 
            src={`${project.img}`} 
            alt={`${project.name}`}
            style={{height: '50%'}}/>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-slate-700'>Project { i + 1 } of {projects.length}:
                    </span>{" "}
                    <Link href={`${project.link}`} target='_blank'>{project.name} </Link>
                </h4>
                <p className='text-lg text-center md:text-left'> {project.summary}</p>
                
            </div>
        </div>
    ))
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flexrow max-w-full justify-evenly mx-auto items-center x-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {myProjects}
        </div>

        <div className='w-full absolute top-[30%] bg-red-500 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default Projects