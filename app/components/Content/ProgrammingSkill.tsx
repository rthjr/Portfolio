"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { name: 'Programming', value: '4' },
    { name: 'Framework', value: '4' },
    { name: 'Project', value: '5' },
    { name: 'Certificate', value: 'Unlimited' },
];

const images = [
    "/images/calculator.jpg",
    "/images/java.jpg",
    "/images/rs.jpg",
    "/images/todo.png",
    "/images/zoom.jpg",
];

const hoverTexts = [
    "CALCULATOR",
    "JAVA Exercises",
    "Recommendation System",
    "TODO List",
    "Zoom Animation"
];

const links = [
    "https://github.com/rthjr/calculator",
    "https://github.com/rthjr/JavaExercise",
    "https://github.com/rthjr/CBF_Recommandation_System",
    "https://github.com/rthjr/TODO_List_Django",
    "https://github.com/rthjr/zoom-scroll-img"
];

const ProgrammingSkill = () => {
    return (
        <div className="overflow-hidden h-auto w-auto mt-96">
            <motion.div 
                className="max-w-7xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Experience</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Here are the projects that I used to build!
                    </p>
                </div>
            </motion.div>

            <motion.div 
                className="carousel carousel-center w-full p-4 space-x-10 bg-black rounded-box"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {images.map((image, index) => (
                    <motion.div 
                        key={index} 
                        className="carousel-item relative h-80"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href={links[index]} target="_blank" rel="noopener noreferrer">
                            <motion.img
                                src={image}
                                alt={hoverTexts[index]}
                                className="rounded-box w-full h-full"
                                style={{ objectFit: 'cover' }} // Ensure the image fills its container
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <span className="text-white text-lg">{hoverTexts[index]}</span>
                            </motion.div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="w-full mx-auto mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <dl className="mt-16 grid grid-cols-1 gap-16 md:gap-64 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <motion.div 
                            key={stat.name} 
                            className="flex flex-col-reverse"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                        </motion.div>
                    ))}
                </dl>
            </motion.div>
        </div>
    );
}

export default ProgrammingSkill;
