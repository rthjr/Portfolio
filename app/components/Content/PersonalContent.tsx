import React from 'react'
import Image from 'next/image'
import PersonalContentC from './PersonalContentC';
import Skills from './ProgrammingSkill';
import Contact from './Contact';
import { FaArrowUp } from "react-icons/fa6";

const PersonalContent = () => {
    return (
        <div className=' mx-5 md:mx-56 mt-5 md:mt-10 h-max rounded-3xl p-4 md:pd-2 text-white' id='home'>
            <div className="grid-rows-1 flex justify-center mt-20">
                <h1 className='font-bold text-2xl md:text-6xl'>
                    Hello World
                </h1>
            </div>

            <div className="mt-5 md:mt-10 h-auto rounded-3xl p-4 md:p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl text-center">Phan Sovannarith</h1>
                        <h4 className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg text-center md:text-left">Web development involves creating websites and web applications using programming languages like HTML, CSS(Tailwind), and JavaScript(Typescript) plus React.</h4>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center md:justify-end items-center">
                        <div className="text-center">
                            <Image src="/images/poul.jpg" alt="poul" width={500} height={500} className='rounded-full' />
                        </div>
                    </div>

                    <div>
                        <PersonalContentC />
                    </div>
                </div>
                <div id='skill'>
                    <Skills />
                </div>
                <div id='contact'>
                    <Contact />
                </div>
            </div>
            <div className="flex justify-center items-center mt-24">
                <a href="#home">
                    <svg className="animate-bounce w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <FaArrowUp className='text-white' />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default PersonalContent