
'use client';
import Link from 'next/link';
import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const PersonalContentC = () => {
    return (
        <div>
            <ul className='flex gap-10 mt-20 items-center'>
                <Link href="">
                    <CiFacebook className='animate-bounce' />
                </Link>
                <Link href="">
                   <FaGithub className='animate-bounce' />
                </Link>
                <Link href="">
                    <FaInstagram className='animate-bounce'/>
                </Link>
                <Link href="">
                    <h4 className='font-bold animate-bounce'>CV</h4>
                </Link>
            </ul>
        </div>
    )
}

export default PersonalContentC