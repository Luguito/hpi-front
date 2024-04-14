import Button from "../components/button/button";
import Text from "../components/text/text";
import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import Group from '../../../public/Group 62.png'
import ROSA from '../../../public/home/Shared.svg'
import { RevealOnScrollComponent } from '../animations/reveal';

export default function HomePage() {
    return (
        <section>
            {/* Video Section */}
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/landing.mp4" bgColor="bg-hpi-opacity-video">
                <Text type="medium" classes="absolute text-center text-[80px] text-hpi-white">
                    Unleashing Growth <br />
                    with Shared Services <br />
                    (RaaS)
                </Text>
            </VideoContainer>

            {/* Description */}
            <RevealOnScrollComponent>
                <section className="text-center my-40 snap-center">
                    <article className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[60px]">
                            Hutchison Ports Shared Services (RaaS)
                        </Text>
                        <Text type="medium" classes="text-[40px]">
                            Our Regional Operations Centre-as-a-Service (RaaS) approach integrates standardisation, digitalisation, and automation of port terminal operations
                        </Text>
                    </article>
                </section>
            </RevealOnScrollComponent>

            {/* Efficiency */}
            <RevealOnScrollComponent>
                <section className="flex mx-36 justify-center gap-10 snap-center">
                    <section className="flex flex-col w-2/4">
                        <article>
                            <Text type="bold" classes="text-[50px] text-hpi-blue-dark">
                                Efficiency at Every Turn
                            </Text>
                        </article>
                        <article>
                            <Text type="medium" classes="text-[25px] text-hpi-grey-dark mt-14">
                                We are committed to achieving operational excellence, offering a configurable solution to drive port terminals
                                <span className="text-hpi-blue-light cursor-pointer"> efficiency, scalability, and value generation.</span>
                            </Text>
                        </article>
                    </section>
                    <article className="bg-hpi-celeste px-40 py-12 rounded-3xl">
                        <Image src={ROSA} alt="ROSA " />
                    </article>
                </section>
            </RevealOnScrollComponent>

            {/* Key Achievements */}
            <RevealOnScrollComponent>
                <section className="text-center my-40 snap-center">
                    <header className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[60px]">
                            Share Services Key Achievements
                        </Text>
                    </header>

                    <section className="flex justify-between bg-hpi-celeste px-40 py-12 rounded-3xl text-center mt-32">
                        <article className="flex flex-col items-center">
                            <Text type="bold" classes="text-hpi-blue-light text-[100px]">
                                6,700
                            </Text>
                            <Text type="medium" classes="text-hpi-blue-light text-[40px]">
                                Managed Vessels/yr
                            </Text>
                        </article>
                        <article className="flex flex-col items-center">
                            <Text type="bold" classes="text-hpi-blue-light text-[100px]">
                                8Million
                            </Text>
                            <Text type="medium" classes="text-hpi-blue-light text-[40px]">
                                TEUs/yr
                            </Text>
                        </article>
                        <article className="flex flex-col items-center">
                            <Text type="bold" classes="text-hpi-blue-light text-[100px]">
                                50%
                            </Text>
                            <Text type="medium" classes="text-hpi-blue-light text-[40px]">
                                More Efficient
                            </Text>
                        </article>
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* RaaS Model */}
            <RevealOnScrollComponent>
                <section className="snap-center">
                    <header className="text-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[60px]">
                            Our RaaS Flexible Model
                        </Text>
                    </header>
                    <section className="flex justify-center flex-wrap gap-10 mt-32">
                        <article className="flex flex-col items-center border-2 border-hpi-blue-dark py-20 rounded-md w-[35%]">
                            <span>icon</span>
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                Peace of mind
                            </Text>
                        </article>
                        <article className="flex flex-col items-center border-2 border-hpi-blue-dark py-20 rounded-md w-[35%]">
                            <span>icon</span>
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                Expand-As-You-Grow
                            </Text>
                        </article>
                        <article className="flex flex-col items-center border-2 border-hpi-blue-dark py-20 rounded-md w-[35%]">
                            <span>icon</span>
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                Centralised Solution
                            </Text>
                        </article>
                        <article className="flex flex-col items-center border-2 border-hpi-blue-dark py-20 rounded-md w-[35%]">
                            <span>icon</span>
                            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                                See All and Know All
                            </Text>
                        </article>
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* Core Services */}
            <RevealOnScrollComponent>
                <section className="bg-hpi-blue-dark my-40 snap-center">
                    <header className="text-center snap-start pt-28">
                        <Text type="bold" classes="text-[60px] text-hpi-white">
                            Our core services
                        </Text>
                    </header>
                    <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Shared%20services%20Radar.mp4" bgColor="">
                        <section className="absolute flex justify-center flex-wrap gap-28 py-32 snap-center">
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white">
                                    Document-Made-Easy
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Centralised documentation centre powered <br />
                                    by AI, streamlining communications with <br />
                                    the logistics community
                                </Text>
                            </article>
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white">
                                    Berth-Life-Balance
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Optimising vessel traffic with our intelligent berth planning system (Veronica)
                                </Text>
                            </article>
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white">
                                    Let-It-Stow
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Enhancing vessel stowage planning for operational efficiency without compromising safety
                                </Text>
                            </article>
                            <article className="flex flex-col rounded-md w-[35%]">
                                <Text type="bold" classes="text-[30px] text-hpi-white">
                                    Stack-By-Stack
                                </Text>
                                <Text type="medium" classes="text-[30px] text-hpi-white">
                                    Utilising real-time data-driven algorithms for optimal yard resource use
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
                        <Text type="bold" classes="text-[60px]">
                            Innovative Technologies Behind RaaS
                        </Text>
                        <Text type="medium" classes="text-[35px] text-hpi-grey-dark mt-10">
                            Two groundbreaking technologies reinforce RaaS’s backbone, <br />
                            pushing the boundaries of terminal operations and redefining the <br />
                            shipping industry’s standards.
                        </Text>
                    </header>
                    <section className="flex mx-36 justify-center gap-10 mt-44 snap-center">
                        <section className="flex flex-col w-2/4">
                            <article>
                                <Text type="bold" classes="text-[40px] text-hpi-blue-dark">
                                    Document Digitalisation (DD)
                                </Text>
                            </article>
                            <article>
                                <Text type="medium" classes="text-[25px] text-hpi-grey-dark mt-14">
                                    This AI-driven platform simplifies document handling by standardising and automating the classification and digitalisation of key information from emails, making processes faster without human intervention.
                                </Text>
                                <Button>
                                    <Text type="bold" classes=" text-hpi-white">
                                        Learn More
                                    </Text>
                                </Button>
                            </article>
                        </section>
                        <article className="bg-hpi-celeste px-40 py-12 rounded-3xl">
                            <Image src={ROSA} alt="ROSA " />
                        </article>
                    </section>
                </section>
            </RevealOnScrollComponent>

            {/* ROC NOC */}
            <RevealOnScrollComponent>
                <section className="my-40 snap-start">
                    <header className="text-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[60px]">
                            The ROC and NOC Framework
                        </Text>
                    </header>
                    <section className="flex justify-center mt-12">
                        <Image src={Group} alt="Image" />
                    </section>
                    <footer className="mt-28 text-center px-52 snap-center">
                        <Text type="medium" classes="text-[35px] text-hpi-blue-dark">
                            Our Regional Operations Centre (ROC) and National Operations Centre (NOC)
                            embody our commitment to global collaboration and standardised,
                            high-quality services. From their inception, they have facilitated planning
                            and control as well as backoffice functions to terminals worldwide.
                        </Text>
                    </footer>
                </section>
            </RevealOnScrollComponent>

            {/* Journey */}
            <RevealOnScrollComponent>
                <section className="snap-center">
                    <header className="text-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[60px]">
                            Our Journey to Excellence
                        </Text>
                        <Text type="medium" classes="text-[35px] text-hpi-blue-dark mt-10">
                            From ideation to expansion, our journey underscores <br />
                            a relentless pursuit of redefining terminal operations.
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
                        <Text type="bold" classes="text-[50px] text-hpi-white">
                            Success Showcases
                        </Text>
                        <Text type="medium" classes="text-[35px] text-hpi-white mt-12">
                            Our success stories across the globe—from Karachi to Hong Kong and <br />
                            beyond—illustrate the transformative impact of our RaaS solutions.
                        </Text>
                    </header>
                    <section>
                        MAPA
                    </section>
                </section>
            </RevealOnScrollComponent>
        </section>
    );
}
