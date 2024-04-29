import VideoContainer from "../components/video-container/video-container";
import Image from 'next/image'
import { InnovationUI } from "./ui/innovation";

// Icons 

import MapGlobe from "./ui/globe";
import { FeatureUI } from "./ui/feature";
import { SwipeCarousel } from "../components/carousel/carousel";

import PowerSolutionUI from "./ui/power";
import ForeFrontUI from "./ui/forefront";


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
                {/* Forefront */}
                <article className="px-80">
                    <ForeFrontUI />
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