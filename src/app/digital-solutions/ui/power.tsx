'use client';
import Icon1 from '../../../../public/digital-solutions/1.svg'
import Icon2 from '../../../../public/digital-solutions/2.svg'
import Icon3 from '../../../../public/digital-solutions/3.svg'
import Icon4 from '../../../../public/digital-solutions/4.svg'
// glow
import IconGlow1 from '../../../../public/digital-solutions/1 glow.svg'
import IconGlow2 from '../../../../public/digital-solutions/2 glow.svg'
import IconGlow3 from '../../../../public/digital-solutions/3 glow.svg'
import IconGlow4 from '../../../../public/digital-solutions/4 glow.svg'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


export default function PowerSolutionUI() {
    const ref = useRef(null);
    const [expanded, setExpanded] = useState({
        'e-1': false,
        'e-2': false,
        'e-3': false,
        'e-4': false,
    });

    useEffect(() => {
        if(ref.current) {
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
            <header className="text-center">
                <small className="font-medium text-hpi-blue-light text-[16px]">Our Vision</small>
                <h2 className="bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text text-[30px] font-bold">
                    UNLEASHING THE POWER OF DIGITAL SOLUTIONS
                </h2>
            </header>
            <p className="text-hpi-blue-dark text-[18px] text-center mt-12">
                Hutchison Ports is dedicated to offering standardised, cost-efficient, and innovative solutions that add value across all our terminals and logistics community.
                We aim to empower individuals and businesses to transform the logistics world into a more efficient and sustainable one through innovative technologies.
            </p>
            <section className="flex flex-col gap-6 mt-16">
                <ExpandedComponent icon={Icon1} blowIcon={IconGlow1} title={"TERMINAL OPERATING SYSTEM (TOS)"} onClick={getRef} id="e-1" isExpanded={expanded['e-1']} ref={ref}>
                    <p className="text-[16px] font-medium text-[#707070]">
                        A comprehensive solution designed to streamline terminal processes by providing real-time data for enhanced visibility and control, forecasting capabilities, data-driven decision support, and a consolidated data platform for analytics and machine learning. <br />
                        <b className="mt-10 font-semibold">TOS for Container Terminal Operations:</b>  nGen/Veronica
                        <br />
                        <b className="mt-10 font-semibold">TOS for General Cargo Operations:</b>  GCMS
                    </p>
                </ExpandedComponent>
                <ExpandedComponent icon={Icon2} blowIcon={IconGlow2} title={"DIGITISING THE LOGISTICS COMMUNITY"} onClick={getRef} id="e-2" isExpanded={expanded['e-2']}>
                    <p>
                        We have developed a set of digital tools to stay connected with the logistics community.
                    </p>
                    <p>
                        <b className="font-semibold">Hutchison Ports Data Exchange (HPDX):</b> A centralised data exchange gateway for the shipping community. <br />
                        <b className="font-semibold">Document Digitalisation (DD):</b> A state-of-the-art AI application for digitising communication with customers and documenting processes, scalable to support multiple ports globally. <br />
                        <b className="font-semibold">Ubi: </b> A mobile app strategically designed to enhance hinterland connectivity, offering customers improved insights and faster access to landside terminal processes.
                    </p>
                </ExpandedComponent>
                <ExpandedComponent icon={Icon3} blowIcon={IconGlow3} title={"PRODUCTIVITY AND SAFETY AUTOMATION"} onClick={getRef} id="e-3" isExpanded={expanded['e-3']}>
                    <p>
                        Our solutions leverage AI technology for yard utilisation optimisation, and a holistic mathematical model for equipment and job scheduling algorithms. This ensures higher productivity, operational cost savings, improved safety and quality at the terminal.
                    </p>
                    <p>
                        <b className="font-semibold">Autonomous Truck (AT)</b> operations management <br />
                        <b className="font-semibold">Equipment Agnostic Yard Crane Scheduling:</b>  ASC, ARTG <br />
                        <b className="font-semibold"> Auto-Strad</b>   Operations Management <br />
                        <b className="font-semibold">Gate Automation</b>
                    </p>
                </ExpandedComponent>
                <ExpandedComponent icon={Icon4} blowIcon={IconGlow4} title={"LOGISTICS OPTIMISATION"} onClick={getRef} id="e-4" isExpanded={expanded['e-4']}>
                    <p>
                        Our end-to-end logistics management services streamline operations from start to finish, maximising efficiency and minimising costs.
                    </p>
                    <p>
                        PARIS - <b className="font-semibold">Multi-modal Optimisation App.</b> To optimise external truck logistics deployment. <br />
                        WMS - <b className="font-semibold">Warehouse Management System.</b>  To streamline the operations of cargo handling.
                    </p>
                </ExpandedComponent>
            </section>
        </>
    )
}

const ExpandedComponent = ({ icon, title, isExpanded, blowIcon, children, ...props }: any) => {
    const styleWhenIsActive = isExpanded ? `bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102]` : `border-2 border-hpi-grey-light bg-hpi-white`;

    return (
        <>
            <details {...props}>
                <summary className="expansion-summary flex items-center gap-16 cursor-pointer">
                    <article className={`h-12 w-12 rounded-3xl flex justify-center items-center ${styleWhenIsActive}`}>
                        <Image src={!isExpanded ? icon : blowIcon} alt="Icon" priority/>
                    </article>
                    <p className="font-bold text-hpi-blue-dark text-[20px]">{title}</p>
                </summary>
                <section className="pl-28 text-[16px] font-medium text-[#707070]">
                    {children}
                </section>
            </details>
        </>
    )
}