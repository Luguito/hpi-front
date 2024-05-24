'use client'

import { Dispatch, SetStateAction, useState } from "react";
import VideoContainer from "../components/video-container/video-container";
import { MapSlider } from "./ui/mapSlider";
import Image from 'next/image'
import Arrow from "../../../public/home/arrow.svg";
import TestImage from "../../../public/home/13.jpg";
import { ContainerDatesInformation } from "./ui/info-map";
import { B2, H1, H2, H3 } from "../components/text/text";


const Innovation = () => {
    return (
        <article className="mt-10">
            <header>
                <H2 color="text-hpi-blue-light">
                    INDUSTRY INNOVATIONS
                </H2>
            </header>
            <section className="bg-hpi-white rounded-3xl shadow-lg mt-10">
                <section className="flex">
                    <article className="py-14 px-20 w-3/4">
                        <header>
                            <H3 color="text-hpi-blue-dark font-bold">PIONEER IN THE INDUSTRY</H3>
                        </header>
                        <B2 color="text-hpi-body-grey font-medium">
                            Hutchison Ports has always been leading the way towards the next generation of terminal operations with its Smart Port Strategy,
                            pushing forward with a global roll out of the many automated and innovative solutions.
                            We have achieved many world-firsts in terminal operations with our cutting-edge technology, such as:
                        </B2>
                        <ul className="text-hpi-blue-light">
                            <li>
                                <B2 color="font-medium">
                                    Achieving {'‘'}true{'’'} mixed traffic mode terminal operations with Autonomous Trucks (AT) in Hutchison Ports Thailand Terminal D.
                                </B2>
                            </li>
                            <li>
                                <B2 color="font-medium">
                                    The first in the world to have a fully remote-controlled terminal with both Remote-Controlled QCs and Remote- Controlled Rubber-Tyred Gantry Cranes (RTGCs) in Hutchison Ports Thailand Terminal D.
                                </B2>
                            </li>
                            <li>
                                <B2 color="font-medium">
                                    Operating Remote-Controlled RTGCs with mixed traffic in Hutchison Ports HIT Terminal 9 North.
                                </B2>
                            </li>
                            <li>
                                <B2 color="font-medium">
                                    First to operate automated terminal with ASCs and AGVs in Hutchison Ports ECT Delta.
                                </B2>
                            </li>
                        </ul>
                    </article>
                    <Image src={TestImage} alt="" width={500} className="object-fill rounded-tr-2xl rounded-br-2xl" />
                </section>
            </section>
        </article>
    )
}

const Risk = () => {
    return (
        <>
            <article className="mt-10">
                <header>
                    <H2 color="text-hpi-blue-light">
                        EMBRACING RISK
                    </H2>
                </header>
                <section className="bg-hpi-white rounded-3xl shadow-lg mt-10">
                    <section className="flex">
                        <article className="py-14 px-20 w-3/4">
                            <header>
                                <H3 color="text-hpi-blue-dark font-bold">LEADERS MANAGE RISKS</H3>
                            </header>
                            <B2 color="text-hpi-body-grey font-medium">
                                We manage risks while developing innovative solutions for our operations.
                                We build our solutions based on rigorous research and studies. Every decision is made by our professional team with careful calculations, verification and validation.
                            </B2>
                            <ul className="text-hpi-blue-light">
                                <li>
                                    <B2 color="font-medium">
                                        Every new technology we develop has a key performance index to assess its performance, allowing us to refine it to perfection.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        Risk assessments and seeking independent professional opinions have become a standard before introducing automated equipment.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        We do not let the lack of precedent stop us from innovating. We re-designed operation workflow and traffic policies to make the ‘true’ mixed traffic mode AT operations happen.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        Simulations are conducted thoroughly to predict every scenario and reduce risk. We use traffic simulations to study mixed traffic scenarios and port simulations to study operations efficiency and effectiveness enhancement.
                                    </B2>
                                </li>
                            </ul>
                        </article>
                        <Image src={TestImage} alt="" width={500} className="object-fill rounded-tr-2xl rounded-br-2xl" />
                    </section>
                </section>
            </article>
        </>
    )
}

const Strategy = () => {
    return (
        <>
            <article className="mt-10">
                <header>
                    <H2 color="text-hpi-blue-light">
                        AGILE STRATEGY
                    </H2>
                </header>
                <section className="bg-hpi-white rounded-3xl shadow-lg mt-10">
                    <section className="flex">
                        <article className="py-14 px-20 w-3/4">
                            <header>
                                <H3 color="text-hpi-blue-dark font-bold">THE ESSENCE OF OUR RECIPE</H3>
                            </header>
                            <B2 color="text-hpi-body-grey font-medium">
                                We are fast and agile in developing and deploying new technologies to improve our operations. We strive to deliver the solution in the shortest time possible.
                            </B2>
                            <ul className="text-hpi-blue-light">
                                <li>
                                    <B2 color="font-medium">
                                        We developed and deployed Remote-Controlled Quay Cranes (RCQCs) in 2015, and within one year, we familiarised, reinforced, and standardised them. Within five years, we have successfully deployed RCQCs to 10 terminals around the world.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        We began the Autonomous Truck (AT) journey in 2018, and the first batch of ATs came to daily operations within 2 years.
                                    </B2>
                                </li>
                            </ul>
                        </article>
                        <Image src={TestImage} alt="" width={500} className="object-fill rounded-tr-2xl rounded-br-2xl" />
                    </section>
                </section>
            </article>
        </>
    )
}

const People = () => {
    return (
        <>
            <article className="mt-10">
                <header>
                    <H2 color="text-hpi-blue-light">
                        PEOPLE FIRST
                    </H2>
                </header>
                <section className="bg-hpi-white rounded-3xl shadow-lg mt-10">
                    <section className="flex">
                        <article className="py-14 px-20 w-3/4">
                            <header>
                                <H3 color="text-hpi-blue-dark font-bold">ALWAYS OUR FIRST PRIORITY</H3>
                            </header>
                            <B2 color="text-hpi-body-grey font-medium">
                                We care about our people as our most important asset. We provide them with the safest and best working environment possible.
                            </B2>
                            <ul className="text-hpi-blue-light">
                                <li>
                                    <B2 color="font-medium">
                                        We engage third-party consultants to prove independent views and ensure framework, certificate, and ISO standards are compliant.

                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        Safety standards and risk assessments are taken seriously to ensure every possible precaution is taken.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        Our yard surveillance system is always on to keep track of what is happening in the yard.
                                    </B2>
                                </li>
                            </ul>
                        </article>
                        <Image src={TestImage} alt="" width={500} className="object-fill rounded-tr-2xl rounded-br-2xl" />
                    </section>
                </section>
            </article>
        </>
    )
}

const Collaboration = () => {
    return (
        <>
            <article className="mt-10">
                <header>
                    <H2 color="text-hpi-blue-light">
                        COLLABORATION
                    </H2>
                </header>
                <section className="bg-hpi-white rounded-3xl shadow-lg mt-10">
                    <section className="flex">
                        <article className="py-14 px-20 w-3/4">
                            <header>
                                <H3 color="text-hpi-blue-dark font-bold">TOGETHER AS A TEAM</H3>
                            </header>
                            <B2 color="text-hpi-body-grey font-medium">
                                We are experts who know experts. Excelling in one area is not enough to solve complex problems. Teaming up with experts in different fields opens possibilities that cannot be achieved alone. We work with different groups to make things happen.
                            </B2>
                            <ul className="text-hpi-blue-light">
                                <li>
                                    <B2 color="font-medium">
                                        We partner with traffic experts to perform traffic policy–junctions management to study driver behavior in AT projects.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        We partner with equipment management experts to co-develop solutions to optimise equipment utilisation.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        We partner with crane manufacturers to develop tailor-made equipment to suit our design.
                                    </B2>
                                </li>
                                <li>
                                    <B2 color="font-medium">
                                        We provide a driver education program to train drivers on how to deal with new terminal policies.
                                    </B2>
                                </li>
                            </ul>
                        </article>
                        <Image src={TestImage} alt="" width={500} className="object-fill rounded-tr-2xl rounded-br-2xl" />
                    </section>
                </section>
            </article>
        </>
    )
}



export default function AutomationPage() {
    const [currentSection, setSection] = useState('innovation');
    const [currentSectionMap, setSectionMap] = useState("1991")
    const sections: Record<string, any> = {
        'innovation': Innovation,
        'risk': Risk,
        'strategy': Strategy,
        'people': People,
        'collab': Collaboration
    }

    function changeSectionByMap(x: any) {
        setSectionMap(x)
    }

    const CurrentSection = sections[currentSection];

    const selected = "text-[20px] text-hpi-blue-light font-bold cursor-pointer flex gap-5";
    const unselect = "text-[20px] text-hpi-grey-light font-bold cursor-pointer flex gap-5"
    return (
        <section>
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Automation%20Banner.mp4" bgColor="">
                <H1 color="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md leading-[80px]">
                    MASTERING THE ART OF <br />
                    TERMINAL AUTOMATION
                </H1>
            </VideoContainer>
            {/* SECTION  */}
            <section className="px-64">
                {/* <section className="flex gap-3 my-40 h-[60em] bg-hpi-white rounded-3xl">
                    <article className="flex flex-col gap-10 w-3/4 h-full justify-evenly pl-20">
                        <H3 color={currentSection === 'innovation' ? selected : unselect} onMouseEnter={() => setSection('innovation')}>
                            INDUSTRY INNOVATIONS
                            {currentSection === 'innovation' && <Image src={Arrow} alt="arrow" />}
                        </H3>
                        <H3 color={currentSection === 'risk' ? selected : unselect} onMouseEnter={() => setSection('risk')}>
                            EMBRACING RISK
                            {currentSection === 'risk' && <Image src={Arrow} alt="arrow" />}
                        </H3>
                        <H3 color={currentSection === 'strategy' ? selected : unselect} onMouseEnter={() => setSection('strategy')}>
                            AGILE STRATEGY
                            {currentSection === 'strategy' && <Image src={Arrow} alt="arrow" />}
                        </H3>
                        <H3 color={currentSection === 'people' ? selected : unselect} onMouseEnter={() => setSection('people')}>
                            PEOPLE FIRST
                            {currentSection === 'people' && <Image src={Arrow} alt="arrow" />}
                        </H3>
                        <H3 color={currentSection === 'collab' ? selected : unselect} onMouseEnter={() => setSection('collab')}>
                            COLLABORATION
                            {currentSection === 'collab' && <Image src={Arrow} alt="arrow" />}
                        </H3>
                    </article>
                    <section className="rounded-2xl px-20 py-[5.5em] h-full w-full">
                        <CurrentSection />
                    </section>
                </section> */}
                <section>
                    <Innovation />
                    <Risk />
                    <Strategy />
                    <People />
                    <Collaboration />
                </section>
                <section className="mt-10">
                    <header className="text-left">
                        <H3 color="text-hpi-blue-light font-medium">Milestone Journey</H3>
                        <H2 color="text-gradient">OUR FORWARD-THINKING PLANS</H2>
                    </header>
                    <section className="bg-hpi-white rounded-3xl mt-5 mb-20">
                        <MapSlider changeSection={changeSectionByMap} />
                        <section className="mt-10 p-20">
                            <ContainerDatesInformation date={currentSectionMap} />
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}