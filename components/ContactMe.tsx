import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
            Open to work!
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-red-400 animate-pulse' />
                    <p className='text-2xl'>syorn2014@gmail.com</p>
                </div>
            </div>

            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input className='contactInput' type='text' placeholder='Name'></input>
                    <input className='contactInput' type='text' placeholder='Email'></input>
                </div>
                <input className='contactInput' type='text' placeholder='Subject'></input>
                <textarea className='contactInput' placeholder='Message'></textarea>
                <button type='submit' className='bg-[rgb(170,46,46)] py-5 px-10 rounded-md text-black font-bold text-lg' >Submit</button>
            </form>
        </div>
    </div>
  )
}