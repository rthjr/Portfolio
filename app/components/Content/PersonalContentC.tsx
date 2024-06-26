
'use client';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const PersonalContentC = () => {
    return (
        <div>
            <ul className='flex gap-10 mt-20 items-center'>
                <a href="https://facebook.com">
                    <FaFacebook className='animate-bounce' />
                </a>
                <a href="https://github.com">
                    <FaGithub className='animate-bounce' />
                </a>
                <a href="https://instagram.com">
                    <FaInstagram className='animate-bounce'/>
                </a>
                <Link href="../cvfolder/CV.pdf" className="font-bold">
                        CV
                </Link>
            </ul>
        </div>
    );
};

export default PersonalContentC;
