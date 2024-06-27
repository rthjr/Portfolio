import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { PageWrapper } from "../Animatio/page_wrapper";
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <PageWrapper>
            <div className='grid gap-1 md:gap-1 bg-stone-600 w-full h-auto p-5 md:p-10'>
                <div className='flex flex-col items-center font-bold text-white'>
                    <div>Email: sovannarithphan9@gmail.com</div><br />
                    <div>Phone: 092-559-662</div>
                    <ul className='flex gap-10 mt-5 md:mt-10 justify-center items-center'>
                        <a href="https://facebook.com">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com">
                            <FaGithub />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram />
                        </a>
                    </ul>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <a href="#home">
                        <svg className="animate-bounce w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <FaArrowUp className='text-white' />
                        </svg>
                    </a>
                </div>

                <div className='flex md:justify-center md:items-center justify-center font-bold text-white'>
                    <p>&copy; {currentYear} Phan Sovannarith. All rights reserved.</p>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Footer;
