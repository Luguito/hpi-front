
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
        <section className="mt-16 snap-center">
            <header className="text-center py-12">
                <span className="text-hpi-blue-light text-center text-[26px]">Port Innovation</span>
                <div className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                    <Text type="bold" classes="text-[40px]">TECHNOLOGICAL SOLUTIONS</Text>
                </div>
            </header>
            <section className="pb-16">
                <nav className="flex justify-evenly gap-4">
                    <Text type="bold" classes={currentSection === 'automation' ? 'text-[30px] text-hpi-blue-dark cursor-pointer' : 'text-[30px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('automation')}>AUTOMATION</Text>
                    <Text type="bold" classes={currentSection === 'shared-services' ? 'text-[30px] text-hpi-blue-dark cursor-pointer' : 'text-[30px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('shared-services')}>SHARED SERVICES</Text>
                    <Text type="bold" classes={currentSection === 'digital-solutions' ? 'text-[30px] text-hpi-blue-dark cursor-pointer' : 'text-[30px] text-hpi-grey-light cursor-pointer'} onMouseEnter={() => setSection('digital-solutions')}>DIGITAL SOLUTIONS</Text>
                </nav>
                <CurrentSection />
            </section>
        </section>
    )
}





export const AutomationSection = () => {
    return (
        <motion.section className="flex justify-between mt-28 px-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-1/3">
                {/* p, button*/}
                <Text type="medium" classes="text-[20px] text-hpi-grey-dark">
                    Implementing AI and automation technologies, we elevate terminal productivity, safety, and quality through optimized scheduling, autonomous operations, and gate automation, leading to operational excellence.
                </Text>
                <div className="mt-14">
                    <Button>
                        <Text type="bold" classes="text-[20px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center">
                {/* img */}
                <Image src={AutomationImage} width={600} alt="Img Here" />
            </article>
        </motion.section>
    )
}

export const SharedSection = () => {
    return (
        <motion.section className="flex justify-between mt-28 px-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-1/3">
                {/* p, button*/}
                <Text type="medium" classes="text-[20px] text-hpi-grey-dark">
                    Our RaaS model streamlines <br />
                    logistics operations, leveraging end- <br />
                    to-end management solutions to <br />
                    enhance scalability, consolidation, <br />
                    standardisation, and automation of operations.
                </Text>
                <div className="mt-14">
                    <Button>
                        <Link href="/shared-services">
                            <Text type="bold" classes="text-[20px] text-hpi-white">
                                Learn More
                            </Text>
                        </Link>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center">
                {/* img */}
                <Image src={SharedImage} width={400} height={400} alt="Img Here" />
            </article>
        </motion.section>
    )
}

export const DigitalSection = () => {
    return (
        <motion.section className="flex justify-between mt-28 px-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <article className="w-1/3">
                {/* p, button*/}
                <Text type="medium" classes="text-[20px] text-hpi-grey-dark">
                    Harnessing innovative, cost-efficient digital solutions,
                    we offer standardized services enhancing terminal processes,
                    data analytics, and machine learning for optimal operational visibility and control.
                </Text>
                <div className="mt-14">
                    <Button>
                        <Text type="bold" classes="text-[20px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button>
                </div>
            </article>
            <article className="flex justify-center">
                {/* img */}
                <Image src={DigitalImage} width={600} alt="Img Here" className="rounded-2xl" />
            </article>
        </motion.section>
    )
}