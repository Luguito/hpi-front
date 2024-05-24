'use client';
import Text, { B1, H2, H3, H5} from "../../components/text/text";
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
    const STYLE = "flex items-center justify-center shadow-custom rounded-2xl gap-10 py-40 h-72 relative cursor-pointer";

    return (
        <section className="snap-center mt-8 mx-80">
            <motion.header className="text-left ml-7" variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.4
                    }
                }
            }}>
                <H5 color="text-hpi-blue-light font-medium">Flexible Model</H5>
                <H2 color="text-gradient">OUR REGIONAL OPERATIONS CENTRE (ROC)</H2>
                <B1 color="text-hpi-blue-dark font-medium mt-3">
                    ROC offers a flexible subscription model enabling terminals to transition to a new <br />
                    operational model in a seamless way.
                </B1>
            </motion.header>

            <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-14">
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
                                            {/* 21 */}
                                        <p className="text-[21px] text-hpi-white text-center">
                                            Plug-and-Play to the standardised and <br />
                                            proven operational practice (SOP) - <br />
                                            uplifting the service level in no time! <br />
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
                                        className="flex items-center gap-12 px-10">
                                        <H3 color="font-bold text-hpi-blue-light">
                                            PEACE OF <br />
                                            MIND
                                        </H3>
                                        <Image src={MIND} alt="Mind Icon" height={200} />
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
                                        <p className="text-[21px] text-hpi-white text-center">
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
                                        className="flex items-center gap-12 px-10">
                                        <H3 color="font-bold text-hpi-blue-light">
                                            EXPAND-AS- <br />
                                            YOU-GROW
                                        </H3>
                                        <Image src={GROW} alt="Mind Icon" height={200} />
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
                                        <p className="text-[21px] text-hpi-white text-center">
                                            A hassle-free solution! Let ROC do <br />
                                            all the work, while your terminal <br />
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
                                        className="flex items-center gap-12 px-10">
                                        <H3 color="font-bold text-hpi-blue-light">
                                            CENTRALISED <br />
                                            SOLUTION
                                        </H3>
                                        <Image src={SOLUTION} alt="Mind Icon" height={200} />
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
                                        <p className="text-[21px] text-hpi-white text-center">
                                            Progress is fully visible to your <br />
                                            terminal, allowing for complete <br />
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
                                        className="flex items-center gap-12 px-10">
                                        <H3 color="font-bold text-hpi-blue-light">
                                            SEE ALL AND <br />
                                            KNOW ALL
                                        </H3>
                                        <Image src={EYE} alt="Mind Icon" height={200} />
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