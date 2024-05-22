'use client'
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";

// IMAGES
import I from '../../../../public/digital-solutions/HPDX_logo.svg'
import I2 from '../../../../public/digital-solutions/DD_logo.png'
import I3 from '../../../../public/digital-solutions/VERONICA_LOGO.png'
import I4 from '../../../../public/digital-solutions/UBI_logo.png'
import I5 from '../../../../public/digital-solutions/blueprint.png'
import I6 from '../../../../public/digital-solutions/parking.png'
import I7 from '../../../../public/digital-solutions/truck.png'
import I8 from '../../../../public/digital-solutions/ROSA_logo.png'
import Arrow from '../../../../public/digital-solutions/arrow-right-direction.svg'
import { Dispatch, SetStateAction, useState } from 'react';
import { RevealFromLeftToRight, RevealTextAfterSection } from '@/app/animations/animation';
import { B2, H2, H3 } from '@/app/components/text/text';

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
                <H3 color="text-hpi-blue-light">Our Solutions</H3>
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
                    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-11 shrink-0 rounded-xl w-full">
                        <SectionUI
                            Img={
                                <Image src={I3} alt="" className='max-w-none' />
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
                            Img={
                                <Image src={I} alt="" height={200} />
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
                                <Image src={I8} alt="" height={250} />
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
                                <Image src={I7} alt="" height={400} />
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
                                <Image src={I2} alt="" width={200} />
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
                                <Image src={I6} alt="" className='max-w-none' height={200} />
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
                                <Image src={I5} alt=""  />
                            }
                            title={"KNOW BEFORE IT HAPPENS"}
                            content={
                                `
                                    With our EMULATION technology, you can foresee and optimise operational outcomes.
                                    Ensure efficient refinements across your TOS, Equipment Control System, and Fleet Management System without trial and error.
                                `
                            } />
                        <SectionUI
                            Img={
                                <Image src={I4} alt="" />
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
                <div className="absolute flex justify-start inset-0 items-center left-[105%] w-[14.5em] top-[3%] cursor-pointer bg-gradient-to-l from-hpi-light-bg via-hpi-light-bg to-hpi-light-bg h-[80em]">
                    <Image src={Arrow} alt="" onClick={() => setImgIndex(1)} />
                </div>
                <div className="absolute rotate-180 flex justify-start items-center left-[-15%] w-[14.5em] top-[3%] cursor-pointer bg-gradient-to-r from-transparent via-hpi-light-bg to-hpi-light-bg h-[80em]">
                    <Image src={Arrow} alt="" onClick={() => setImgIndex(0)} />
                </div>
            </motion.section>
        </>
    )
} 

const SectionUI = ({ Img, title, content }: any) => {
    return (
        <motion.section
            className="flex flex-col justify-evenly bg-hpi-white gap-4 rounded-3xl px-14 py-8 h-[38.5em] shadow-lg"
            whileHover={{ scale: 1.04 }}
        >
            <article className="flex justify-center items-center w-full h-2/4">
                {Img}
            </article>
            <article className="flex flex-col">
                <H3 color="text-hpi-blue-dark font-bold">
                    {title}
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-5">
                    {content}
                </B2>
            </article>
        </motion.section>
    )
}