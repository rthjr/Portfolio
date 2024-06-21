'use client';

import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='md:mt-96 mt-10 flex justify-center items-center'>
        <h1 className='font-bold text-xl md:text-2xl'>Contact</h1>
      </div>
      <div className="flex flex-col gap-11 md:mt-16 mt-5">
        <div className='w-full flex flex-col gap-4'>
          <h4>Enter the Email</h4>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs w-full h-8 text-black" />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <h4>Enter the Message</h4>
          <textarea className="textarea textarea-bordered rounded-lg w-full h-60 text-black" placeholder="Bio"></textarea>
        </div>
        <div className='flex justify-end'>
          <button className="p-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact