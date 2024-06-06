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
            <section className="flex flex-col justify-between items-center py-8 text-center gap-4 mt-9">
                <motion.article viewport={{ once: true }} className="
                flex gap-32 justify-between items-center w-[100%] text-hpi-blue-light
                lg:justify-evenly
                xl:h-12
                2xl:h-44 
                " 
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <ComponentName num={6700} next="" />
                    <div className="text-center">
                        <p className="text-hpi-blue-light font-bold text-[16px] lg:text-[22px] 2xl:text-[35px]">
                            MANAGED VESSELS/YR
                        </p>
                    </div>
                </motion.article>
                <hr className="border-b-1 w-[90%] border-hpi-grey-light rounded-[80%] opacity-75 lg:border-b-2" />
                <motion.article viewport={{ once: true }} className="
                flex gap-10 items-center justify-between w-[100%] text-hpi-blue-light
                lg:gap-36 lg:justify-evenly
                xl:h-16
                2xl:h-44 
                " 
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <ComponentName num={8} next="Million" />
                    <div className="
                    text-left pr-7
                    lg:w-1/4 xl:pl-12
                    2xl:pl-0
                    ">
                        <p className="text-hpi-blue-light font-bold text-[16px] lg:text-[22px] 2xl:text-[35px]">
                            TEUS/YR
                        </p>
                    </div>
                </motion.article>
                <hr className="border-b-1 w-[90%] border-hpi-grey-light rounded-[80%] opacity-75 lg:border-b-2" />
                <motion.article viewport={{ once: true }} className="
                flex gap-20 items-center justify-between w-[100%] text-hpi-blue-light
                lg:justify-evenly
                xl:h-12 xl:gap-0
                2xl:h-44 
                "
                initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <ComponentName num={50} next="%" />
                    <div className="
                    text-center 
                    lg:w-[45%] lg:pl-28
                    xl:w-[38%] xl:pl-36
                    2xl:w-[50%] 2xl:pl-48
                    ">
                        <p className="text-hpi-blue-light font-bold text-[16px] lg:text-[22px] 2xl:text-[35px]">
                            MORE EFFICIENT
                        </p>
                    </div>
                </motion.article>
            </section>
        </section>
    )
}