import Button from "../components/button/button";
import Text from "../components/text/text";
import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import Group from '../../../public/Group 62.png'
import ROSA from '../../../public/home/Shared.svg'
import MIND from '../../../public/shared-services/head-side-medical (1).svg'
import GROW from '../../../public/shared-services/chat-arrow-grow.svg'
import SOLUTION from '../../../public/shared-services/lightbulb-on.svg';
import EYE from '../../../public/shared-services/Group 37.svg';

import DOCUMENT from '../../../public/shared-services/document-signed.svg';
import COMPARATION from '../../../public/shared-services/scale-comparison.svg';
import PLAN from '../../../public/shared-services/plan.svg';
import FTP from '../../../public/shared-services/ftp.svg';



import { RevealOnScrollComponent } from '../animations/reveal';

export default function HomePage() {
    return (
        <section>
            {/* Video Section */}
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/landing.mp4" bgColor="bg-hpi-opacity-video">
                <Text type="medium" classes="absolute text-center text-[60px] text-hpi-white">
                    UNLEASHING GROWTH <br />
                    WITH SHARED SERVICES
                </Text>
            </VideoContainer>

            {/* Description */}
            <RevealOnScrollComponent>
                <section className="text-center my-28 snap-center">
                    <article>
                        <Text type="bold" classes="text-[30px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                            HUTCHISON PORTS SHATED SERVICES
                        </Text>
                        <Text type="medium" classes="text-[26px] text-hpi-blue-dark">
                            Our Regional Operations Centre-as-a-Service (RaaS) approach integrates <br />
                            standardisation, digitalisation, and automation of port terminal operations.
                        </Text>
                    </article>
                </section>
            </RevealOnScrollComponent>

            {/* Efficiency */}
            <RevealOnScrollComponent>
                <section className="flex mx-36 justify-center gap-10 snap-center items-center">
                    <section className="flex flex-col w-8/12">
                        <article>
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                EFFICIENCY AT EVERY TURN
                            </Text>
                        </article>
                        <article>
                            <Text type="medium" classes="text-[25px] text-hpi-grey-dark mt-14">
                                We are committed to achieving operational excellence, offering a configurable solution to drive port terminals
                                <span className="text-hpi-blue-light cursor-pointer"> efficiency, scalability, and value generation.</span>
                            </Text>
                        </article>
                    </section>
                    <article className="bg-hpi-celeste px-20 py-12 rounded-3xl">
                        <Image src={ROSA} alt="ROSA " />
                    </article>
                </section>
            </RevealOnScrollComponent>

            {/* Key Achievements */}
            <RevealOnScrollComponent>
                <section className="text-center mt-20 mb-32 snap-center">
                    <header className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[30px]">
                            SHARE SERVICES KEY ACHIEVEMENTS
                        </Text>
                    </header>

                    <section className="flex justify-between bg-hpi-celeste mx-56 px-40 py-12 rounded-3xl text-center mt-7">
                        <article className="flex flex-col items-center">
                            <Text type="bold" classes="text-hpi-blue-light text-[50px]">
                                6,700
                            </Text>
                            <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                                Managed Vessels/yr
                            </Text>
                        </article>
                        <article className="flex flex-col items-center">
                            <Text type="bold" classes="text-hpi-blue-light text-[50px]">
                                8Million
                            </Text>
                            <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                                TEUs/yr
                            </Text>
                        </article>
                        <article className="flex flex-col items-center">
                            <Text type="bold" classes="text-hpi-blue-light text-[50px]">
                                50%
                            </Text>
                            <Text type="medium" classes="text-hpi-blue-light text-[20px]">
                                More Efficient
                            </Text>
                        </article>
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* RaaS Model */}
            <RevealOnScrollComponent>
                <section className="snap-center mt-52">
                    <header className="text-center">
                        <span className="text-hpi-blue-light text-[26px]">Flexible Model</span>
                        <Text type="bold" classes="text-[40px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                            OUR REGIONAL OPERATIONS CENTRE (ROC)
                        </Text>
                        <p className="text-[20px] text-hpi-grey-dark">
                            ROC offers a flexible subscription model enabling terminals to seamlessly transition to a new operational model.
                        </p>
                    </header>
                    <section className="flex justify-center flex-wrap gap-10 mt-16">
                        <article className="flex flex-col items-center border-4 border-hpi-blue-dark py-20 rounded-2xl w-[35%] gap-6">
                            <Image src={MIND} alt="Mind Icon" />
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                Peace of mind
                            </Text>
                        </article>
                        <article className="flex flex-col items-center border-4 border-hpi-blue-dark py-20 rounded-2xl w-[35%] gap-6">
                            <Image src={GROW} alt="Mind Icon" />
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                Expand-As-You-Grow
                            </Text>
                        </article>
                        <article className="flex flex-col items-center border-4 border-hpi-blue-dark py-20 rounded-2xl w-[35%] gap-6">
                            <Image src={SOLUTION} alt="Mind Icon" />
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                Centralised Solution
                            </Text>
                        </article>
                        <article className="flex flex-col items-center border-4 border-hpi-blue-dark py-20 rounded-2xl w-[35%] gap-6">
                            <Image src={EYE} alt="Mind Icon" />
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                See All and Know All
                            </Text>
                        </article>
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* Core Services */}
            <RevealOnScrollComponent>
                <section className="bg-hpi-blue-dark mt-36 mb-32 snap-center">
                    <header className="text-center snap-start pt-20">
                        <Text type="bold" classes="text-[40px] text-hpi-white">
                            OUR CORE SERVICES
                        </Text>
                        <p className="text-hpi-white text-[20px] mt-5">
                            Our ROC model encompasses four core components, leveraging Hutchison Ports’ <br />
                            operational best practices and cutting-edge technology:
                        </p>
                    </header>
                    <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20services%20Radar.mp4" bgColor="">
                        <section className="absolute flex justify-center flex-wrap gap-28 snap-center">
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white flex items-center">
                                    <Image src={DOCUMENT} alt="" />
                                    Document-Made-Easy
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Centralised documentation centre powered <br />
                                    by AI, streamlining communications with <br />
                                    the logistics community
                                </Text>
                            </article>
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white flex items-center">
                                    <Image src={COMPARATION} alt="" />
                                    Berth-Life-Balance
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Optimising vessel traffic with our <br />
                                    intelligent berth planning system <br />
                                    (Veronica)
                                </Text>
                            </article>
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white flex items-center">
                                    <Image src={PLAN} alt="" />
                                    Let-It-Stow
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Enhancing vessel stowage planning <br />
                                    for operational efficiency without <br />
                                    compromising safety
                                </Text>
                            </article>
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white flex items-center">
                                    <Image src={FTP} alt="" />
                                    Stack-By-Stack
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Utilising real-time data-driven <br />
                                    algorithms for optimal yard <br />
                                    resource use
                                </Text>
                            </article>
                        </section>
                    </VideoContainer>
                </section>
            </RevealOnScrollComponent>


            {/* Innovate RaaS Tech */}
            <RevealOnScrollComponent>
                <section>
                    <header className="snap-center text-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[40px]">
                            INNOVATIVE TECHNOLOGIES BEHIND ROC
                        </Text>
                        <Text type="medium" classes="text-[26px] text-hpi-grey-dark mt-5">
                            Two groundbreaking technologies reinforce ROC’s backbone, pushing the boundaries of <br />
                            terminal operations and redefining the shipping industry’s standards.
                        </Text>
                    </header>
                    <section className="flex mx-36 justify-center gap-10 mt-44 snap-center">
                        <section className="flex flex-col w-2/4">
                            <article>
                                <Text type="bold" classes="text-[30px] text-hpi-blue-light">
                                    REMOTE OPERATIONS SERVICES <br />
                                    AND ARCHITECTURE (ROSA)
                                </Text>
                            </article>
                            <article>
                                <p className="text-[20px] text-hpi-grey-dark mt-14 mb-1">
                                    ROSA brings terminal operations into the digital <br />
                                    age, enabling end-to-end remote management <br />
                                    of multiple terminals with real-time transparency. <br />
                                    This technology simplifies complex operations, <br />
                                    making them more efficient and competitive.
                                </p>
                                <Button>
                                    <Text type="bold" classes="text-[20px] text-hpi-white">
                                        Learn More
                                    </Text>
                                </Button>
                            </article>
                        </section>
                        <article className="px-40 py-12 rounded-3xl">
                            <Image src={ROSA} alt="ROSA " height={500} />
                        </article>
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* ROC NOC */}
            <RevealOnScrollComponent>
                <section className="my-40 snap-start">
                    <header className="text-center">
                        <span className="text-hpi-blue-light text-[26px] mb-4">
                            Our Framework
                        </span>
                        <Text type="bold" classes="text-[40px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                            REGIONAL OPERATIONS CENTRE AND <br />
                            NACIONAL OPERATIONS CENTRE
                        </Text>
                    </header>
                    <section className="flex justify-center mt-12">
                        <Image src={Group} alt="Image" />
                    </section>
                    <footer className="mt-10 text-center px-52 snap-center">
                        <p className="text-[20px]">
                            Our Regional Operations Centre (ROC) and National Operations Centre (NOC) embody our commitment to global <br />
                            collaboration and standardised, high-quality services. From their inception, they have facilitated planning and control <br />
                            as well as backoffice functions to terminals worldwide.
                        </p>
                    </footer>
                </section>
            </RevealOnScrollComponent>

            {/* Journey */}
            <RevealOnScrollComponent>
                <section className="snap-center">
                    <header className="text-center">
                        <Text type="bold" classes="text-[40px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                            OUR JOURNEY TO EXCELLENCE
                        </Text>
                        <Text type="medium" classes="text-[26px] text-hpi-blue-dark mt-3">
                            From ideation to expansion, our journey underscores a relentless <br />
                            pursuit of redefining terminal operations.
                        </Text>
                    </header>
                    <section className="bg-hpi-celeste mx-48 rounded-md mt-36">
                        Timeline Here
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* MAPA */}
            <RevealOnScrollComponent>
                <section className="my-44 bg-hpi-blue-dark snap-center">
                    <header className="text-center py-24">
                        <Text type="bold" classes="text-[40px] text-hpi-white">
                            Success Showcases
                        </Text>
                        <p className="text-[20px] text-hpi-white">
                            Our success stories across the globe—from Karachi to Hong Kong and <br />
                            beyond—illustrate the transformative impact of our ROC solutions.
                        </p>
                    </header>
                    <section>
                        MAPA
                    </section>
                </section>
            </RevealOnScrollComponent>
        </section>
    );
}
