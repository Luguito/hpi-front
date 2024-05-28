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

export default function HomePage() {
    return (
        <section className="overflow-hidden">
            {/* Video Section */}
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20Services%20Banner.mp4" bgColor="">
                <H1 initial="hidden" animate="visible" color="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md">
                    UNLEASHING GROWTH <br />
                    WITH SHARED SERVICES
                </H1>
            </VideoContainer>

            {/* Description */}
            <RevealOnScrollComponent>
                <section className="text-center mt-16 mb-32 snap-center">
                    <H2 color="text-gradient">
                        HUTCHISON PORTS SHARED SERVICES
                    </H2>
                    <B1 color="text-hpi-blue-dark font-medium">
                        Our Regional Operations Centre-as-a-Service (ROC) approach integrates standardisation, <br />
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
                <section className="mt-36 mb-40 mx-80">
                    <header className="text-left snap-start mb-10 ml-7">
                        <H5 color="text-hpi-blue-light font-medium">
                            Our Services
                        </H5>
                        <H2 color="text-gradient">CORE COMPONENTS OF ROC</H2>
                        <B1 color="text-hpi-blue-dark font-medium">
                            Our ROC model encompasses four core components, leveraging <br />
                            Hutchison Ports’ operational best practices and cutting-edge technology:
                        </B1>
                    </header>
                    <section className="bg-hpi-blue-dark rounded-3xl h-full pb-10">
                        <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20services%20Radar.mp4" bgColor="hpi-opacity-video">
                            <section className="absolute top-24">
                                <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-x-32 gap-y-20">
                                    <section className="flex flex-col items-center gap-4 rounded-md">
                                        <Image src={DOCUMENT} alt="" className="mt-[-0.5em]" />
                                        <article className="flex flex-col text-center">
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
                                    <section className="flex flex-col items-center gap-4 rounded-md">
                                        <Image src={PLAN} alt="" className="mt-[-2em]" />
                                        <article className="flex flex-col text-center">
                                            <H3 color="font-bold text-hpi-white">
                                                LET-IT-STOW
                                            </H3>
                                            <B2 color="font-medium text-hpi-white">
                                                Enhancing vessel stowage planning <br />
                                                for operational efficiency without <br />
                                                compromising safety.
                                            </B2>
                                        </article>
                                    </section>
                                    <section className="flex flex-col items-center gap-4  rounded-md">
                                        <Image src={COMPARATION} alt="" className="mt-[-0.5em]" />
                                        <article className="flex flex-col text-center">
                                            <H3 color="font-bold text-hpi-white">
                                                BERTH-LIFE-BALANCE
                                            </H3>
                                            <B2 color="font-medium text-hpi-white">
                                                Optimising vessel traffic with our <br />
                                                intelligent berth planning system <br />
                                                (Veronica).
                                            </B2>
                                        </article>
                                    </section>
                                    <section className="flex flex-col gap-4 items-center rounded-md">
                                        <Image src={FTP} alt="" className="mt-[0.1em]" />
                                        <article className="flex flex-col text-center">
                                            <H3 color="font-bold text-hpi-white">
                                                STACK-BY-STACK
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
                <section className="mt-36 mx-80">
                    <header className="text-left ml-7">
                        <H5 color="text-hpi-blue-light font-medium">Our Journey</H5>
                        <H2 color="text-gradient">FROM IDEATION TO EXPANSION</H2>
                        <B1 color="text-hpi-blue-dark font-medium">
                            Our journey underscores a relentless <br />
                            pursuit of redefining terminal operations.
                        </B1>
                    </header>
                    <section className="bg-hpi-white py-16 px-36 rounded-3xl mt-20" id="content">
                        <TimelineComponent />
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* MAPA */}
            <RevealOnScrollComponent>
                <section className="mt-24 mb-20 bg-hpi-blue-dark mx-80 rounded-3xl">
                    <header className="text-left p-[4.8em]">
                        <H2 color="text-hpi-white">SUCCESS SHOWCASES</H2>
                        <B2 color="text-hpi-white font-medium mt-5">
                            Our success stories across the globe, from Karachi to Hong Kong and beyond, illustrate the transformative impact
                            of our ROC solutions.
                        </B2>
                    </header>
                    <section className="pb-12">
                        <Maps />
                        <div className="relative bg-hpi-blue-dark w-24 h-[2em] left-0 top-[-2em]"></div>
                    </section>
                </section>
            </RevealOnScrollComponent>
        </section>
    );
}
