'use client';
import Text, { B1, H2, H3 } from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import { HoverComponent } from "../../components/hover/hover";
import { CentralisedSolution, EyeSolution, GrowSolution, PeaceSolution } from "./operations";
import MINUS from '../../../../public/shared-services/minus.svg'
import Image from 'next/image';

export const RaasModelComponent = ({ children }: any) => {
    const STYLE = "flex flex-col items-center justify-center shadow-custom rounded-2xl gap-10 py-40 h-72 bg-hpi-blue-dark relative"
    return (
        <section className="snap-center mt-8 mx-80">
            <header className="text-left">
                <H3 color="text-hpi-blue-light font-medium">Flexible Model</H3>
                <H2 color="text-gradient">OUR REGIONAL OPERATIONS CENTRE (ROC)</H2>
                <B1 color="text-hpi-blue-dark font-medium">
                    ROC offers a flexible subscription model enabling terminals to transition to a new <br />
                    operational model in a seamless way.
                </B1>
            </header>
            <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-14">
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                            className={STYLE}>
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                Plug-and-Play to the standardised and <br />
                                proven operational practice (SOP) - <br />
                                uplifting the service level in no time! <br />
                            </p>
                            <Image src={MINUS} alt="" className="absolute bottom-5 right-5" />
                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <PeaceSolution />
                    </motion.div>
                </HoverComponent>
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                            className={STYLE}>
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                A scalable solution that ensures the growth
                                of your terminal without the burden of
                                significant upfront investments.
                            </p>
                            <Image src={MINUS} alt="" className="absolute bottom-5 right-5" />

                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <GrowSolution />
                    </motion.div>
                </HoverComponent>
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                            className={STYLE}>
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                A hassle-free solution! Let ROC do <br />
                                all the work, while your terminal <br />
                                focuses on strategy.
                            </p>
                            <Image src={MINUS} alt="" className="absolute bottom-5 right-5" />

                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <CentralisedSolution />
                    </motion.div>
                </HoverComponent>
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
                            className={STYLE}>
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                Progress is fully visible to your <br />
                                terminal, allowing for complete <br />
                                oversight and transparency
                            </p>
                            <Image src={MINUS} alt="" className="absolute bottom-5 right-5" />
                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <EyeSolution />
                    </motion.div>
                </HoverComponent>
            </section>
        </section>
    )
}