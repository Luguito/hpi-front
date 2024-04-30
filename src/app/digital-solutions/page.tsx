import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import { InnovationUI } from "./ui/innovation";

// Icons 

import { FeatureUI } from "./ui/feature";
import { SwipeCarousel } from "../components/carousel/carousel";

import PowerSolutionUI from "./ui/power";
import ForeFrontUI from "./ui/forefront";
import MapImpactUI from "./ui/global-impact";


export default function DigitalSolutionsPage() {
    return (
        <section className="mb-32">
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20Banner.mp4" bgColor="">
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
                {/* Unleash power solutions */}
                <article className="px-80 mt-72">
                    <PowerSolutionUI />
                </article>
                {/* MAPS */}
                <article className="bg-hpi-blue-dark mt-36 mb-32 py-20">
                   <MapImpactUI />
                </article>
                {/* Forefront */}
                <article className="px-80">
                    <ForeFrontUI />
                </article>
                {/*  */}
                <article className="px-80 mt-72">
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