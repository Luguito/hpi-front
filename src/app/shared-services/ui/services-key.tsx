'use client';

import Text from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';

export const ServicesKeysComponent = () => {
    return (
        <section className="text-center mt-20 mb-32 snap-center">
            <motion.header className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text"
            initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <Text type="bold" classes="text-[20px]">
                    SHARE SERVICES KEY ACHIEVEMENTS
                </Text>
            </motion.header>

            <section className="flex justify-between bg-hpi-celeste mx-96 px-40 py-12 rounded-3xl text-center mt-9">
                <motion.article className="flex flex-col items-center" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-hpi-blue-light text-[40px]">
                        6,700
                    </Text>
                    <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                        Managed Vessels/yr
                    </Text>
                </motion.article>
                <motion.article className="flex flex-col items-center" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-hpi-blue-light text-[40px]">
                        8Million
                    </Text>
                    <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                        TEUs/yr
                    </Text>
                </motion.article>
                <motion.article className="flex flex-col items-center" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-hpi-blue-light text-[40px]">
                        50%
                    </Text>
                    <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                        More Efficient
                    </Text>
                </motion.article>
            </section>
        </section>
    )
}