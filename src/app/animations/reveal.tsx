'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { RevealSectionInitial } from './animation';

export const RevealOnScrollComponent = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <motion.section {...props} initial="hidden" whileInView="visible" variants={RevealSectionInitial} viewport={{ once: true }}>
            {children}
        </motion.section>
    )
}