'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { name: 'Programming', value: '4' },
    { name: 'Framwork', value: '4' },
    { name: 'Project', value: '5' },
    { name: 'Certificate', value: 'Unlimited' },
];

const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
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
                        Project
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
                        className="carousel-item relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="">
                            <motion.img
                                src={image}
                                className="rounded-box w-full h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <span className="text-white text-lg">Hovered Text</span>
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
