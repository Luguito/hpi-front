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
import Link from "next/link";
import StorageImageClient from "../getImage/client-images";

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
            mt-2 
            lg:mt-15
            xl:mt-10
            2xl:mt-32
            w-[84%]
            "
            initial="hidden" whileInView="visible" variants={RevealSectionInitial} viewport={{ once: true }}>
            <header className="
            text-left py-12
            xl:py-2
            ">
                <H5 color="text-hpi-blue-light font-medium">
                    Port Innovation
                </H5>
                <H2 color="text-gradient font-bold">
                    TECHNOLOGICAL SOLUTIONS
                </H2>
            </header>
            <section className="
                bg-white shadow-lg flex flex-col justify-between rounded-2xl gap-5 p-4
                lg:gap-10 lg:px-10 lg:py-10 lg:rounded-3xl lg:flex-row
                xl:mt-7 xl:px-16 xl:py-10
                2xl:mt-10
            ">
                <nav className="
                flex flex-col gap-4 p-5
                lg:gap-10
                xl:gap-4 xl:w-[30em]
                2xl:gap-9
                ">
                    <details onClick={checkDetails} open>
                        <summary className="flex justify-between cursor-pointer" onClick={() => setSection('automation')}>
                            <H3 color={`${currentSection === 'automation' ? 'text-hpi-blue-light' : 'text-hpi-grey-light'} font-bold`}>
                                AUTOMATION
                            </H3>
                            {
                                currentSection === 'automation'
                                    ?

                                    <Image src={Minus} alt="" className="w-3 lg:w-auto" />
                                    :
                                    <Image src={Plus} alt="" className="w-3 lg:w-auto" />
                            }
                        </summary>
                            <B2 color="md:text-hpi-body-grey font-medium text-hpi-grey-dark" exit={{ y: 20, opacity: 0 }}>
                                Implementing AI and automation
                                technologies, we elevate terminal
                                productivity, safety, and quality through
                                optimised scheduling, autonomous
                                operations, and gate automation, leading
                                to operational excellence.
                            </B2>
                        <article className="xl:hidden">
                            <CurrentSection />
                        </article>
                    </details>
                    <hr />
                    <details onClick={checkDetails}>
                        <summary className="flex justify-between cursor-pointer gap-3" onClick={() => setSection('shared-services')}>
                            <H3 color={`${currentSection === 'shared-services' ? 'text-hpi-blue-light' : 'text-hpi-grey-light'} font-bold`}>
                                SHARED SERVICES
                            </H3>
                            {
                                currentSection === 'shared-services'
                                    ?

                                    <Image src={Minus} alt="" className="w-3 lg:w-auto" />
                                    :
                                    <Image src={Plus} alt="" className="w-3 lg:w-auto" />
                            }
                        </summary>
                        <B2 color="md:text-hpi-body-grey font-medium text-hpi-grey-dark">
                            Our Regional Operations Centre (ROC)
                            model streamlines logistics operations,
                            leveraging end-to-end management
                            solutions to enhance scalability,
                            consolidation, standardisation, and
                            automation of operations.
                        </B2>
                        <article className="xl:hidden">
                            <CurrentSection />
                        </article>
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

                                    <Image src={Minus} alt="" className="w-3 lg:w-auto" />
                                    :
                                    <Image src={Plus} alt="" className="w-3 lg:w-auto" />
                            }
                        </summary>
                        <B2 color="lg:text-hpi-body-grey font-medium text-hpi-grey-dark">
                            Harnessing innovative, cost-efficient
                            digital solutions, we offer standardised
                            services enhancing terminal processes,
                            data analytics, and machine learning for
                            optimal operational visibility and control.
                        </B2>
                        <article className="xl:hidden">
                            <CurrentSection />
                        </article>
                    </details>
                </nav>
                <article className="hidden xl:block">
                    <CurrentSection />
                </article>
            </section>
        </motion.section>

    )
}

export const AutomationSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="relative">
            <StorageImageClient name="home/Automation.png" width={623} height={415} priority alt="Img Here" className="
            object-cover h-full object-center rounded-2xl mt-3
            md:w-full
            lg:max-w-[none] lg:h-[400px] lg:rounded-3xl
            xl:w-auto
            2xl:w-[50em] 2xl:h-full
            "/>
            <Link href="/automation" className="cursor-pointer">
                <StorageImageClient name="home/go-to.svg" width={50} height={50} alt="" className="absolute bottom-3 right-5" />
            </Link>
        </motion.section>
    )
}

export const SharedSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="relative">
            <StorageImageClient name="home/imagen home-02.png" width={1274} height={703} priority alt="Img Here" className="
            object-cover h-full object-center rounded-2xl
            md:w-full
            lg:w-full lg:max-w-[none] lg:h-[400px] lg:rounded-3xl
            xl:h-auto
            2xl:w-[50em] 2xl:h-full
            " />
            <Link href="/shared-services" className="cursor-pointer">
                <StorageImageClient name="home/go-to.svg" width={50} height={50} alt="" className="absolute bottom-3 right-5" />
            </Link>
        </motion.section>
    )
}

export const DigitalSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="relative">
            <StorageImageClient name="home/imagen home-03.png" width={7658} height={4917} priority alt="Img Here" className="
            object-cover h-full object-center rounded-2xl
            md:w-full
            lg:w-full lg:max-w-[none] lg:h-[400px] lg:rounded-3xl
            xl:h-auto
            2xl:w-[50em]
            " />
            <Link href="/digital-solutions" className="cursor-pointer">
                <StorageImageClient name="home/go-to.svg" width={50} height={50} alt="" className="absolute bottom-3 right-5" />
            </Link>
        </motion.section>
    )
}