
'use client'

import React, { useState } from "react"
import Text, { B2, H1, H2, H3, H5 } from "../text/text";
import AutomationImage from '../../../../public/home/Automation.png'
import SharedImage from '../../../../public/home/imagen home-02.png'
import DigitalImage from '../../../../public/home/imagen home-03.png'
import Minus from '../../../../public/home/minus.svg'
import Plus from '../../../../public/home/plus.svg'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { RevealSectionInitial } from "@/app/animations/animation";

export const TechSolutionsComponent = () => {
    const [currentSection, setSection] = useState('automation');
    const sections: Record<string, any> = {
        'automation': AutomationSection,
        'shared-services': SharedSection,
        'digital-solutions': DigitalSection,
    }

    const CurrentSection = sections[currentSection];

    const checkDetails = (node: any) => {
        node.preventDefault();

        const detailsNode = document.querySelectorAll('details');
        let parent = foundDetails(node.target);

        detailsNode.forEach((node, i) => {
            if (node === parent) {
                node.setAttribute('open', 'true')
            } else {
                node.removeAttribute('open')
            }
        })
    }
    // @ts-ignore
    const foundDetails = (node: any) => {
        if (node.nodeName !== "DETAILS") return foundDetails(node.parentElement);

        return node;
    }

    return (
        <motion.section className="
            xs:mt-2 
            md:mt-20 
            lg:mt-32 
            w-[80%]"
            initial="hidden" whileInView="visible" variants={RevealSectionInitial} viewport={{ once: true }}>
            <header className="text-left py-12
            xs:py-5">
                <H5 color="text-hpi-blue-light font-medium">
                    Port Innovation
                </H5>
                <H2 color="text-gradient font-bold">
                    TECHNOLOGICAL SOLUTIONS
                </H2>
            </header>
            <section className="
                bg-white shadow-lg flex justify-between 
                xs:rounded-2xl xs:gap-5 xs:p-4
                md:px-24 md:py-20 md:rounded-3xl
            ">
                <nav className="flex flex-col gap-4 w-[30em]">
                    <details onClick={checkDetails} open>
                        <summary className="flex justify-between cursor-pointer" onClick={() => setSection('automation')}>
                            <H3 color={`${currentSection === 'automation' ? 'text-hpi-blue-light' : 'text-hpi-grey-light'} font-bold`}>
                                AUTOMATION
                            </H3>
                            {
                                currentSection === 'automation'
                                    ?

                                    <Image src={Minus} alt="" className="xs:w-3" />
                                    :
                                    <Image src={Plus} alt="" className="xs:w-3" />
                            }
                        </summary>
                        <AnimatePresence>
                            <B2 color="text-hpi-body-grey font-medium xs:text-hpi-grey-dark" exit={{ y: 20, opacity: 0 }}>
                                Implementing AI and automation
                                technologies, we elevate terminal
                                productivity, safety, and quality through
                                optimised scheduling, autonomous
                                operations, and gate automation, leading
                                to operational excellence.
                            </B2>
                        </AnimatePresence>
                    </details>
                    <hr />
                    <details onClick={checkDetails}>
                        <summary className="flex justify-between cursor-pointer" onClick={() => setSection('shared-services')}>
                            <H3 color={`${currentSection === 'shared-services' ? 'text-hpi-blue-light' : 'text-hpi-grey-light'} font-bold`}>
                                SHARED SERVICES
                            </H3>
                            {
                                currentSection === 'shared-services'
                                    ?

                                    <Image src={Minus} alt="" className="xs:w-3" />
                                    :
                                    <Image src={Plus} alt="" className="xs:w-3" />
                            }
                        </summary>
                        <B2 color="text-hpi-body-grey font-medium xs:text-hpi-grey-dark">
                            Our Regional Operations Centre (ROC)
                            model streamlines logistics operations,
                            leveraging end-to-end management
                            solutions to enhance scalability,
                            consolidation, standardisation, and
                            automation of operations.
                        </B2>
                    </details>
                    <hr />
                    <details onClick={checkDetails}>
                        <summary className="flex justify-between cursor-pointer" onClick={() => setSection('digital-solutions')}>
                            <H3 color={`${currentSection === 'digital-solutions' ? 'text-hpi-blue-light' : 'text-hpi-grey-light'} font-bold`}>
                                DIGITAL SOLUTIONS
                            </H3>
                            {
                                currentSection === 'digital-solutions'
                                    ?

                                    <Image src={Minus} alt="" className="xs:w-3" />
                                    :
                                    <Image src={Plus} alt="" className="xs:w-3" />
                            }
                        </summary>
                        <B2 color="text-hpi-body-grey font-medium xs:text-hpi-grey-dark">
                            Harnessing innovative, cost-efficient
                            digital solutions, we offer standardised
                            services enhancing terminal processes,
                            data analytics, and machine learning for
                            optimal operational visibility and control.
                        </B2>
                    </details>
                </nav>
                <CurrentSection />
            </section>
        </motion.section>

    )
}





export const AutomationSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <Image src={AutomationImage} width={600} alt="Img Here" className="
            max-w-[none] object-cover 
            md:h-[400px] md:rounded-3xl
            xs:w-[140px] xs:h-full xs:object-center xs:rounded-2xl
            "/>
        </motion.section>
    )
}

export const SharedSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <Image src={SharedImage} width={600} alt="Img Here" className="
            max-w-[none] object-cover 
            md:h-[400px] md:rounded-3xl
            xs:w-[140px] xs:h-full xs:object-center xs:rounded-2xl
            " />
        </motion.section>
    )
}

export const DigitalSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <Image src={DigitalImage} width={600} alt="Img Here" className="
            max-w-[none] object-cover 
            md:h-[400px] md:rounded-3xl
            xs:w-[140px] xs:h-full xs:object-center xs:rounded-2xl
            " />
        </motion.section>
    )
}