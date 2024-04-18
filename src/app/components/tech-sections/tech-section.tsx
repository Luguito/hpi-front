
'use client'

import React, { useState } from "react"
import Button from "../button/button";
import Text from "../text/text";
import AutomationImage from '../../../../public/home/Automation.png'
import SharedImage from '../../../../public/home/imagen home-02.png'
import DigitalImage from '../../../../public/home/imagen home-03.png'
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealSectionInitial, RevealTextAfterSection } from "@/app/animations/animation";

export const TechSolutionsComponent = () => {
    const [currentSection, setSection] = useState('automation');
    const sections: Record<string, any> = {
        'automation': AutomationSection,
        'shared-services': SharedSection,
        'digital-solutions': DigitalSection,
    }

    const CurrentSection = sections[currentSection];

    return (
        <motion.section className="snap-center px-16" initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <header className="text-center py-12">
                <motion.span className="text-hpi-blue-light text-center text-[16px]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>Port Innovation</motion.span>
                <motion.div className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text"
                    initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-[30px]">TECHNOLOGICAL SOLUTIONS</Text>
                </motion.div>
            </header>
            <section className="pb-16 max-h-[29em]">
                <nav className="flex justify-between gap-4">
                    <motion.div initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                        <Text type="bold" classes={currentSection === 'automation' ? 'text-[20px] text-hpi-blue-dark cursor-pointer' : 'text-[20px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('automation')}>AUTOMATION</Text>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                        <Text type="bold" classes={currentSection === 'shared-services' ? 'text-[20px] text-hpi-blue-dark cursor-pointer' : 'text-[20px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('shared-services')}>SHARED SERVICES</Text>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                        <Text type="bold" classes={currentSection === 'digital-solutions' ? 'text-[20px] text-hpi-blue-dark cursor-pointer' : 'text-[20px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('digital-solutions')}>DIGITAL SOLUTIONS</Text>
                    </motion.div>
                </nav>
                <motion.div initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
                    <CurrentSection />
                </motion.div>
            </section>
        </motion.section>

    )
}





export const AutomationSection = () => {
    return (
        <motion.section className="flex mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-2/4 mt-8">
                {/* p, button*/}
                <p  className="text-[16px] text-hpi-grey-dark font-normal">
                    Implementing AI and automation <br />
                    technologies, we elevate terminal <br />
                    productivity, safety, and quality through <br />
                    optimized scheduling, autonomous <br />
                    operations, and gate automation, leading <br />
                    to operational excellence.
                </p>
                <div className="mt-5">
                    <Button>
                        <Text type="bold" classes="text-[16px] text-hpi-white">
                            Learn more
                        </Text>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center w-2/4">
                {/* img */}
                <Image src={AutomationImage} width={500} height={350} alt="Img Here" className="rounded-lg max-w-[none] h-[350px]"/>
            </article>
        </motion.section>
    )
}

export const SharedSection = () => {
    return (
        <motion.section className="flex mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-2/4 mt-8">
                {/* p, button*/}
                <p  className="text-[16px] text-hpi-grey-dark font-normal">
                    Our Regional Operations Centre (ROC) <br />
                    model streamlines logistics operations, <br />
                    leveraging end-to-end management <br />
                    solutions to enhance scalability, <br />
                    consolidation, standardisation, and  <br />
                    automation of operations.
                </p>
                <div className="mt-5">
                    <Button>
                        <Link href="/shared-services">
                            <Text type="bold" classes="text-[16px] text-hpi-white">
                                Learn more
                            </Text>
                        </Link>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center w-2/4 rounded-lg">
                {/* img */}
                <Image src={SharedImage} width={900} height={350} alt="Img Here" className="max-w-[none] h-[350px]" />
            </article>
        </motion.section>
    )
}

export const DigitalSection = () => {
    return (
        <motion.section className="flex mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-2/4 mt-8">
                {/* p, button*/}
                <p className="text-[16px] text-hpi-grey-dark font-normal">
                    Harnessing innovative, cost-efficient <br />
                    digital solutions, we offer standardized <br />
                    services enhancing terminal processes, <br />
                    data analytics, and machine learning for <br />
                    optimal operational visibility and control.
                </p>
                <div className="mt-[2.6em]">
                    <Button>
                        <Text type="bold" classes="text-[16px] text-hpi-white">
                            Learn more
                        </Text>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center w-2/4 rounded-lg">
                {/* img */}
                <Image src={DigitalImage} width={900} height={350} alt="Img Here" className="rounded-2xl max-w-[none] h-[350px]" />
            </article>
        </motion.section>
    )
}

// margin-top 2em
// width : 900
// height: 350