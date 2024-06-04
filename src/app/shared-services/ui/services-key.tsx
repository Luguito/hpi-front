'use client';

import Text, { H2, H3 } from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import CountUp from 'react-countup';
import { ComponentName } from "@/app/components/counter/counter";

export const ServicesKeysComponent = () => {
    return (
        <section className="text-center mt-12">
            <H3 color="text-gradient font-bold">
                SHARED SERVICES KEY ACHIEVEMENTS
            </H3>
            <section className="flex flex-col justify-between items-center py-12 text-center gap-4 mt-9">
                <motion.article viewport={{ once: true }} className="
                flex gap-32 justify-between items-center w-[100%] text-hpi-blue-light
                lg:h-44 lg:justify-evenly
                " 
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <ComponentName num={6700} next="" />
                    <div className="text-center">
                        <H3 color="text-hpi-blue-light font-bold">
                            MANAGED VESSELS/YR
                        </H3>
                    </div>
                </motion.article>
                <hr className="border-b-1 w-[90%] border-hpi-grey-light rounded-[80%] opacity-75 lg:border-b-2" />
                <motion.article viewport={{ once: true }} className="
                flex gap-10 items-center justify-between w-[100%] text-hpi-blue-light
                lg:h-44 lg:gap-36 lg:justify-evenly
                " 
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <ComponentName num={8} next="Million" />
                    <div className="
                    text-left pr-7
                    lg:w-1/4
                    ">
                        <H3 color="text-hpi-blue-light font-bold">
                            TEUS/YR
                        </H3>
                    </div>
                </motion.article>
                <hr className="border-b-1 w-[90%] border-hpi-grey-light rounded-[80%] opacity-75 lg:border-b-2" />
                <motion.article viewport={{ once: true }} className="
                flex gap-20 items-center justify-between w-[100%] text-hpi-blue-light
                lg:h-44 lg:justify-evenly
                "
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <ComponentName num={50} next="%" />
                    <div className="
                    text-center 
                    lg:w-[45%] lg:pl-28
                    ">
                        <H3 color="text-hpi-blue-light font-bold">
                            MORE EFFICIENT
                        </H3>
                    </div>
                </motion.article>
            </section>
        </section>
    )
}