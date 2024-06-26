import React from 'react'
import Image from 'next/image'
import PersonalContentC from './PersonalContentC';
import Skills from './ProgrammingSkill';
import Contact from './Contact';
import { PageWrapper } from '../Animatio/page_wrapper';
import UpDownAnimation from '../Animatio/ImageAnimation';

const PersonalContent = () => {
    return (
        <div className=' mx-5 md:mx-56 mt-5 md:mt-10 h-max rounded-3xl p-4 md:pd-2 text-white' id='home'>
            <PageWrapper>
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
                            <h4 className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg text-center md:text-left">
                                I have always been fascinated by the intersection of creativity and technology, and nothing embodies this better than web development. With this Portfolio I use various of Technology such as <strong className='text-red-400'>HTML CSS</strong> with <strong className='text-red-400'>Tailwind</strong> framework <strong className='text-red-400'>Javascript</strong> with <strong className='text-red-400'>Typescript</strong> and <strong className='text-red-400'>React</strong> with <strong className='text-red-400'>Next.js</strong>.
                            </h4>
                        </div>

                        {/* Right Column */}
                        <div className="flex justify-center md:justify-end items-center">
                            <div className="text-center">
                                <UpDownAnimation />
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
            </PageWrapper>
        </div>
    )
}

export default PersonalContent