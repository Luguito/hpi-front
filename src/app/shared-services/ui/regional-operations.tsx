'use client'
import ROC1 from '../../../../public/shared-services/ROC 1.png'
import ROC2 from '../../../../public/shared-services/ROC 2.png'
import ROC3 from '../../../../public/shared-services/ROC 3.png'
import ROC4 from '../../../../public/shared-services/ROC 4.png'
import ROC5 from '../../../../public/shared-services/ROC 5.png'

import { motion } from 'framer-motion';
import Text, { B2, H2, H3 } from '../../components/text/text';
import Image from 'next/image';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';

export const Regional = () => {
    return (
        <section className="mt-40 mb-32 mx-80">
            <header className="text-left">
                <H3 color="text-hpi-blue-light font-medium">Our Framework</H3>
                <H2 color="text-gradient">
                    REGIONAL OPERATIONS CENTRE AND <br />
                    NATIONAL OPERATIONS CENTRE
                </H2>
            </header>
            <section className="bg-hpi-white p-20 rounded-3xl mt-8">
                <B2 color="font-normal text-hpi-body-grey">
                    Our <b>Regional Operations Centre (ROC)</b> embodies our commitment to global collaboration and standardised, high-quality services.
                    The centre was empowered by a state-of-the-art TOS to ensure consistent services to be delivered to any terminal worldwide.
                    Our <b>National Operations Centre (NOC)</b> is a spin-off of ROC, but in a country-level scale.
                    With the same DNA of ROC, NOC consolidates all operational planning, control and back-office functions to all Hutchison Ports terminals
                </B2>
                <section className="flex flex-col justify-center items-center mt-12">
                    <motion.article initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                        <Image src={ROC1} alt="Image" width={1150} />
                    </motion.article>
                    {/* @ts-ignore */}
                    <motion.section className="flex gap-10" initial="hidden" whileInView="visible" variants={{ ...RevealTextAfterSection, transition: { ...RevealTextAfterSection.visible.transition, delay: .4 } }}>
                        <motion.article initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                            <Image src={ROC2} alt="Image" width={355} />
                        </motion.article>
                        <motion.article initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                            <Image src={ROC3} alt="Image" width={355} />
                        </motion.article>
                        <motion.article initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                            <Image src={ROC4} alt="Image" width={355} />
                        </motion.article>
                    </motion.section>
                </section>
                <motion.footer className='flex justify-center mt-5' initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Image src={ROC5} alt="Image" width={1150} />
                </motion.footer>
            </section>
        </section>
    )
}