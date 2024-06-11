import VideoContainer from "../components/video-container/video-container";
import { MapSlider } from "./ui/mapSlider";
import { B2, H1, H2, H3 } from "../components/text/text";

import { Metadata } from "next";
import { Innovation, Collaboration, People, Risk, Strategy } from "./ui/sections";



export const metadata: Metadata = {
    title: 'Automation | Hutchison Ports',
}
export default function AutomationPage() {
    const listSections = [Innovation, Risk, Strategy, People, Collaboration]

    return (
        <section>
            <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Automation%20Banner%20video_1.mp4" bgColor="">
                <H1 color="absolute text-center text-hpi-white font-bold text-shadow-md">
                    MASTERING THE ART OF <br />
                    TERMINAL AUTOMATION
                </H1>
            </VideoContainer>
            {/* SECTION  */}
            <section className="px-5 xl:px-24 2xl:px-64">
                {
                    listSections.map((Component, index) => (
                        <Component key={index + 1} />
                    ))
                }
                <section className="mt-10">
                    <header className="text-left">
                        <H3 color="text-hpi-blue-light font-medium">Milestone Journey</H3>
                        <H2 color="text-gradient">OUR FORWARD-THINKING PLANS</H2>
                    </header>
                    <section className="bg-hpi-white rounded-3xl mt-5 mb-20 ">
                        <MapSlider />
                    </section>
                </section>
            </section>
        </section>
    )
}

