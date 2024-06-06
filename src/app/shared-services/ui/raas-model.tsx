'use client';
import Text, { B1, H2, H3, H5 } from "../../components/text/text";
import { motion, AnimatePresence } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import { HoverComponent } from "../../components/hover/hover";
import { CentralisedSolution, EyeSolution, GrowSolution, PeaceSolution } from "./operations";
import MINUS from '../../../../public/shared-services/minus.svg'
import Image from 'next/image';
import { Icon1 } from "../components/animation-plus-minus";
import MIND from '../../../../public/shared-services/Idea.png'
import GROW from '../../../../public/shared-services/grow.svg'
import SOLUTION from '../../../../public/shared-services/Centralized.png';
import EYE from '../../../../public/shared-services/Eye.png';

import { useState } from "react";

const variantParent = {
    content: {
        backgroundColor: "#002E6D",
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.2
        }
    },
    banner: {
        backgroundColor: "#fff",
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.3
        }
    },

}

const variantChild = {
    content: {
        y: 0,
        opacity: 1
    },
    banner: {
        y: -50,
        opacity: 0
    },
}

export const RaasModelComponent = ({ children }: any) => {
    const [roc, setRoc] = useState({
        roc1: true,
        roc2: true,
        roc3: true,
        roc4: true,
    })
    const STYLE = "flex items-center justify-center shadow-custom rounded-2xl gap-3 h-[7.5em] xl:h-[20em] 2xl:py-40 2xl:h-[25em] 2xl:gap-10 relative cursor-pointer";

    return (
        <section className="
        mt-8 mx-5 
        xl:mx-28  xl:mt-14
        2xl:mx-80 2xl:mt-20
        ">
            <motion.header className="text-left ml-7" variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.4
                    }
                }
            }}>
                <H5 color="text-hpi-blue-light font-medium">Our ROC Model</H5>
                <H2 color="text-gradient leading-[20px] xl:mt-2">FLEXIBLE MODEL FOR REGIONAL OPERATIONS CENTRE</H2>
                <B1 color="text-hpi-blue-dark font-medium mt-3">
                    ROC offers a flexible subscription model enabling terminals to transition to a new
                    operational model in a seamless way.
                </B1>
            </motion.header>

            <section className="grid grid-cols-2 grid-rows-2 justify-center items-center mt-5 gap-1 lg:gap-10 lg:mt-14">
                <motion.div animate={!roc.roc1 ? 'content' : 'banner'} onTap={() => setRoc({ ...roc, roc1: !roc.roc1 })}>
                    <motion.article
                        variants={variantParent}
                        className={STYLE}
                    >
                        <AnimatePresence mode="wait">
                            {
                                !roc.roc1 ?
                                    <motion.div
                                        key="content"
                                        exit={{
                                            y: -50,
                                            opacity: 0,
                                            transition: {
                                                duration: 0.2
                                            }
                                        }}>
                                        <p className="text-[8px] px-1 lg:text-[21px] text-hpi-white text-center">
                                            Plug-and-Play to the standardised and
                                            proven operational practice (SOP) -
                                            uplifting the service level in no time!
                                        </p>
                                    </motion.div>
                                    :
                                    <motion.div
                                        key="banner"
                                        exit={{
                                            opacity: 0,
                                            transition: {
                                                duration: 0.4
                                            }
                                        }}
                                        className="
                                        flex items-center gap-4 px-4
                                        lg:px-10 lg:gap-12
                                        ">
                                        <H3 color="font-bold text-hpi-blue-light xl:w-[40%]">
                                            PEACE OF
                                            MIND
                                        </H3>
                                        <Image src={MIND} alt="Mind Icon" className="
                                            h-[2.5em] w-[3em]
                                            xl:h-[9em] xl:w-[10em]
                                        "/>
                                    </motion.div>
                            }
                        </AnimatePresence>
                        <Icon1 />
                    </motion.article>
                </motion.div>
                <motion.div animate={!roc.roc2 ? 'content' : 'banner'} onTap={() => setRoc({ ...roc, roc2: !roc.roc2 })}>
                    <motion.article
                        variants={variantParent}
                        className={STYLE}
                    >
                        <AnimatePresence mode="wait">
                            {
                                !roc.roc2 ?
                                    <motion.div
                                        key="content"
                                        exit={{
                                            y: -50,
                                            opacity: 0,
                                            transition: {
                                                duration: 0.4
                                            }
                                        }}>
                                        <p className="text-[8px] px-1 lg:text-[21px] text-hpi-white text-center">
                                            A scalable solution that ensures the growth
                                            of your terminal without the burden of
                                            significant upfront investments.
                                        </p>
                                    </motion.div>
                                    :
                                    <motion.div
                                        key="banner"
                                        exit={{
                                            opacity: 0, transition: {
                                                duration: 0.4
                                            }
                                        }}
                                        className="
                                        flex items-center gap-4 px-4
                                        lg:px-10 lg:gap-12
                                        ">
                                        <H3 color="font-bold text-hpi-blue-light xl:w-[60%]">
                                            EXPAND-AS- <br />
                                            YOU-GROW
                                        </H3>
                                        <Image src={GROW} alt="Mind Icon" className="
                                            h-[3em] w-[3.5em]
                                            xl:h-[9em] xl:w-[10em]
                                        "/>
                                    </motion.div>
                            }
                        </AnimatePresence>
                        <Icon1 />
                    </motion.article>
                </motion.div>
                <motion.div animate={!roc.roc3 ? 'content' : 'banner'} onTap={() => setRoc({ ...roc, roc3: !roc.roc3 })}>
                    <motion.article
                        variants={variantParent}
                        className={STYLE}
                    >
                        <AnimatePresence mode="wait">
                            {
                                !roc.roc3 ?
                                    <motion.div
                                        key="content"
                                        exit={{
                                            y: -50,
                                            opacity: 0,
                                            transition: {
                                                duration: 0.4
                                            }
                                        }}>
                                        <p className="text-[8px] px-1 lg:text-[21px] text-hpi-white text-center">
                                            A hassle-free solution! Let ROC do
                                            all the work, while your terminal
                                            focuses on strategy.
                                        </p>
                                    </motion.div>
                                    :
                                    <motion.div
                                        key="banner"
                                        exit={{
                                            opacity: 0,
                                            transition: {
                                                duration: 0.4
                                            }
                                        }}
                                        className="
                                        flex items-center gap-4 px-4
                                        lg:px-10 lg:gap-12
                                        ">
                                        <H3 color="font-bold text-hpi-blue-light">
                                            CENTRALISED <br />
                                            SOLUTION
                                        </H3>
                                        <Image src={SOLUTION} alt="Mind Icon" className="
                                            h-[3em] w-[2.5em]
                                            xl:h-[10em] xl:w-[9em]
                                        "/>
                                    </motion.div>
                            }
                        </AnimatePresence>
                        <Icon1 />
                    </motion.article>
                </motion.div>
                <motion.div animate={!roc.roc4 ? 'content' : 'banner'} onTap={() => setRoc({ ...roc, roc4: !roc.roc4 })}>
                    <motion.article
                        variants={variantParent}
                        className={STYLE}
                    >
                        <AnimatePresence mode="wait">
                            {
                                !roc.roc4 ?
                                    <motion.div
                                        key="content"
                                        exit={{
                                            y: -50,
                                            opacity: 0,
                                            transition: {
                                                duration: 0.4
                                            }
                                        }}>
                                        <p className="text-[8px] px-1 lg:text-[21px] text-hpi-white text-center">
                                            Progress is fully visible to your
                                            terminal, allowing for complete
                                            oversight and transparency
                                        </p>
                                    </motion.div>
                                    :
                                    <motion.div
                                        key="banner"
                                        exit={{
                                            opacity: 0, transition: {
                                                duration: 0.4
                                            }
                                        }}
                                        className="
                                        flex items-center px-4 gap-4
                                        lg:px-10 lg:gap-12
                                        ">
                                        <H3 color="font-bold text-hpi-blue-light">
                                            SEE ALL AND <br />
                                            KNOW ALL
                                        </H3>
                                        <Image src={EYE} alt="Mind Icon" className="
                                            h-[3.5em] w-[2.5em]
                                            xl:h-[10em] xl:w-[9em]
                                        " />
                                    </motion.div>
                            }
                        </AnimatePresence>
                        <Icon1 />
                    </motion.article>
                </motion.div>
            </section>
        </section>
    )
}