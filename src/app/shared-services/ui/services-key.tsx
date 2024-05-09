'use client';

import Text, { H2, H3 } from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import CountUp from 'react-countup';

export const ServicesKeysComponent = () => {
    return (
        <section className="text-center mt-5">
            <H2 color="text-hpi-blue-dark">
                SHARED SERVICES KEY ACHIEVEMENTS
            </H2>
            <section className="flex flex-col justify-between items-center py-12 text-center gap-4 mt-9">
                <motion.article viewport={{ once: true }} className="flex justify-between gap-10 items-center h-44" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <CountUp start={0} end={6700} delay={5}>
                        {({ countUpRef }) => (
                            // @ts-ignore
                            <p className="text-hpi-blue-light text-[80px] font-extrabold" ref={countUpRef} ></p>
                        )}
                    </CountUp>
                    <H3 color="text-hpi-blue-light font-bold">
                        Managed Vessels/yr
                    </H3>
                </motion.article>
                <hr />
                <motion.article viewport={{ once: true }} className="flex justify-between gap-10 items-center h-44" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <CountUp start={0} end={8} delay={5}>
                        {({ countUpRef }) => (
                            <>
                                {/* @ts-ignore */}
                                <p className="text-hpi-blue-light text-[80px] font-extrabold">
                                    <span ref={countUpRef}></span>
                                    Million
                                </p>
                            </>
                        )}
                    </CountUp>
                    <H3 color="text-hpi-blue-light font-bold">
                        TEUs/yr
                    </H3>
                </motion.article>
                <hr />
                <motion.article viewport={{ once: true }} className="flex justify-between gap-10 items-center h-44" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <CountUp start={0} end={50} delay={5}>
                        {({ countUpRef }) => (
                            <>
                                {/* @ts-ignore */}
                                <p className="text-hpi-blue-light text-[80px] font-extrabold">
                                    <span ref={countUpRef}></span>
                                    %
                                </p>
                            </>
                        )}
                    </CountUp>
                    <H3 color="text-hpi-blue-light font-bold">
                        More Efficient
                    </H3>
                </motion.article>
            </section>
        </section>
    )
}