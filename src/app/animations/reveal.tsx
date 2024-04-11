'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const RevealOnScrollComponent = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <motion.section {...props} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: {
                opacity: 0, y: 50
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: .4
                }
            },
        }}>
            {children}
        </motion.section>
    )
}