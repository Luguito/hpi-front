import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import { InnovationUI } from "./ui/innovation";

// Icons 

import { FeatureUI } from "./ui/feature";
import { SwipeCarousel } from "../components/carousel/carousel";

import PowerSolutionUI from "./ui/power";
import ForeFrontUI from "./ui/forefront";
import MapImpactUI from "./ui/global-impact";
import Text, { H1, H2, H3, H5 } from "../components/text/text";
import { BlogsDSUI } from "./ui/blogs";
import { Metadata } from "next";
import Button from "../components/button/button";


export const metadata: Metadata = {
    title: 'Digital Solutions | Hutchison Ports',
}

export default function DigitalSolutionsPage() {
    return (
        <section className="mb-32 overflow-hidden">
            {/* Break lines */}
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20Banner.mp4" bgColor="">
                <H1 color="absolute text-center text-hpi-white font-bold text-shadow-md leading-[26px] md:leading-[65px] 2xl:leading-[80px]">
                    REVOLUTIONISING CONTAINER <br />
                    TERMINALS WITH DIGITAL <br />
                    SOLUTIONS
                </H1>
            </VideoContainer>
            <section>
                <article className="mx-5 xl:mx-28 2xl:mx-56">
                    <InnovationUI />
                </article>
                {/* Unleash power solutions */}
                <article className="mx-5 mt-5 xl:mt-14 xl:mx-28 2xl:mx-56">
                    <PowerSolutionUI />
                </article>
                {/* MAPS */}
                <article className="mx-5 mt-5 xl:mt-14 xl:mx-28 2xl:mx-56 2xl:mb-32">
                    <MapImpactUI />
                </article>
                {/* Forefront */}
                <article className="mx-5 mt-7 xl:mt-14 xl:mx-28 2xl:mx-56">
                    <ForeFrontUI />
                </article>
                {/*  */}
                <article className="mx-5 xl:mt-14 xl:mx-28 2xl:mx-56 mt-20">
                    <FeatureUI />
                </article>
                {/*  */}
                <section className="mx-5 xl:mt-14 xl:mx-28 2xl:mx-56 mt-20">
                    <header className="text-left ml-7">
                        <H5 color="text-hpi-blue-light font-medium">
                            Explore More
                        </H5>
                        <H2 color="text-gradient">
                            STAY INFORMED WITH OUR BLOGS
                        </H2>
                    </header>
                    <BlogsDSUI />
                </section>

                <footer>
                    <section className="text-center mt-24">
                        <H3 color="text-gradient font-bold mx-24 2xl:mx-56">
                            EXPLORE HOW WE CAN TRANSFORM CONTAINER
                            TERMINAL OPERATIONS TOGETHER
                        </H3>
                        <article>
                            <Button>
                                <Text type="bold" classes="text-[16px] text-hpi-white">
                                    <a href="mailto:grp_ops_product_management_team@hutchisonports.com">Contact Us</a>
                                </Text>
                            </Button>
                        </article>
                    </section>
                </footer>
            </section>
        </section >
    )
}