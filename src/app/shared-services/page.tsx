import Button from "../components/button/button";
import Text, { B1, B2, H1, H2, H3, H5 } from "../components/text/text";
import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import Group from '../../../public/Group 62.png'
import ROSA from '../../../public/home/Shared.svg'



import DOCUMENT from '../../../public/shared-services/document-signed.png';
import COMPARATION from '../../../public/shared-services/balance.svg';
import PLAN from '../../../public/shared-services/ship.png';
import FTP from '../../../public/shared-services/stack.png';



import { HoverComponent } from "../components/hover/hover";
import { CentralisedSolution, EyeSolution, GrowSolution, PeaceSolution } from "./ui/operations";
import { RevealOnScrollComponent } from '../animations/reveal';
import { Maps } from "../components/maps/maps";
import { InnovativeSection } from "./ui/innovative";
import { Regional } from "./ui/regional-operations";
import { EfficiencyComponent } from "./ui/efficiency";
import { ServicesKeysComponent } from "./ui/services-key";
import { RaasModelComponent } from "./ui/raas-model";
import { TimelineComponent } from "./ui/timeline";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Shared Services | Hutchison Ports',
}
export default function HomePage() {
    return (
        <section className="overflow-hidden">
            {/* Video Section */}
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20Services%20Banner.mp4" bgColor="">
                <H1 initial="hidden" animate="visible" color="absolute text-center text-hpi-white font-bold text-shadow-md">
                    UNLEASHING GROWTH <br />
                    WITH SHARED SERVICES
                </H1>
            </VideoContainer>

            {/* Description */}
            <RevealOnScrollComponent>
                <section className="
                text-center mt-16 mx-4 
                xl:mb-16 
                2xl:mb-32">
                    <H2 color="text-gradient">
                        HUTCHISON PORTS SHARED SERVICES
                    </H2>
                    <B1 color="text-hpi-blue-dark font-medium mt-4 md:mt-0 xl:mt-2 xl:mx-[21em] xl:text-[18px] 2xl:mx-56 2xl:leading-[36px]">
                        Our Regional Operations Centre-as-a-Service (ROC) approach integrates standardisation,
                        digitalisation, and automation of port terminal operations.
                    </B1>
                </section>
            </RevealOnScrollComponent>

            {/* Efficiency */}
            {/* @ts-ignore  */}
            <RevealOnScrollComponent>
                <EfficiencyComponent />
            </RevealOnScrollComponent>


            {/* ROC NOC */}
            <Regional />


            {/* RaaS Model */}
            <RevealOnScrollComponent>
                <RaasModelComponent />
            </RevealOnScrollComponent>

            {/* Core Services */}
            <RevealOnScrollComponent>
                <section className="
                mx-5 mt-7 mb-8
                xl:mx-28  xl:mt-14
                2xl:mt-24 2xl:mb-40 2xl:mx-44
                ">
                    <header className="text-left snap-start mb-10 ml-2 lg:ml-7">
                        <H5 color="text-hpi-blue-light font-medium">
                            Our Services
                        </H5>
                        <H2 color="text-gradient xl:mt-2">CORE COMPONENTS OF ROC</H2>
                        <B1 color="text-hpi-blue-dark font-medium xl:mt-5">
                            Our ROC model encompasses four core components, leveraging
                            Hutchison Ports’ operational best practices and cutting-edge technology:
                        </B1>
                    </header>
                    <section className="bg-hpi-blue-dark rounded-3xl py-5 flex h-[28em] lg:h-full">
                        <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20services%20Radar.mp4" bgColor="hpi-opacity-video">
                            <section className="absolute top-1 lg:top-24">
                                <section className="
                                grid grid-cols-1 grid-rows-4 justify-center items-center gap-y-5
                                lg:gap-x-32 lg:gap-y-20
                                xl:grid-cols-2 xl:gap-y-32
                                ">
                                    <section className="
                                    flex flex-row items-center gap-4 rounded-md
                                    lg:flex-col
                                    ">
                                        <Image src={DOCUMENT} alt="" layout="responsive" className="
                                        mt-[-0.5em] w-[3em]
                                        xl:w-[5em]
                                        " />
                                        <article className="flex flex-col text-left md:text-center">
                                            <H3 color="font-bold text-hpi-white">
                                                DOCUMENT-MADE-EASY
                                            </H3>
                                            <B2 color="font-medium text-hpi-white">
                                                Centralised documentation centre powered <br />
                                                by AI, streamlining communications with <br />
                                                the logistics community.
                                            </B2>
                                        </article>
                                    </section>
                                    <section className="
                                    flex flex-row items-center gap-4 rounded-md
                                    lg:flex-col
                                    ">
                                        <Image src={PLAN} alt="" className="mt-[-2em] w-[3em] xl:mt-[-1em] xl:w-[5em]" />
                                        <article className="flex flex-col text-left md:text-center">
                                            <H3 color="font-bold text-hpi-white">
                                                KPI DRIVEN STOWAGE PLANNING
                                            </H3>
                                            <B2 color="font-medium text-hpi-white">
                                                Enhancing vessel stowage planning <br />
                                                for operational efficiency without <br />
                                                compromising safety.
                                            </B2>
                                        </article>
                                    </section>
                                    <section className="
                                    flex flex-row items-center gap-4 rounded-md
                                    lg:flex-col
                                    ">
                                        <Image src={COMPARATION} alt="" className="mt-[-0.5em] w-[2em] xl:w-[3.5em]" />
                                        <article className="flex flex-col text-left md:text-center ml-[1em] md:ml-0">
                                            <H3 color="font-bold text-hpi-white">
                                                BERTH OPTIMISATION
                                            </H3>
                                            <B2 color="font-medium text-hpi-white">
                                                Optimising vessel traffic with our <br />
                                                intelligent berth planning system <br />
                                                (Veronica).
                                            </B2>
                                        </article>
                                    </section>
                                    <section className="
                                    flex flex-row items-center gap-4 rounded-md
                                    lg:flex-col
                                    ">
                                        <Image src={FTP} alt="" className="mt-[0.1em] w-[3em] xl:w-[5em]" />
                                        <article className="flex flex-col text-left md:text-center">
                                            <H3 color="font-bold text-hpi-white">
                                                HOLISTIC YARD PLANNING
                                            </H3>
                                            <B2 color="font-medium text-hpi-white">
                                                Utilising real-time data-driven <br />
                                                algorithms for optimal yard <br />
                                                resource use.
                                            </B2>
                                        </article>
                                    </section>
                                </section>
                            </section>
                        </VideoContainer>
                    </section>
                </section>
            </RevealOnScrollComponent>


            {/* Innovate RaaS Tech */}
            <RevealOnScrollComponent>
                <InnovativeSection />
            </RevealOnScrollComponent>

            {/* Journey */}
            <RevealOnScrollComponent>
                <section className="mx-5 mt-7 xl:mx-28 xl:mt-14 2xl:mx-44 2xl:mt-36">
                    <header className="text-left ml-7">
                        <H5 color="text-hpi-blue-light font-medium">Our Journey</H5>
                        <H2 color="text-gradient xl:mt-2">FROM IDEATION TO EXPANSION</H2>
                        <B1 color="text-hpi-blue-dark font-medium">
                            Our journey underscores a relentless
                            pursuit of redefining terminal operations.
                        </B1>
                    </header>
                    <section className="bg-hpi-white px-5 py-5 lg:py-16 lg:px-36 rounded-3xl mt-8" id="content">
                        <TimelineComponent />
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* MAPA */}
            <RevealOnScrollComponent>
                <section className="mt-7 mb-20 xl:mt-16 bg-hpi-blue-dark mx-5 rounded-3xl xl:mx-28 2xl:mx-44 2xl:mt-28">
                    <header className="text-left p-5 lg:p-[4.8em]">
                        <H2 color="text-hpi-white">SUCCESS SHOWCASES</H2>
                        <B2 color="text-hpi-white font-medium mt-3 lg:mt-5">
                            Our success stories across the globe, from Karachi to Hong Kong and beyond, illustrate the transformative impact
                            of our ROC solutions.
                        </B2>
                    </header>
                    <section className="lg:pb-12">
                        <Maps />
                        <div className="relative bg-hpi-blue-dark w-24 h-[2em] left-0 top-[-2em]"></div>
                    </section>
                </section>
            </RevealOnScrollComponent>
        </section>
    );
}
