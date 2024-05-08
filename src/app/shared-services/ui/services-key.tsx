'use client';

import Text from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import CountUp from 'react-countup';

export const ServicesKeysComponent = () => {
    return (
        <section className="text-center mt-5 mb-20 snap-center">
            <motion.header className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text"
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <Text type="bold" classes="text-[20px]">
                    SHARED SERVICES KEY ACHIEVEMENTS
                </Text>
            </motion.header>

            <section className="flex justify-between mx-96 py-12 text-center gap-4 mt-9">
                <motion.article className="flex flex-col items-center justify-center bg-hpi-celeste w-2/6 rounded-3xl h-44" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-hpi-blue-light text-[40px]">
                        {/* <CountUp start={0} end={6700} delay={5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp> */}
                    </Text>
                    <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                        Managed Vessels/yr
                    </Text>
                </motion.article>
                <motion.article className="flex flex-col items-center justify-center bg-hpi-celeste w-2/6 rounded-3xl h-44" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-hpi-blue-light text-[40px] flex">
                        {/* <CountUp start={0} end={8} delay={5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>Million */}
                    </Text>
                    <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                        TEUs/yr
                    </Text>
                </motion.article>
                <motion.article className="flex flex-col items-center justify-center bg-hpi-celeste w-2/6 rounded-3xl h-44" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-hpi-blue-light text-[40px] flex">
                        {/* <CountUp start={0} end={50} delay={5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>% */}
                    </Text>
                    <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                        More Efficient
                    </Text>
                </motion.article>
            </section>
        </section>
    )
}