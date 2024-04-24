import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import { InnovationUI } from "./ui/innovation";

// Icons 
import Icon1 from '../../../public/digital-solutions/1.svg'
import Icon2 from '../../../public/digital-solutions/2.svg'
import Icon3 from '../../../public/digital-solutions/3.svg'
import Icon4 from '../../../public/digital-solutions/4.svg'
import MapGlobe from "./ui/globe";
import { FeatureUI } from "./ui/feature";
import { SwipeCarousel } from "../components/carousel/carousel";


export default function DigitalSolutionsPage() {
    return (
        <section className="mb-32">
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Home%20Banner.mp4" bgColor="">
                <p className="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md leading-[80px]">
                    REVOLUTIONISING CONTAINER <br />
                    TERMINALS WITH DIGITAL <br />
                    SOLUTIONS
                </p>
            </VideoContainer>
            <section>
                <article className="px-80">
                    <InnovationUI />
                </article>
                {/*  */}
                <article className="px-80 mt-72">
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
                        <details>
                            <summary className="expansion-summary flex items-center gap-16">
                                <article className="h-12 w-12 rounded-3xl flex justify-center items-center bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102]">
                                    <Image src={Icon1} alt="Icon" />
                                </article>
                                <p className="font-bold text-hpi-blue-dark text-[20px]">TERMINAL OPERATING SYSTEM (TOS)</p>
                            </summary>
                            <section className="pl-28">
                                <p className="text-[16px] font-medium text-[#707070]">
                                    A comprehensive solution designed to streamline terminal processes by providing real-time data for enhanced visibility and control, forecasting capabilities, data-driven decision support, and a consolidated data platform for analytics and machine learning. <br />
                                    <b className="mt-10">TOS for Container Terminal Operations:</b>  nGen/Veronica
                                    <br />
                                    <b className="mt-10">TOS for General Cargo Operations:</b>  GCMS
                                </p>
                            </section>
                        </details>
                        <details>
                            <summary className="expansion-summary flex items-center gap-16">
                                <article className="h-12 w-12 rounded-3xl flex justify-center items-center bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102]">
                                    <Image src={Icon2} alt="Icon" />
                                </article>
                                <p className="font-bold text-hpi-blue-dark text-[20px]">DIGITISING THE LOGISTICS COMMUNITY</p>
                            </summary>
                            <section className="pl-28 text-[16px] font-medium text-[#707070]">
                                <p>
                                    We have developed a set of digital tools to stay connected with the logistics community.
                                </p>
                                <p>
                                    <b>Hutchison Ports Data Exchange (HPDX):</b> A centralised data exchange gateway for the shipping community. <br />
                                    <b>Document Digitalisation (DD):</b> A state-of-the-art AI application for digitising communication with customers and documenting processes, scalable to support multiple ports globally. <br />
                                    <b>Ubi: </b> A mobile app strategically designed to enhance hinterland connectivity, offering customers improved insights and faster access to landside terminal processes.
                                </p>
                            </section>
                        </details>
                        <details>
                            <summary className="expansion-summary flex items-center gap-16">
                                <article className="h-12 w-12 rounded-3xl flex justify-center items-center bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102]">
                                    <Image src={Icon3} alt="Icon" />
                                </article>
                                <p className="font-bold text-hpi-blue-dark text-[20px]">PRODUCTIVITY AND SAFETY AUTOMATION</p>
                            </summary>
                            <section className="pl-28 text-[16px] font-medium text-[#707070]">
                                <p>
                                    Our solutions leverage AI technology for yard utilisation optimisation, and a holistic mathematical model for equipment and job scheduling algorithms. This ensures higher productivity, operational cost savings, improved safety and quality at the terminal.
                                </p>
                                <p>
                                    <b>Autonomous Truck (AT)</b> operations management <br />
                                    <b>Equipment Agnostic Yard Crane Scheduling:</b>  ASC, ARTG <br />
                                    <b> Auto-Strad</b>   Operations Management <br />
                                    <b>Gate Automation</b>
                                </p>
                            </section>
                        </details>
                        <details>
                            <summary className="expansion-summary flex items-center gap-16">
                                <article className="h-12 w-12 rounded-3xl flex justify-center items-center bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102]">
                                    <Image src={Icon4} alt="Icon" />
                                </article>
                                <p className="font-bold text-hpi-blue-dark text-[20px]">LOGISTICS OPTIMISATION</p>
                            </summary>
                            <section className="pl-28 text-[16px] font-medium text-[#707070]">
                                <p>
                                    Our end-to-end logistics management services streamline operations from start to finish, maximising efficiency and minimising costs.
                                </p>
                                <p>
                                    PARIS - <b>Multi-modal Optimisation App.</b> To optimise external truck logistics deployment. <br />
                                    WMS - <b>Warehouse Management System.</b>  To streamline the operations of cargo handling.
                                </p>
                            </section>
                        </details>
                    </section>
                </article>
                {/* MAPS */}
                <article className="bg-hpi-blue-dark mt-36 mb-32 py-20">
                    <header className="text-center text-white">
                        <h2 className="font-bold text-[30px] ">GLOBAL IMPACT OF OUR DIGITAL SOLUTIONS</h2>
                        <p className="font-normal text-[16px]">
                            We are committed to expanding our reach and continuing to innovate at full speed.
                        </p>
                    </header>
                    <section className="mt-8">
                        <MapGlobe />
                    </section>
                    <footer className="flex justify-center items-center text-white gap-20 mt-8">
                        <article className="flex flex-col items-center">
                            <b className="text-[50px] font-bold">6</b>
                            <p className="text-[20px] font-bold">CONTINENTS</p>
                        </article>
                        <article className="flex flex-col items-center">
                            <b className="text-[50px] font-bold">16</b>
                            <p className="text-[20px] font-bold">COUNTRIES</p>
                        </article>
                        <article className="flex flex-col items-center">
                            <b className="text-[50px] font-bold">28</b>
                            <p className="text-[20px] font-bold">MAJOR PORTS</p>
                        </article>
                        <article className="flex flex-col items-center">
                            <b className="text-[50px] font-bold">60M</b>
                            <p className="text-[20px] font-bold">TEU PER YEAR</p>
                        </article>
                    </footer>
                </article>
                {/*  */}
                <article className="px-80">
                    <header className="text-center">
                        <small className="font-medium text-hpi-blue-light text-[16px]">Our Solutions</small>
                        <h2 className="bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text text-[30px] font-bold">
                            AT THE FOREFRONT OF PORT INNOVATION
                        </h2>
                    </header>
                    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-4 mt-11">
                        <section className="flex flex-col bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8">
                            {/* <Image src={'../../'} alt="" width={50} className="mt-[-0.5em]" /> */}
                            <img src="" alt="LOGO" />
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">ONE TOS, ONE WORLD</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    The 1st global port group to provide a cloud-based <br />
                                    TOS in SaaS model, and to standardise operations <br />
                                    across 30 terminals in 16 countries with our home- <br />
                                    grown TOS (nGen/Veronica).
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8">
                            {/* <Image src="" alt="" width={50} className="mt-[-0.5em]" /> */}
                            <img src="" alt="LOGO" />
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">ONCE-FOR-ALL CONNECTION</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    HPDX offers a single data exchange for connecting <br />
                                    all terminals with the logistics world, including the <br />
                                    blockchain-based Global Shipping Business <br />
                                    Network (GSBN).
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8">
                            {/* <Image src={''} alt="" width={50} className="mt-[-0.5em]" /> */}
                            <img src="" alt="LOGO" />
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">OPERATIONS ANYTIME, ANYWHERE</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Revolutionising remote operations management <br />
                                    with our Remote Operations Services and <br />
                                    Architecture (ROSA), enabling efficient multi-port <br />
                                    management.
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8">
                            {/* <Image src={''} alt="" width={50} className="mt-[-0.5em]" /> */}
                            <img src="" alt="LOGO" />
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">UNLOCKING EFFICIENCY THROUGH AUTOMATION</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Our advanced scheduling system optimises the <br />
                                    management of all types of automation <br />
                                    equipment and job scheduling.
                                </p>
                            </article>
                        </section>
                    </section>
                </article>
                {/*  */}
                <article className="px-80 mt-72">
                    <header className="text-center">
                        <small className="font-medium text-hpi-blue-light text-[16px]">Empowering Terminals</small>
                        <h2 className="bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text text-[30px] font-bold">
                            FEATURING STORIES
                        </h2>
                    </header>
                    <FeatureUI />
                </article>
                {/*  */}
                <section className="mt-80">
                    <header className="text-center">
                        <small className="font-medium text-hpi-blue-light text-[16px]">Explore More</small>
                        <h2 className="bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text text-[30px] font-bold">
                            STAY INFORMED WITH OUR BLOGS
                        </h2>
                    </header>
                    <section className="flex gap-6 mx-36 mt-24">
                        <SwipeCarousel></SwipeCarousel>
                    </section>
                </section>
            </section>
        </section >
    )
}