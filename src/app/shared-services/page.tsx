import Button from "../components/button/button";
import Text from "../components/text/text";
import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import Group from '../../../public/Group 62.png'
import ROSA from '../../../public/home/Shared.svg'



import DOCUMENT from '../../../public/shared-services/document-signed.svg';
import COMPARATION from '../../../public/shared-services/scale-comparison.svg';
import PLAN from '../../../public/shared-services/plan.svg';
import FTP from '../../../public/shared-services/ftp.svg';



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
        <section>
            {/* Video Section */}
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20Services%20Banner.mp4" bgColor="">
                <p className="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md">
                    UNLEASHING GROWTH <br />
                    WITH SHARED SERVICES
                </p>
            </VideoContainer>

            {/* Description */}
            <RevealOnScrollComponent>
                <section className="text-center mt-28 mb-8 snap-center">
                    <article>
                        <Text type="bold" classes="text-[30px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                            HUTCHISON PORTS SHARED SERVICES
                        </Text>
                        <Text type="medium" classes="text-[18px] text-hpi-blue-dark">
                            Our Regional Operations Centre-as-a-Service (RaaS) approach integrates <br />
                            standardisation, digitalisation, and automation of port terminal operations.
                        </Text>
                    </article>
                </section>
            </RevealOnScrollComponent>

            {/* Efficiency */}
            <RevealOnScrollComponent>
                <EfficiencyComponent />
            </RevealOnScrollComponent>

            {/* Key Achievements */}
            <RevealOnScrollComponent>
                <ServicesKeysComponent />
            </RevealOnScrollComponent>

            {/* RaaS Model */}
            <RevealOnScrollComponent>
                <RaasModelComponent>
                    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 mt-14 mx-96">
                        <HoverComponent
                            mouseEnterComponent={
                                <article className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64">
                                    <p className="text-[16px] text-hpi-white text-center w-3/5">
                                        Plug-and-Play to the standardised and <br />
                                        proven operational practice (SOP) - <br />
                                        uplifting the service level in no time! <br />
                                    </p>
                                </article>
                            }>
                            <PeaceSolution />
                        </HoverComponent>
                        <HoverComponent
                            mouseEnterComponent={
                                <article className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64">
                                    <p className="text-[16px] text-hpi-white text-center w-3/5">
                                        A scalable solution that ensures the growth
                                        of your terminal without the burden of
                                        significant upfront investments.
                                    </p>
                                </article>
                            }>
                            <GrowSolution />
                        </HoverComponent>
                        <HoverComponent
                            mouseEnterComponent={
                                <article className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64">
                                    <p className="text-[16px] text-hpi-white text-center w-3/5">
                                        A hassle-free solution! Let ROC do <br />
                                        all the work, while your terminal <br />
                                        focuses on strategy.
                                    </p>
                                </article>
                            }>
                            <CentralisedSolution />
                        </HoverComponent>
                        <HoverComponent
                            mouseEnterComponent={
                                <article className="flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64">
                                    <p className="text-[16px] text-hpi-white text-center w-3/5">
                                        Progress is fully visible to your <br />
                                        terminal, allowing for complete <br />
                                        oversight and transparency
                                    </p>
                                </article>
                            }>
                            <EyeSolution />
                        </HoverComponent>
                    </section>
                </RaasModelComponent>
            </RevealOnScrollComponent>

            {/* Core Services */}
            <RevealOnScrollComponent>
                <section className="bg-hpi-blue-dark mt-36 mb-32 snap-center">
                    <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20services%20Radar.mp4" bgColor="hpi-opacity-video">
                        <section className="absolute top-40">
                            <header className="text-center snap-start mb-40">
                                <Text type="bold" classes="text-[30px] text-hpi-white">
                                    OUR CORE SERVICES
                                </Text>
                                <p className="text-hpi-white text-[16px] mt-5">
                                    Our ROC model encompasses four core components, leveraging Hutchison Ports’ <br />
                                    operational best practices and cutting-edge technology:
                                </p>
                            </header>
                            <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-48 snap-center">
                                <section className="flex gap-4 items-start rounded-md">
                                    <Image src={DOCUMENT} alt="" width={50} />
                                    <article className="flex flex-col">
                                        <Text type="bold" classes="text-[20px] text-hpi-white flex items-center">
                                            DOCUMENT-MADE-EASY
                                        </Text>
                                        <Text type="medium" classes="text-[16px] text-hpi-white">
                                            Centralised documentation centre powered <br />
                                            by AI, streamlining communications with <br />
                                            the logistics community
                                        </Text>
                                    </article>
                                </section>
                                <section className="flex gap-4 items-start rounded-md">
                                    <Image src={COMPARATION} alt="" width={50} />
                                    <article className="flex flex-col">
                                        <Text type="bold" classes="text-[20px] text-hpi-white flex items-center">
                                            BERTH-LIFE-BALANCE
                                        </Text>
                                        <Text type="medium" classes="text-[16px] text-hpi-white">
                                            Optimising vessel traffic with our <br />
                                            intelligent berth planning system <br />
                                            (Veronica)
                                        </Text>
                                    </article>
                                </section>
                                <section className="flex gap-4 items-start rounded-md">
                                    <Image src={PLAN} alt="" width={50} />
                                    <article className="flex flex-col">
                                        <Text type="bold" classes="text-[20px] text-hpi-white flex items-center">
                                            LET-IT-STOW
                                        </Text>
                                        <Text type="medium" classes="text-[16px] text-hpi-white">
                                            Enhancing vessel stowage planning <br />
                                            for operational efficiency without <br />
                                            compromising safety
                                        </Text>
                                    </article>
                                </section>
                                <section className="flex gap-4 items-start rounded-md">
                                    <Image src={FTP} alt="" width={50} />
                                    <article className="flex flex-col">
                                        <Text type="bold" classes="text-[20px] text-hpi-white flex items-center">
                                            STACK-BY-STACK
                                        </Text>
                                        <Text type="medium" classes="text-[16px] text-hpi-white">
                                            Utilising real-time data-driven <br />
                                            algorithms for optimal yard <br />
                                            resource use
                                        </Text>
                                    </article>
                                </section>
                            </section>
                        </section>
                    </VideoContainer>
                </section>
            </RevealOnScrollComponent>


            {/* Innovate RaaS Tech */}
            <RevealOnScrollComponent>
                <InnovativeSection />
            </RevealOnScrollComponent>

            {/* ROC NOC */}
            <RevealOnScrollComponent>
                <Regional />
            </RevealOnScrollComponent>

            {/* Journey */}
            <RevealOnScrollComponent>
                <section className="snap-center mt-44">
                    <header className="text-center">
                        <Text type="bold" classes="text-[30px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                            OUR JOURNEY TO EXCELLENCE
                        </Text>
                        <Text type="medium" classes="text-[18px] text-hpi-blue-dark mt-3">
                            From ideation to expansion, our journey underscores a relentless <br />
                            pursuit of redefining terminal operations.
                        </Text>
                    </header>
                    <section className="bg-hpi-celeste mx-72 py-16 px-36 rounded-lg mt-36">
                        <TimelineComponent />
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* MAPA */}
            <RevealOnScrollComponent>
                <section className="mt-44 mb-20 bg-hpi-blue-dark snap-center">
                    <header className="text-center py-[4.8em]">
                        <Text type="bold" classes="text-[30px] text-hpi-white">
                            SUCCESS SHOWCASES
                        </Text>
                        <p className="text-[16px] text-hpi-white mt-4 font-light">
                            Our success stories across the globe—from Karachi to Hong Kong and beyond, <br />
                            illustrate the transformative impact of our ROC solutions.
                        </p>
                    </header>
                    <section className="pb-12">
                        <Maps />
                    </section>
                </section>
            </RevealOnScrollComponent>
        </section>
    );
}
