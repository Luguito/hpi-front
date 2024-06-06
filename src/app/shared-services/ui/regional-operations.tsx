'use client'
import ROC1 from '../../../../public/shared-services/ROC 1.png'
import ROC2 from '../../../../public/shared-services/ROC 2.png'
import ROC3 from '../../../../public/shared-services/ROC 3.png'
import ROC4 from '../../../../public/shared-services/ROC 4.png'
import ROC5 from '../../../../public/shared-services/ROC 5.png'

import { motion } from 'framer-motion';
import Text, { B2, H2, H3, H5 } from '../../components/text/text';
import Image from 'next/image';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';


// ITS WORKING THIS STAGGER
const variantParent = {
    hidden: {
        opacity: 0,
        y: 30,
        transition: {
            staggerChildren: 0.3,
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            // delay - antes de la reunion
            staggerChildren: 0.3,
        }
    }
}
//  espacios entre secciones - laptop

export const Regional = () => {
    return (
        <section className="
        mt-7 
        xl:mx-28 xl:mt-16
        2xl:mb-32 2xl:mx-80 2xl:mt-40
        ">
            <motion.header className="text-left ml-7" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={variantParent}>
                <H5 color="text-hpi-blue-light font-medium">Our Framework</H5>
                <H2 color="text-gradient">
                    REGIONAL OPERATIONS CENTRE AND <br />
                    NATIONAL OPERATIONS CENTRE
                </H2>
            </motion.header>
            <section className="bg-hpi-white mx-5 rounded-3xl p-8 mt-4 
            lg:mt-8 
            xl:px-10 xl:py-14 xl:mx-0
            2xl:p-20
            ">
                <B2 initial="hidden" whileInView="visible" viewport={{ once: true }}
                    color="font-medium text-hpi-body-grey">
                    Our <b>Regional Operations Centre (ROC)</b> embodies our commitment to global collaboration and standardised, high-quality services.
                    The centre was empowered by a state-of-the-art TOS to ensure consistent services to be delivered to any terminal worldwide.
                    Our <b>National Operations Centre (NOC)</b> is a spin-off of ROC, but in a country-level scale.
                    With the same DNA of ROC, NOC consolidates all operational planning, control and back-office functions to all Hutchison Ports terminals
                </B2>
                <motion.section className="flex flex-col justify-center items-center mt-5 lg:mt-12"
                    initial="hidden" whileInView="visible" variants={variantParent} viewport={{ once: true }}>
                    <motion.article variants={variantParent}>
                        <Image src={ROC1} alt="Image"
                            style={{ aspectRatio: "15/4" }}
                            className="
                            object-contain
                        "/>
                    </motion.article>
                    <motion.section className="flex gap-10">
                        <motion.article variants={variantParent}>
                            <Image src={ROC2} alt="Image"
                                className="
                                object-contain
                            "
                            />
                        </motion.article>
                        <motion.article variants={variantParent}>
                            <Image src={ROC3} alt="Image"
                                className="
                                object-contain
                            "/>
                        </motion.article>
                        <motion.article variants={variantParent}>
                            <Image src={ROC4} alt="Image"
                                className="
                                object-contain
                            "/>
                        </motion.article>
                    </motion.section>
                    <motion.div className='flex justify-center' variants={RevealTextAfterSection}>
                        <Image src={ROC5} alt="Image"
                            className="
                            object-contain
                        "/>
                    </motion.div>
                </motion.section>
            </section>
        </section>
    )
}