import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { PageWrapper } from "../Animatio/page_wrapper";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <PageWrapper>
            <div className='bg-stone-600 w-full h-auto p-5 md:p-10'>
                <div className='grid md:grid-cols-2 grid-cols-1 font-bold text-white'>
                    <div className='flex md:justify-center justify-start'>
                        <h4>Email: sovannarithphan9@gmail.com</h4>
                    </div>
                    <div className='flex md:justify-center justify-start'>
                        <h4>Phone: 092-559-662</h4>
                    </div>
                </div>
                <div className='flex justify-center items-center font-bold text-white md:mt-10 mt5'>
                    <p>&copy; {currentYear} Phan Sovannarith. All rights reserved.</p>
                </div>
                <div className="flex justify-center items-center mt-24">
                    <a href="#home">
                        <svg className="animate-bounce w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <FaArrowUp className='text-white' />
                        </svg>
                    </a>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Footer;
