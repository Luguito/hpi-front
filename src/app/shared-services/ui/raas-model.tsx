'use client';
import Text from "../../components/text/text";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '@/app/animations/animation';
import { HoverComponent } from "../../components/hover/hover";
import { CentralisedSolution, EyeSolution, GrowSolution, PeaceSolution } from "./operations";

export const RaasModelComponent = ({ children }: any) => {
    return (
        <section className="snap-center mt-64">
            <header className="text-center">
                <motion.p className="text-hpi-blue-light text-[16px]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    Flexible Model
                </motion.p>
                <motion.div initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-[30px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        OUR REGIONAL OPERATIONS CENTRE (ROC)
                    </Text>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="medium" classes="text-[18px] text-hpi-blue-dark mt-6">
                        ROC offers a flexible subscription model enabling terminals to transition to a new operational model in a seamless way.
                    </Text>
                </motion.div>
            </header>
            <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-14 mx-96">
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} 
                        className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64 bg-hpi-blue-dark">
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                Plug-and-Play to the standardised and <br />
                                proven operational practice (SOP) - <br />
                                uplifting the service level in no time! <br />
                            </p>
                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <PeaceSolution />
                    </motion.div>
                </HoverComponent>
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}  
                        className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64 bg-hpi-blue-dark">
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                A scalable solution that ensures the growth
                                of your terminal without the burden of
                                significant upfront investments.
                            </p>
                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <GrowSolution />
                    </motion.div>
                </HoverComponent>
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}  
                        className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64 bg-hpi-blue-dark">
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                A hassle-free solution! Let ROC do <br />
                                all the work, while your terminal <br />
                                focuses on strategy.
                            </p>
                        </motion.article>
                    }>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
                        <CentralisedSolution />
                    </motion.div>
                </HoverComponent>
                <HoverComponent
                    mouseEnterComponent={
                        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}  
                        className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64 bg-hpi-blue-dark">
                            <p className="text-[16px] text-hpi-white text-center w-3/5">
                                Progress is fully visible to your <br />
                                terminal, allowing for complete <br />
                                oversight and transparency
                            </p>
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