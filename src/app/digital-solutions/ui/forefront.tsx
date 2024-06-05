'use client'
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";

// IMAGES
import I from '../../../../public/digital-solutions/HPDX_logo.png'
import I2 from '../../../../public/digital-solutions/DD_logo.png'
import I3 from '../../../../public/digital-solutions/VERONICA_logo.png'
import I4 from '../../../../public/digital-solutions/UBI_logo.png'
import I5 from '../../../../public/digital-solutions/know before it happens.png'
import I6 from '../../../../public/digital-solutions/keep_flow.png'
import I7 from '../../../../public/digital-solutions/truck.png'
import I8 from '../../../../public/digital-solutions/ROSA_logo.png'
import Plus from '../../../../public/automation/plus.svg'

import Arrow from '../../../../public/digital-solutions/arrow-right-direction.svg'
import { Dispatch, SetStateAction, useState } from 'react';
import { RevealFromLeftToRight, RevealTextAfterSection } from '@/app/animations/animation';
import { B2, H2, H3 } from '@/app/components/text/text';
import { Icon1 } from '@/app/shared-services/components/animation-plus-minus';

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

export default function ForeFrontUI() {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < 1) {
            setImgIndex((pv: number) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv: number) => pv - 1);
        }
    };

    return (
        <>
            <header className="text-left ml-7">
                <h3 className='text-hpi-blue-light text-[12px] lg:text-[22px] xl:text-[15px] 2xl:text-[35px]'>
                    Our Strength
                </h3>
                <H2 color="text-gradient">AT THE FOREFRONT OF PORT INNOVATION</H2>
            </header>
            <motion.section className="relative" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    className="flex cursor-grab items-center gap-10 active:cursor-grabbing mt-4"
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}>
                    <section className="
                    grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-11 shrink-0 rounded-xl w-full
                    ">
                        <SectionUI
                            Img={
                                <Image src={I3} alt="" className='2xl:max-w-none' />
                            }
                            title={"ONE TOS, ONE WORLD"}
                            content={
                                `
                                    The 1st global port group to provide a cloud-based
                                    TOS in SaaS model, and to standardise operations
                                    across 30 terminals in 16 countries with our home-
                                    grown TOS (nGen/Veronica).
                                `
                            } />
                        <SectionUI
                            url="https://hpdx.io/"
                            Img={
                                <section className="flex justify-center items-center w-full h-full">
                                    <Image src={I} alt="" />
                                </section>
                            }
                            title={"ONCE-FOR-ALL CONNECTION"}
                            content={
                                `
                                    HPDX offers a single data exchange for connecting
                                    all terminals with the logistics world, including the 
                                    blockchain-based Global Shipping Business
                                    Network (GSBN).
                                `
                            } />
                        <SectionUI
                            Img={
                                <section className="w-full h-full flex justify-center items-center">
                                    <Image src={I8} alt="" height={250} className="" />
                                </section>
                            }
                            title={"OPERATIONS ANYTIME, ANYWHERE"}
                            content={
                                `
                                    Revolutionising remote operations management
                                    with our Remote Operations Services and
                                    Architecture (ROSA), enabling efficient multi-port
                                    management.
                                `
                            } />
                        <SectionUI
                            Img={
                                <section className="flex justify-center items-center w-full h-full px-14 py-10">
                                    <Image src={I7} alt="" className="h-[100%]" />
                                </section>
                            }
                            title={"UNLOCKING EFFICIENCY THROUGH AUTOMATION"}
                            content={
                                `
                                    Our advanced scheduling system optimises the management 
                                    of all types of automation equipment and job scheduling.
                                `
                            } />
                    </section>
                    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-11 shrink-0 rounded-xl w-full ">
                        <SectionUI
                            Img={
                                <section className="flex justify-center items-center w-full h-full">
                                    <Image src={I2} alt="" width={200} />
                                </section>
                            }
                            title={"GO BEYOND PAPERLESS"}
                            content={
                                `
                                Elevate digital communication and process documentation 
                                using DD (Document Digitalisation), our advanced AI application, 
                                for global port operations data processing.
                                `
                            } />
                        <SectionUI
                            Img={
                                <section className="flex justify-center items-center w-full h-full">
                                    <Image src={I6} alt="" />
                                </section>
                            }
                            title={"KEEP-IT-FLOW"}
                            content={
                                `
                                    Our Auto Gate Operating System (AGOS), designed for faster container flow,
                                    boosts container movements and enhances terminal efficiency by 50%.
                                `
                            } />

                        <SectionUI
                            Img={
                                <section className="flex justify-center items-center w-full h-full">
                                    <Image src={I5} alt="" />
                                </section>
                            }
                            title={"KNOW BEFORE IT HAPPENS"}
                            content={
                                `
                                    With our EMULATION technology, you can foresee and optimise operational outcomes.
                                    Ensure efficient refinements across your TOS, Equipment Control System, and Fleet Management System without trial and error.
                                `
                            } />
                        <SectionUI
                            url="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Hutchison%20Port%20ENG%20NM.mp4"
                            Img={
                                <section className="flex justify-center items-center w-full h-full">
                                    <Image src={I4} alt="" />
                                </section>
                            }
                            title={"PORT ACCESSIBILITY"}
                            content={
                                `
                                    Experience unparalleled access to real-time logistics insights and services with Ubi,
                                    the first app to standardise mobile access across our global ports.
                                `
                            } />
                    </section>
                </motion.div>
                {imgIndex === 0 && <>
                    <div className="
                    absolute flex justify-start items-center left-[101%] w-[14.5em] top-[1%] cursor-pointer bg-hpi-light-bg 
                    xl:h-[67em] 2xl:h-[86em]
                    ">
                        <Image src={Arrow} alt="" onClick={() => setImgIndex(1)} />
                    </div>
                </>}
                {imgIndex === 1 && <>
                    <div className="
                    absolute rotate-180 flex justify-start items-center w-[15.5em] top-[3%] cursor-pointer bg-hpi-light-bg 
                    xl:h-[68em] xl:left-[-19.5%]
                    2xl:h-[84em] 2xl:left-[-16%]
                    ">
                        <Image src={Arrow} alt="" onClick={() => setImgIndex(0)} />
                    </div>
                </>}
            </motion.section>
        </>
    )
}

const SectionUI = ({ Img, title, content, url }: any) => {

    function redirect() {
        if (!url) return;

        let redirectNode = document.createElement('a');

        redirectNode.href = url;
        redirectNode.target = "_blank";
        redirectNode.rel = "noopener noreferrer";

        redirectNode.click();
    }

    return (
        <motion.section
            className="flex flex-col bg-hpi-white gap-4 rounded-[3.5rem] xl:h-[30em] 2xl:h-[40em] shadow-lg relative"
            whileHover={{ scale: 1.04 }}
        >
            <article className="w-full h-[55%]">
                {Img}
            </article>
            <article className="flex flex-col px-14 h-[35%]">
                <p className='text-hpi-blue-dark font-bold text-[12px] lg:text-[22px] xl:text-[22px] 2xl:text-[35px] '>
                    {title}
                </p>
                <p className="text-hpi-body-grey font-medium mt-5 text-[8px] xl:text-[15px] 2xl:text-[21px]">
                    {content}
                </p>
            </article>
            {
                url &&
                <article onClick={redirect} className="absolute right-10 bottom-5">
                    <Image src={Plus} alt="" className="w-5 xl:w-10 2xl:w-auto" />
                </article>
            }
        </motion.section>
    )
}