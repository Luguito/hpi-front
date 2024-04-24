'use client'

import { Dispatch, SetStateAction, useState } from "react";
import VideoContainer from "../components/video-container/video-container";
import { MapSlider } from "./ui/mapSlider";
import Image from 'next/image'
import Arrow from "../../../public/home/arrow.svg";


const Innovation = () => {
    return (
        <>
            <header>
                <b className="text-hpi-blue-dark">PIONEER IN THE INDUSTRY</b>
            </header>
            <section className="text-[#494949] font-normal mt-11 text-[16px]">
                <p>
                    Hutchison Ports has always been leading the way towards the next generation of terminal operations with its Smart Port Strategy,
                    pushing forward with a global roll out of the many automated and innovative solutions.
                    We have achieved many world-firsts in terminal operations with our cutting-edge technology, such as:
                </p>
                <ul>
                    <li>
                        Achieving {'‘'}true{'’'} mixed traffic mode terminal operations with Autonomous Trucks (AT) in Hutchison Ports Thailand Terminal D.
                    </li>
                    <li>
                        The first in the world to have a fully remote-controlled terminal with both Remote-Controlled QCs and Remote- Controlled Rubber-Tyred Gantry Cranes (RTGCs) in Hutchison Ports Thailand Terminal D.
                    </li>
                    <li>
                        Operating Remote-Controlled RTGCs with mixed traffic in Hutchison Ports HIT Terminal 9 North.
                    </li>
                    <li>
                        First to operate automated terminal with ASCs and AGVs in Hutchison Ports ECT Delta.
                    </li>
                </ul>
            </section>
        </>
    )
}

const Risk = () => {
    return (
        <>
            <header>
                <b className="text-hpi-blue-dark">LEADERS MANAGE RISKS</b>
            </header>
            <section className="text-[#494949] font-normal mt-11 text-[16px]">
                <p>
                    We manage risks while developing innovative solutions for our operations.
                    We build our solutions based on rigorous research and studies. Every decision is made by our professional team with careful calculations, verification and validation.
                </p>
                <ul>
                    <li>
                        Every new technology we develop has a key performance index to assess its performance, allowing us to refine it to perfection.
                    </li>
                    <li>
                        Risk assessments and seeking independent professional opinions have become a standard before introducing automated equipment.
                    </li>
                    <li>
                        We do not let the lack of precedent stop us from innovating. We re-designed operation workflow and traffic policies to make the ‘true’ mixed traffic mode AT operations happen.
                    </li>
                    <li>
                        Simulations are conducted thoroughly to predict every scenario and reduce risk. We use traffic simulations to study mixed traffic scenarios and port simulations to study operations efficiency and effectiveness enhancement.
                    </li>
                </ul>
            </section>
        </>
    )
}

const Strategy = () => {
    return (
        <>
            <header>
                <b className="text-hpi-blue-dark">AGILITY: THE ESSENCE OF OUR RECIPE</b>
            </header>
            <section className="text-[#494949] font-normal mt-11 text-[16px]">
                <p>
                    We are fast and agile in developing and deploying new technologies to improve our operations. We strive to deliver the solution in the shortest time possible.
                </p>
                <ul>
                    <li>
                        We developed and deployed Remote-Controlled Quay Cranes (RCQCs) in 2015, and within one year, we familiarized, reinforced, and standardized them. Within five years, we have successfully deployed RCQCs to 10 terminals around the world.
                    </li>
                    <li>
                        We began the Autonomous Truck (AT) journey in 2018, and the first batch of ATs came to daily operations within 2 years.
                    </li>
                </ul>
            </section>
        </>
    )
}

const People = () => {
    return (
        <>
            <header>
                <b className="text-hpi-blue-dark">PEOPLE: ALWAYS OUR FIRST PRIORITY</b>
            </header>
            <section className="text-[#494949] font-normal mt-11 text-[16px]">
                <p>
                    We care about our people as our most important asset. We provide them with the safest and best working environment possible.
                </p>
                <ul>
                    <li>
                        We engage third-party consultants to prove independent views and ensure framework, certificate, and ISO standards are compliant.
                    </li>
                    <li>
                        Safety standards and risk assessments are taken seriously to ensure every possible precaution is taken.
                    </li>
                    <li>
                        Our yard surveillance system is always on to keep track of what is happening in the yard.
                    </li>
                </ul>
            </section>
        </>
    )
}

const Collaboration = () => {
    return (
        <>
            <header>
                <b className="text-hpi-blue-dark">TOGETHER AS A TEAM</b>
            </header>
            <section className="text-[#494949] font-normal mt-11 text-[16px]">
                <p>
                    We are experts who know experts. Excelling in one area is not enough to solve complex problems. Teaming up with experts in different fields opens possibilities that cannot be achieved alone. We work with different groups to make things happen.
                </p>
                <ul>
                    <li>
                        We partner with traffic experts to perform traffic policy–junctions management to study driver behavior in AT projects.
                    </li>
                    <li>
                        We partner with equipment management experts to co-develop solutions to optimize equipment utilization.
                    </li>
                    <li>
                        We partner with crane manufacturers to develop tailor-made equipment to suit our design.
                    </li>
                    <li>
                        We provide a driver education program to train drivers on how to deal with new terminal policies.
                    </li>
                </ul>
            </section>
        </>
    )
}



export default function AutomationPage() {
    const [currentSection, setSection] = useState('innovation');
    const sections: Record<string, any> = {
        'innovation': Innovation,
        'risk': Risk,
        'strategy': Strategy,
        'people': People,
        'collab': Collaboration
    }

    const CurrentSection = sections[currentSection];

    const selected = "text-[20px] text-hpi-blue-dark cursor-pointer flex gap-5";
    const unselect = "text-[20px] text-hpi-grey-light cursor-pointer flex gap-5"
    return (
        <section>
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Home%20Banner.mp4" bgColor="">
                <p className="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md leading-[80px]">
                    MASTERING THE ART OF <br />
                    TERMINAL AUTOMATION
                </p>
            </VideoContainer>
            {/* SECTION  */}
            <section className="px-80">
                <section className="flex gap-3 my-40 h-[47em]">
                    <article className="flex flex-col gap-10 w-3/4 h-full justify-evenly">
                        <b className={currentSection === 'innovation' ? selected : unselect} onMouseEnter={() => setSection('innovation')}>
                            INDUSTRY INNOVATIONS
                            {currentSection === 'innovation' && <Image src={Arrow} alt="arrow" />}
                        </b>
                        <b className={currentSection === 'risk' ? selected : unselect} onMouseEnter={() => setSection('risk')}>
                            EMBRACING RISK
                            {currentSection === 'risk' && <Image src={Arrow} alt="arrow" />}
                        </b>
                        <b className={currentSection === 'strategy' ? selected : unselect} onMouseEnter={() => setSection('strategy')}>
                            AGILE STRATEGY
                            {currentSection === 'strategy' && <Image src={Arrow} alt="arrow" />}
                        </b>
                        <b className={currentSection === 'people' ? selected : unselect} onMouseEnter={() => setSection('people')}>
                            PEOPLE FIRST
                            {currentSection === 'people' && <Image src={Arrow} alt="arrow" />}
                        </b>
                        <b className={currentSection === 'collab' ? selected : unselect} onMouseEnter={() => setSection('collab')}>
                            COLLABORATION
                            {currentSection === 'collab' && <Image src={Arrow} alt="arrow" />}
                        </b>
                    </article>
                    <section className="bg-hpi-celeste rounded-2xl px-20 py-16 h-full w-full">
                        <CurrentSection />
                    </section>
                </section>
                <section>
                    <header className="text-center">
                        <p className="text-hpi-blue-light text-[16px] font-medium">Milestone Journey</p>
                        <h2 className="text-hpi-blue-dark text-[30px] font-bold">OUR FORWARD-THINKING PLANS</h2>
                    </header>
                    <section>
                        <MapSlider />
                    </section>
                </section>
                <section className="bg-hpi-celeste rounded-lg h-[30em] my-40 px-16 py-20">
                    <header className="text-hpi-blue-dark text-center">
                        <p>
                            Hutchison Ports London Thamesport pioneers Remote-Controlled Rail Mounted Gantry Cranes (RMGCs), marking Hutchison Ports’ first project in this innovative domain.
                        </p>
                    </header>
                    <section className="flex text-[16px] text-[#494949] font-normal">
                        <article>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum dignissimos velit hic aspernatur aut nesciunt molestiae itaque similique
                                cum eius veritatis neque omnis sunt quasi vitae quam quae minus?
                            </p>
                        </article>
                        <article></article>
                    </section>
                </section>
            </section>
        </section>
    )
}