'use client';
import Icon1 from '../../../../public/digital-solutions/terminal.svg'
import Icon2 from '../../../../public/digital-solutions/digitising.svg'
import Icon3 from '../../../../public/digital-solutions/productivity.svg'
import Icon4 from '../../../../public/digital-solutions/logistics.svg'
// glow
import IconGlow1 from '../../../../public/digital-solutions/1 glow.svg'
import IconGlow2 from '../../../../public/digital-solutions/2 glow.svg'
import IconGlow3 from '../../../../public/digital-solutions/3 glow.svg'
import IconGlow4 from '../../../../public/digital-solutions/4 glow.svg'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealSectionInitial, RevealTextAfterSection } from '@/app/animations/animation';
import { B1, B2, H2, H3, H5 } from '@/app/components/text/text';

export default function PowerSolutionUI() {
    const ref = useRef(null);
    const [expanded, setExpanded] = useState({
        'e-1': false,
        'e-2': false,
        'e-3': false,
        'e-4': false,
    });

    useEffect(() => {
        if (ref.current) {
            // @ts-ignore
            ref.current.click();
        }
    }, [])

    const getRef = ({ target }: any) => {
        let node = target as HTMLElement;

        let nodeId = node.id;

        if (!nodeId.startsWith('e-')) {
            getRef({ target: node.parentElement })
        } else {
            // @ts-ignore
            !expanded[nodeId] ? setExpanded({ ...expanded, [nodeId]: true }) : setExpanded({ ...expanded, [nodeId]: false })
        }
    }
    return (
        <>
            <header className="text-left">
                <H5 color="text-hpi-blue-light font-medium">
                    Our Vision
                </H5>
                <H2 color="text-gradient">
                    UNLEASHING THE POWER OF DIGITAL SOLUTIONS
                </H2>
            </header>
            <B1 color="text-hpi-blue-dark font-normal">
                Hutchison Ports is dedicated to offering standardised, cost-efficient, and innovative solutions that add value across all our terminals and logistics community.
                We aim to empower individuals and businesses to transform the logistics world into a more efficient and sustainable one through innovative technologies.
            </B1>
            <section className="flex flex-col gap-6 mt-16 bg-hpi-white rounded-3xl p-20">
                <ExpandedComponent icon={Icon1} blowIcon={IconGlow1} title={"TERMINAL OPERATING SYSTEM (TOS)"} onClick={getRef} id="e-1" isExpanded={expanded['e-1']} ref={ref}>
                    <B2 color="font-medium text-hpu-grey-dark mt-5">
                        A comprehensive solution designed to streamline terminal processes by providing real-time data for enhanced visibility and control, forecasting capabilities, data-driven decision support, and a consolidated data platform for analytics and machine learning. <br />
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-7">
                        <b className="font-bold">TOS for Container Terminal Operations:</b>  nGen/Veronica
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-4">
                        <b className="font-bold">TOS for General Cargo Operations:</b>  GCMS
                    </B2>
                </ExpandedComponent>
                <ExpandedComponent icon={Icon2} blowIcon={IconGlow2} title={"DIGITISING THE LOGISTICS COMMUNITY"} onClick={getRef} id="e-2" isExpanded={expanded['e-2']}>
                    <B2 color="font-medium text-hpu-grey-dark">
                        We have developed a set of digital tools to stay connected with the logistics community.
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-7">
                        <b className="font-bold">Hutchison Ports Data Exchange (HPDX):</b> A centralised data exchange gateway for the shipping community. <br />
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-4">
                        <b className="font-bold">Document Digitalisation (DD):</b> A state-of-the-art AI application for digitising communication with customers and documenting processes, scalable to support multiple ports globally. <br />
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-4">
                        <b className="font-bold">Ubi: </b> A mobile app strategically designed to enhance hinterland connectivity, offering customers improved insights and faster access to landside terminal processes.
                    </B2>
                </ExpandedComponent>
                <ExpandedComponent icon={Icon3} blowIcon={IconGlow3} title={"PRODUCTIVITY AND SAFETY AUTOMATION"} onClick={getRef} id="e-3" isExpanded={expanded['e-3']}>
                    <B2 color="font-medium text-hpu-grey-dark">
                        Our solutions leverage AI technology for yard utilisation optimisation, and a holistic mathematical model for equipment and job scheduling algorithms. This ensures higher productivity, operational cost savings, improved safety and quality at the terminal.
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-7">
                        <b className="font-bold">Autonomous Truck (AT)</b> operations management <br />
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-4">
                        <b className="font-bold">Equipment Agnostic Yard Crane Scheduling:</b>  ASC, ARTG <br />
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-4">
                        <b className="font-bold"> Auto-Strad</b>   Operations Management <br />
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-4">
                        <b className="font-bold">Gate Automation</b>
                    </B2>
                </ExpandedComponent>
                <ExpandedComponent icon={Icon4} blowIcon={IconGlow4} title={"LOGISTICS OPTIMISATION"} onClick={getRef} id="e-4" isExpanded={expanded['e-4']}>
                    <B2 color="font-medium text-hpu-grey-dark">
                        Our end-to-end logistics management services streamline operations from start to finish, maximising efficiency and minimising costs.
                    </B2>
                    <B2 color="font-medium text-hpu-grey-dark mt-7">
                        PARIS - <b className="font-bold">Multi-modal Optimisation App.</b> To optimise external truck logistics deployment. <br />
                        WMS - <b className="font-bold">Warehouse Management System.</b>  To streamline the operations of cargo handling.
                    </B2>
                </ExpandedComponent>
            </section>
        </>
    )
}

const ExpandedComponent = ({ icon, title, isExpanded, blowIcon, children, ...props }: any) => {
    const styleWhenIsActive = isExpanded ? `bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102]` : `bg-[#EAEAEA]`;

    return (
        <>
            <motion.details {...props} initial="hidden" whileInView="visible" variants={RevealFromLeftToRight} viewport={{ once: true }}>
                <summary className="expansion-summary flex items-center gap-16 cursor-pointer">
                    <article className={`h-14 w-14 p-3 rounded-full flex justify-center items-center ${styleWhenIsActive}`}>
                        <Image src={icon} alt="Icon" priority />
                    </article>
                    <H3 color={`${isExpanded ? 'text-hpi-blue-dark' : 'text-hpi-grey-light'} font-bold`}>
                        {title}
                    </H3>
                </summary>
                <section className="pl-28">
                    {children}
                </section>
            </motion.details>
        </>
    )
}