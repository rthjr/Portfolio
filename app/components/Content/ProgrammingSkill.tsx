'use client';

import React from 'react'

const stats = [
    { name: 'Programming', value: '4' },
    { name: 'Framwork', value: '4' },
    { name: 'Project', value: '5' },
    { name: 'Certificate', value: 'Unlimited' },
]

const ProgrammingSkill = () => {
    return (
        <div className="overflow-hidden h-auto w-auto mt-96">
            <div className="max-w-7xl">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Experience</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Project
                    </p>
                </div>
            </div>

            <div className="carousel carousel-center w-full p-4 space-x-10 bg-black rounded-box">
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
                <div className="carousel-item relative">
                    <a href="">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg">Hovered Text</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-full mx-auto mt-20">
                <dl className="mt-16 grid grid-cols-1 gap-16 md:gap-64 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.name} className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

export default ProgrammingSkill
