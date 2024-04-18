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
                        ROC offers a flexible subscription model enabling terminals to seamlessly transition to a new operational model in a seamless way.
                    </Text>
                </motion.div>
            </header>
            {children}
        </section>
    )
}