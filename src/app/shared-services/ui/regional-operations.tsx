'use client'
import ROC1 from '../../../../public/shared-services/ROC 1.png'
import ROC2 from '../../../../public/shared-services/ROC 2.png'
import ROC3 from '../../../../public/shared-services/ROC 3.png'
import ROC4 from '../../../../public/shared-services/ROC 4.png'

import { motion } from 'framer-motion';
import Text from '../../components/text/text';
import Image from 'next/image';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';

export const Regional = () => {
    return (
        <section className="my-40 snap-start">
            <header className="text-center">
                <motion.span className="text-hpi-blue-light text-[16px] mb-4" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    Our Framework
                </motion.span>
                <motion.div initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-[30px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        REGIONAL OPERATIONS CENTRE AND <br />
                        NATIONAL OPERATIONS CENTRE
                    </Text>
                </motion.div>
            </header>
            <section className="flex flex-col justify-center items-center mt-12">
                <motion.article initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Image src={ROC1} alt="Image" width={1200} />
                </motion.article>
                {/* @ts-ignore */}
                <motion.section className="flex gap-10" initial="hidden" whileInView="visible" variants={{ ...RevealTextAfterSection, transition: { ...RevealTextAfterSection.visible.transition, delay: .4 } }}>
                    <motion.article initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                        <Image src={ROC2} alt="Image" width={350} />
                    </motion.article>
                    <motion.article initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                        <Image src={ROC3} alt="Image" width={350} />
                    </motion.article>
                    <motion.article initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                        <Image src={ROC4} alt="Image" width={350} />
                    </motion.article>
                </motion.section>
            </section>
            <footer className="mt-10 text-center px-52 snap-center">
                <motion.p className="text-[20px] text-hpi-blue-dark font-medium" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    Localized Execution {'&'} Monitoring
                </motion.p>
                <motion.p className="text-[16px] text-[#494949] mt-12" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    Our Regional Operations Centre (ROC) embodies our commitment to global <br />
                    collaboration and standardised, high-quality services. The centre was empowered by <br />
                    a state-of-the-art TOS to ensure consistent services to be delivered to any terminal worldwide.
                </motion.p>
                <motion.p className="text-[16px] text-[#494949] mt-12" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    Our National Operations Centre (NOC) is a spin-off of ROC, but in a country-level scale. <br />
                    With the same DNA of ROC, NOC consolidates all operational planning, <br />
                    control and back-office functions to all Hutchison Ports terminals
                </motion.p>
            </footer>
        </section>
    )
}