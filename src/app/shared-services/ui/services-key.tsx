'use client';

import Text, { H2, H3 } from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import CountUp from 'react-countup';
import { Counter } from "@/app/components/counter/counter";

export const ServicesKeysComponent = () => {
    return (
        <section className="text-center mt-5">
            <H2 color="text-hpi-blue-dark">
                SHARED SERVICES KEY ACHIEVEMENTS
            </H2>
            <section className="flex flex-col justify-between items-center py-12 text-center gap-4 mt-9">
                <motion.article viewport={{ once: true }} className="flex gap-20 justify-evenly items-center h-44 w-[100%]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <CountUp start={0} end={6700} delay={2}>
                        {({ countUpRef }) => (
                            // @ts-ignore
                            <p className="text-hpi-blue-light text-[80px] font-extrabold" ref={countUpRef} ></p>
                        )}
                    </CountUp>
                    <div className="text-center">
                        <H3 color="text-hpi-blue-light font-bold">
                            Managed Vessels/yr
                        </H3>
                    </div>
                </motion.article>
                <hr className="border-b-2 w-[90%] border-hpi-grey-light rounded-[80%] opacity-75" />
                <motion.article viewport={{ once: true }} className="flex gap-36 items-center justify-evenly h-44 w-[100%]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
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
                    <div className="text-left w-1/4">
                        <H3 color="text-hpi-blue-light font-bold">
                            TEUs/yr
                        </H3>
                    </div>
                </motion.article>
                <hr className="border-b-2 w-[90%] border-hpi-grey-light rounded-[80%] opacity-75" />
                <motion.article viewport={{ once: true }} className="flex gap-20 items-center  justify-evenly h-44 w-[100%]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
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
                    <div className="text-center w-1/4">
                        <H3 color="text-hpi-blue-light font-bold">
                            More Efficient
                        </H3>
                    </div>
                </motion.article>
            </section>
        </section>
    )
}