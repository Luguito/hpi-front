'use client'

import { useEffect, useState } from "react";
import VideoContainer from "../components/video-container/video-container";
import { MapSlider } from "./ui/mapSlider";
import Image from 'next/image'
import Arrow from "../../../public/automation/blue-arrow.svg";
import { ContainerDatesInformation } from "./ui/info-map";
import { B2, H1, H2, H3 } from "../components/text/text";
import Plus from '../../../public/automation/plus.svg'
import Minus from '../../../public/automation/minus.svg'

import I_Innovation from '../../../public/automation/Pioneer in the industry.jpg';
import I_Risk from '../../../public/automation/Leaders take risk.jpeg'
import I_Agility from '../../../public/automation/Agility.png'
import I_People from '../../../public/automation/People always our first priority.jpg'
import I_Team from '../../../public/automation/Together as a team.jpg'

const Innovation = () => {
    const [isOpen, setOpen] = useState(false);

    const isExtended = () => {
        let doc = document.getElementById('innovation') as HTMLDetailsElement

        setOpen(doc.open ?? false);
    }

    useEffect(() => {
        isExtended();
    }, [])

    return (
        <article className="mt-10">
            <details onClick={() => setOpen(!isOpen)} id="innovation">
                <summary className="flex gap-5 lg:gap-10 cursor-pointer">
                    <IconSideName open={isOpen} />
                    <H2 color={`${!isOpen ? 'text-hpi-grey-light' : 'text-hpi-blue-dark'} font-bold`}>
                        INDUSTRY INNOVATIONS
                    </H2>
                </summary>
                <section className="bg-hpi-white rounded-3xl shadow-lg mt-5 lg:mt-10">
                    <section className="flex flex-col md:flex-row">
                        <article className="
                            py-7 px-7
                            lg:py-14 lg:px-20
                            ">
                            <header>
                                <H3 color="text-hpi-blue-light font-bold">PIONEER IN THE INDUSTRY</H3>
                            </header>
                            <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                Hutchison Ports has always been leading the way towards the next generation of terminal operations with its Smart Port Strategy,
                                pushing forward with a global roll out of the many automated and innovative solutions.
                                We have achieved many world-firsts in terminal operations with our cutting-edge technology, such as:
                            </B2>
                            <ul>
                                <li className="flex items-start">
                                    <ArrowComponent />
                                    <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                        Achieving <strong> {'‘'}true{'’'} mixed traffic mode terminal operations with Autonomous Trucks (AT)</strong> in Hutchison Ports Thailand Terminal D.
                                    </B2>
                                </li>
                                <li className="flex items-start">
                                    <ArrowComponent />
                                    <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                        The <strong>first</strong>  in the world to have a <strong>fully remote-controlled terminal</strong> with both Remote-Controlled QCs and Remote- Controlled Rubber-Tyred Gantry Cranes (RTGCs) in Hutchison Ports Thailand Terminal D.
                                    </B2>
                                </li>
                                <li className="flex items-start">
                                    <ArrowComponent />
                                    <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                        Operating <strong>Remote-Controlled RTGCs</strong> with mixed traffic in Hutchison Ports HIT Terminal 9 North.
                                    </B2>
                                </li>
                                <li className="flex items-start">
                                    <ArrowComponent />
                                    <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                        <strong>First to operate automated terminal</strong> with ASCs and AGVs in Hutchison Ports ECT Delta.
                                    </B2>
                                </li>
                            </ul>
                        </article>
                        <article style={{ aspectRatio: "16/9" }}>
                            <Image src={I_Innovation} alt="" fetchPriority="high" className="
                                object-cover rounded-br-2xl rounded-bl-2xl h-[15em]
                                lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none lg:h-full
                                " />
                        </article>
                    </section>
                </section>
            </details>
        </article>
    )
}

const Risk = () => {
    const [isOpen, setOpen] = useState(false);

    const isExtended = () => {
        let doc = document.getElementById('risk') as HTMLDetailsElement;
        setOpen(doc.open ?? false);
    }

    useEffect(() => {
        isExtended();
    }, [])
    return (
        <>
            <article className="mt-10">
                <details onClick={() => setOpen(!isOpen)} id="risk">
                    <summary className="flex gap-5 lg:gap-10 cursor-pointer">
                        <IconSideName open={isOpen} />
                        <H2 color={`${!isOpen ? 'text-hpi-grey-light' : 'text-hpi-blue-dark'} font-bold`}>
                            EMBRACING RISK
                        </H2>
                    </summary>
                    <section className="bg-hpi-white rounded-3xl shadow-lg mt-5 lg:mt-10">
                        <section className="flex flex-col md:flex-row">
                            <article className="
                            py-7 px-7
                            lg:py-14 lg:px-20
                            ">
                                <header>
                                    <H3 color="text-hpi-blue-light font-bold">LEADERS MANAGE RISKS</H3>
                                </header>
                                <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                    We manage risks while developing innovative solutions for our operations.
                                    We build our solutions based on rigorous research and studies. Every decision is made by our professional team with careful calculations, verification and validation.
                                </B2>
                                <ul>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            Every new technology we develop has a <strong>key performance index</strong> to assess its performance, allowing us to refine it to perfection.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            <strong>Risk assessments</strong> and seeking independent professional opinions have become a standard before introducing automated equipment.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We do not let the lack of precedent stop us from innovating. We re-designed operation workflow and traffic policies to make the <strong> {"'"}true{"'"} mixed traffic mode</strong> AT operations happen.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            Simulations are conducted thoroughly to predict every scenario and reduce risk. We use <strong>traffic simulations to study mixed traffic scenarios</strong> and port simulations to study operations efficiency and effectiveness enhancement.
                                        </B2>
                                    </li>
                                </ul>
                            </article>
                            <article className="xl:w-[193%] 2xl:w-[177%]" style={{ aspectRatio: "16/9" }}>
                                <Image src={I_Risk} alt="" fetchPriority="high" className="
                                object-cover rounded-br-2xl rounded-bl-2xl h-[15em]
                                lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none lg:h-full
                                " />
                            </article>
                        </section>
                    </section>
                </details>
            </article>
        </>
    )
}

const Strategy = () => {
    const [isOpen, setOpen] = useState(false);

    const isExtended = () => {
        let doc = document.getElementById('strategy') as HTMLDetailsElement;
        setOpen(doc.open ?? false);
    }

    useEffect(() => {
        isExtended();
    }, [])
    return (
        <>
            <article className="mt-10">
                <details onClick={() => setOpen(!isOpen)} id="strategy">
                    <summary className="flex gap-5 lg:gap-10 cursor-pointer">
                        <IconSideName open={isOpen} />
                        <H2 color={`${!isOpen ? 'text-hpi-grey-light' : 'text-hpi-blue-dark'} font-bold`}>
                            AGILE STRATEGY
                        </H2>
                    </summary>
                    <section className="bg-hpi-white rounded-3xl shadow-lg mt-5 lg:mt-10">
                        <section className="flex flex-col md:flex-row">
                            <article className="
                            py-7 px-7
                            lg:py-14 lg:px-20
                            ">
                                <header>
                                    <H3 color="text-hpi-blue-light font-bold">THE ESSENCE OF OUR RECIPE</H3>
                                </header>
                                <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                    We are fast and agile in developing and deploying new technologies to improve our operations. We strive to deliver the solution in the shortest time possible.
                                </B2>
                                <ul>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We developed and <strong>deployed Remote-Controlled Quay Cranes (RCQCs)</strong> in 2015, and within one year, we familiarised, reinforced, and standardised them. Within five years, we have successfully deployed RCQCs to 10 terminals around the world.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We began the <strong>Autonomous Truck (AT) journey in 2018</strong>, and the first batch of ATs came to daily operations within 2 years.
                                        </B2>
                                    </li>
                                </ul>
                            </article>
                            <article className="xl:w-[202%] 2xl:w-[183%]" style={{ aspectRatio: "16/9" }}>
                                <Image src={I_Agility} alt="" fetchPriority="high" className="
                                object-cover rounded-br-2xl rounded-bl-2xl h-[15em]
                                lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none lg:h-full
                                " />
                            </article>
                        </section>
                    </section>
                </details>
            </article>
        </>
    )
}

const People = () => {
    const [isOpen, setOpen] = useState(false);

    const isExtended = () => {
        let doc = document.getElementById('people') as HTMLDetailsElement;

        setOpen(doc.open ?? false);
    }

    useEffect(() => {
        isExtended();
    }, [])
    return (
        <>
            <article className="mt-10">
                <details onClick={() => setOpen(!isOpen)} id="people">
                    <summary className="flex gap-5 lg:gap-10 cursor-pointer">
                        <IconSideName open={isOpen} />
                        <H2 color={`${!isOpen ? 'text-hpi-grey-light' : 'text-hpi-blue-dark'} font-bold`}>
                            PEOPLE FIRST

                        </H2>
                    </summary>
                    <section className="bg-hpi-white rounded-3xl shadow-lg mt-5 lg:mt-10">
                        <section className="flex flex-col md:flex-row">
                            <article className="
                            py-7 px-7
                            lg:py-14 lg:px-20
                            ">
                                <header>
                                    <H3 color="text-hpi-blue-light font-bold">ALWAYS OUR FIRST PRIORITY</H3>
                                </header>
                                <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                    We care about our <strong>people as our most important asset</strong>. We provide them with the safest and best working environment possible.
                                </B2>
                                <ul>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We engage third-party consultants to prove independent views and ensure framework, certificate, and ISO standards are <strong>compliant</strong>.

                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            <strong>Safety standards and risk assessments</strong> are taken seriously to ensure every possible precaution is taken.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            Our <strong>yard surveillance system</strong> is always on to keep track of what is happening in the yard.
                                        </B2>
                                    </li>
                                </ul>
                            </article>
                            <article className="xl:w-[113%] 2xl:w-[100%]" style={{ aspectRatio: "16/9" }}>
                                <Image src={I_People} alt="" fetchPriority="high" className="
                                object-cover rounded-br-2xl rounded-bl-2xl h-[15em]
                                lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none lg:h-full
                                " />
                            </article>
                        </section>
                    </section>
                </details>
            </article>
        </>
    )
}

const Collaboration = () => {
    const [isOpen, setOpen] = useState(false);

    const isExtended = () => {
        let doc = document.getElementById('collab') as HTMLDetailsElement;

        setOpen(doc.open ?? false);
    }

    useEffect(() => {
        isExtended();
    }, [])

    return (
        <>
            <article className="mt-10">
                <details onClick={() => setOpen(!isOpen)} id="collab">
                    <summary className="flex gap-5 lg:gap-10 cursor-pointer">
                        <IconSideName open={isOpen} />
                        <H2 color={`${!isOpen ? 'text-hpi-grey-light' : 'text-hpi-blue-dark'} font-bold`}>
                            COLLABORATION
                        </H2>
                    </summary>
                    <section className="bg-hpi-white rounded-3xl shadow-lg mt-5 lg:mt-10">
                        <section className="flex flex-col md:flex-row">
                            <article className="
                            py-7 px-7
                            lg:py-14 lg:px-20
                            ">
                                <header>
                                    <H3 color="text-hpi-blue-light font-bold">TOGETHER AS A TEAM</H3>
                                </header>
                                <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                    We are experts who know experts. Excelling in one area is not enough to solve complex problems. <strong>Teaming up with experts in different fields</strong> opens possibilities that cannot be achieved alone. We work with different groups to make things happen.
                                </B2>
                                <ul className="list-none">
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We partner with <strong>traffic experts</strong> to perform traffic policy–junctions management to study driver behavior in AT projects.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We partner with <strong>equipment management experts</strong> to co-develop solutions to optimise equipment utilisation.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We partner with <strong>crane manufacturers</strong> to develop tailor-made equipment to suit our design.
                                        </B2>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowComponent />
                                        <B2 color="text-hpi-grey-dark md:text-hpi-grey-dark md:text-hpi-body-grey font-medium">
                                            We provide a <strong>driver education program</strong> to train drivers on how to deal with new terminal policies.
                                        </B2>
                                    </li>
                                </ul>
                            </article>
                            <article className="
                            xl:w-[202%]
                            2xl:w-[181%]
                            " style={{ aspectRatio: "16/9" }}>
                                <Image src={I_Team} alt="" fetchPriority="high" className="
                                object-cover rounded-br-2xl rounded-bl-2xl h-[15em]
                                lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none lg:h-full
                                " />
                            </article>
                        </section>
                    </section>
                </details>
            </article>
        </>
    )
}



export default function AutomationPage() {
    const [currentSectionMap, setSectionMap] = useState("1991")

    function changeSectionByMap(x: any) {
        setSectionMap(x)
    }

    return (
        <section>
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Automation%20Banner%20video_1.mp4" bgColor="">
                <H1 color="absolute text-center text-hpi-white font-bold text-shadow-md">
                    MASTERING THE ART OF <br />
                    TERMINAL AUTOMATION
                </H1>
            </VideoContainer>
            {/* SECTION  */}
            <section className="px-5 xl:px-24 2xl:px-64">
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
                    <section className="bg-hpi-white rounded-3xl mt-5 mb-20 ">
                        <article className="flex justify-center items-center pt-5 lg:hidden">
                            <select className="
                            bg-hpi-blue-light font-bold text-hpi-white p-2 rounded-xl
                            "
                                onChange={({ target: { value } }) => changeSectionByMap(parseInt(value))}>
                                <option value="1991">1991</option>
                                <option value="1993">1993</option>
                                <option value="1995">1995</option>
                                <option value="2007">2007</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2030">2030</option>
                            </select>
                        </article>
                        <MapSlider changeSection={changeSectionByMap} />
                        <div className="relative bg-hpi-white w-16 h-[2em] left-0 top-[-2em]"></div>
                        <section className="px-4 py-5 lg:py-10 lg:px-20">
                            <ContainerDatesInformation date={currentSectionMap} />
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

const ArrowComponent = () => {
    return (
        <Image src={Arrow} alt="" className="pt-2 mr-4" />
    )
}

const IconSideName = ({ open }: { open: boolean }) => {
    return (
        open
            ?
            <Image src={Minus} alt="" className="w-5 xl:w-10 2xl:w-auto" />
            :
            <Image src={Plus} alt="" className="w-5 xl:w-10 2xl:w-auto" />
    )
}