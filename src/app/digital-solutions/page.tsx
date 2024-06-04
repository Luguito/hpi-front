import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import { InnovationUI } from "./ui/innovation";

// Icons 

import { FeatureUI } from "./ui/feature";
import { SwipeCarousel } from "../components/carousel/carousel";

import PowerSolutionUI from "./ui/power";
import ForeFrontUI from "./ui/forefront";
import MapImpactUI from "./ui/global-impact";
import { BlogsUI } from "../components/blog/blog";
import { H1, H2, H5 } from "../components/text/text";
import { BlogsDSUI } from "./ui/blogs";


export default function DigitalSolutionsPage() {
    return (
        <section className="mb-32 overflow-hidden">
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20Banner.mp4" bgColor="">
                <H1 color="absolute text-center text-hpi-white font-bold text-shadow-md leading-[26px] md:leading-[65px] 2xl:leading-[80px]">
                    REVOLUTIONISING CONTAINER <br />
                    TERMINALS WITH DIGITAL <br />
                    SOLUTIONS
                </H1>
            </VideoContainer>
            <section>
                <article className="mx-5 lg:mx-56">
                    <InnovationUI />
                </article>
                {/* Unleash power solutions */}
                <article className="mx-5 lg:mx-56 mt-20">
                    <PowerSolutionUI />
                </article>
                {/* MAPS */}
                <article className="mx-5 mt-5 lg:mx-56 lg:mb-32 lg:py-20">
                    <MapImpactUI />
                </article>
                {/* Forefront */}
                <article className="mx-5 mt-7 lg:mx-56">
                    <ForeFrontUI />
                </article>
                {/*  */}
                <article className="mx-5 lg:mx-56 mt-20">
                    <FeatureUI />
                </article>
                {/*  */}
                <section className="mx-5 lg:mx-56 mt-20">
                    <header className="text-left">
                        <H5 color="text-hpi-blue-light font-medium">
                            Explore More
                        </H5>
                        <H2 color="text-gradient">
                            STAY INFORMED WITH OUR BLOGS
                        </H2>
                    </header>
                    <BlogsDSUI />
                </section>
            </section>
        </section >
    )
}