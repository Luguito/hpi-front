
'use client'

import React, { useState } from "react"
import Button from "../button/button";
import Text from "../text/text";
import AutomationImage from '../../../../public/home/Automation.png'
import DigitalImage from '../../../../public/home/Digital.png'
import SharedImage from '../../../../public/home/Shared.svg'
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export const TechSolutionsComponent = () => {
    const [currentSection, setSection] = useState('automation');
    const sections: Record<string, any> = {
        'automation': AutomationSection,
        'shared-services': SharedSection,
        'digital-solutions': DigitalSection,
    }

    const CurrentSection = sections[currentSection];

    return (
        <section className="snap-center px-16">
            <header className="text-left py-12">
                <span className="text-hpi-blue-light text-center text-[16px]">Port Innovation</span>
                <div className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                    <Text type="bold" classes="text-[30px]">TECHNOLOGICAL SOLUTIONS</Text>
                </div>
            </header>
            <section className="pb-10 max-h-[27em]">
                <nav className="flex justify-between gap-4">
                    <Text type="bold" classes={currentSection === 'automation' ? 'text-[20px] text-hpi-blue-dark cursor-pointer' : 'text-[20px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('automation')}>AUTOMATION</Text>
                    <Text type="bold" classes={currentSection === 'shared-services' ? 'text-[20px] text-hpi-blue-dark cursor-pointer' : 'text-[20px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('shared-services')}>SHARED SERVICES</Text>
                    <Text type="bold" classes={currentSection === 'digital-solutions' ? 'text-[20px] text-hpi-blue-dark cursor-pointer' : 'text-[20px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('digital-solutions')}>DIGITAL SOLUTIONS</Text>
                </nav>
                <CurrentSection />
            </section>
        </section>
    )
}





export const AutomationSection = () => {
    return (
        <motion.section className="flex items-start gap-36 mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-2/4">
                {/* p, button*/}
                <Text type="medium" classes="text-[16px] text-hpi-grey-dark">
                    Implementing AI and automation <br />
                    technologies, we elevate terminal <br />
                    productivity, safety, and quality through <br />
                    optimized scheduling, autonomous <br />
                    operations, and gate automation, leading <br />
                    to operational excellence.
                </Text>
                <div className="mt-14">
                    <Button>
                        <Text type="bold" classes="text-[16px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center w-2/4">
                {/* img */}
                <Image src={AutomationImage} width={500} alt="Img Here" />
            </article>
        </motion.section>
    )
}

export const SharedSection = () => {
    return (
        <motion.section className="flex items-start gap-36 mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-2/4">
                {/* p, button*/}
                <Text type="medium" classes="text-[16px] text-hpi-grey-dark">
                    Our Regional Operations Centre (ROC) <br />
                    model streamlines logistics operations, <br />
                    leveraging end-to-end management <br />
                    solutions to enhance scalability, <br />
                    consolidation, standardisation, and  <br />
                    automation of operations.
                </Text>
                <div className="mt-14">
                    <Button>
                        <Link href="/shared-services">
                            <Text type="bold" classes="text-[16px] text-hpi-white">
                                Learn More
                            </Text>
                        </Link>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center w-2/4">
                {/* img */}
                <Image src={SharedImage} width={250} alt="Img Here" />
            </article>
        </motion.section>
    )
}

export const DigitalSection = () => {
    return (
        <motion.section className="flex items-start gap-36 mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-2/4">
                {/* p, button*/}
                <Text type="medium" classes="text-[16px] text-hpi-grey-dark">
                    Harnessing innovative, cost-efficient <br />
                    digital solutions, we offer standardized <br />
                    services enhancing terminal processes, <br />
                    data analytics, and machine learning for <br />
                    optimal operational visibility and control.
                </Text>
                <div className="mt-14">
                    <Button>
                        <Text type="bold" classes="text-[16px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center w-2/4">
                {/* img */}
                <Image src={DigitalImage} width={500}  alt="Img Here" className="rounded-2xl" />
            </article>
        </motion.section>
    )
}