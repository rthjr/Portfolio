'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const UpDownAnimation = () => {
    return (
        <div className="flex justify-center md:justify-end items-center mt-10 md:mt-0">
            <motion.div
                className="text-center rounded-full"
                style={{
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" 
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'loop'
                }}
            >
                <Image src="/images/poul.jpg" alt="poul" width={500} height={500} className="rounded-full" />
            </motion.div>
        </div>
    );
}

export default UpDownAnimation;
