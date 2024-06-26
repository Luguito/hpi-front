'use client';

import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import Text, { B1, B2, H2, H3, H5 } from '../../components/text/text';
import { motion, useMotionValue } from 'framer-motion'
import { RevealSectionInitial, RevealTextAfterSection } from "@/app/animations/animation";
import Arrow from '../../../../public/digital-solutions/arrow-right-direction.svg'
import { StorageVideosClientWithoutPoster } from "@/app/components/getImage/client-videos";

const RosaComponent = () => {
    return (
        <motion.section className="
        bg-hpi-white rounded-3xl flex flex-col  shrink-0 justify-between items-center gap-4 p-5 
        lg:gap-10 lg:p-16
        xl:w-[100%]
        2xl:w-[100%]
        " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col">
                <H3 color="text-hpi-blue-light font-bold leading-[20px] xl:leading-[40px]">
                    REMOTE OPERATIONS
                    SERVICES AND ARCHITECTURE
                    (ROSA)
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-3 xl:mt-5 2xl:mt-10">
                    ROSA brings terminal operations into the digital age,
                    enabling end-to-end remote management of multiple
                    terminals with real-time transparency. This technology
                    simplifies complex operations, making them more
                    efficient and competitive.
                </B2>
            </section>
            <article className="py-5 lg:py-12 rounded-3xl flex justify-center">
                <StorageVideosClientWithoutPoster className="max-w-none w-[70%]" name="videos/hpi-assets_ROSA_gif.mp4" />
            </article>
        </motion.section>
    )
}

const DDComponent = () => {
    return (
        <motion.section className="
        bg-hpi-white rounded-3xl flex flex-col shrink-0 justify-between items-center gap-4 p-5 
        lg:gap-10 lg:p-16
        xl:w-[100%]
        2xl:w-[100%]
        " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col justify-between">
                <H3 color="text-hpi-blue-light font-bold leading-[20px] lg:leading-[45px] xl:leading-[40px]">
                    AUTOMATING ORDER PROCESSING WITH DOCUMENT DIGITALISATION (DD) {"&"} HUTCHISON PORT DATA EXCHANGE (HPDX)
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-2 xl:mt-5 2xl:mt-10">
                    With DD - the <strong>AI-driven platform</strong>, we simplify document handling by standardising and automating the classification and digitalisation of key information from emails, making processes faster without human intervention.
                </B2>
                <B2 color="text-hpi-body-grey font-medium mt-2 xl:mt-5 2xl:mt-10">
                    With HPDX, we connect ROC to the global logistics community to support <strong>real-time data exchange</strong> via various industry standards: EDI, API, and GSBN logistic network.
                </B2>
            </section>
            <article className="lg:py-12 rounded-3xl flex justify-center">
                <StorageVideosClientWithoutPoster className="max-w-none w-[75%] h-[30%]" name="videos/hpi-assets_DD V2.mp4" />
            </article>
        </motion.section>
    )
}

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const DRAG_BUFFER = 50;
export const InnovativeSection = () => {
    const [ind, setIndex] = useState(0);
    const dragX = useMotionValue(0);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && ind < 1) {
            setIndex((pv: number) => pv + 1);
        } else if (x >= DRAG_BUFFER && ind > 0) {
            setIndex((pv: number) => pv - 1);
        }
    };

    return (
        <motion.section className="
        mx-5
        xl:mx-28 xl:mt-14
        2xl:mx-44
        " initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <header className="text-left ml-2 md:ml-7 xl:mb-10">
                <H5 color="text-hpi-blue-light font-medium">
                    Our Technologies
                </H5>
                <H2 color="text-gradient mt-1 xl:mt-2">INNOVATIVE TECHNOLOGIES BEHIND ROC</H2>
                <B1 color="text-hpi-blue-dark font-medium mt-3 xl:mt-5">
                    Two groundbreaking technologies reinforce ROC{'’'}s backbone, pushing the boundaries of
                    terminal operations and redefining the shipping industry{'’'}s standards.
                </B1>
            </header>

            <motion.section className="relative" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    transition={SPRING_OPTIONS}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${ind * 100}%`,
                    }}
                    onDragEnd={onDragEnd}
                    className="flex flex-col items-center gap-5 lg:gap-10 lg:flex-row lg:cursor-grab  lg:active:cursor-grabbing mt-10">
                    <RosaComponent />
                    <DDComponent />
                </motion.div>
                {ind === 0 && <>
                    <div className="hidden absolute md:flex justify-start items-center left-[103%] w-[18.5em] top-[0%] cursor-pointer bg-hpi-light-bg xl:h-[66em] 2xl:h-[84em]">
                        <Image src={Arrow} alt="" onClick={() => setIndex(1)} />
                    </div>
                </>}
                {ind === 1 && <>
                    <div className="hidden absolute rotate-180 md:flex justify-start items-center left-[-26%] top-[0%] cursor-pointer bg-hpi-light-bg xl:w-[20.5em] xl:h-[67em] 2xl:h-[82em] 2xl:w-[21.5em] ">
                        <Image src={Arrow} alt="" onClick={() => setIndex(0)} />
                    </div>
                </>}
            </motion.section>
        </motion.section>
    )
}