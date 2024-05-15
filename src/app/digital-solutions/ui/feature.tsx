'use client';

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from 'next/image';
import Text, { B2, H2, H3 } from '../../components/text/text';
import Button from '../../components/button/button';
import ROSA from '../../../../public/home/rosa.png'
import DD from '../../../../public/shared-services/DD Graphic.png'
import { motion } from 'framer-motion'
import { RevealSectionInitial, RevealTextAfterSection } from "@/app/animations/animation";
import Play from '../../../../public/digital-solutions/play-circle.svg'


const VeronicaComponent = () => {
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null);

    const playVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.src = "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/ROSA_video.mp4"
        video.controls = true;
        video.loop = false;
        video.load();
        video.play();
        setPlaying(true);
    }

    const resetVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.controls = false;
        video.src = "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20VERONICA-preview.mp4"
        video.loop = true;
        video.load();
        video.play();
        setPlaying(false);
    }
    return (
        <motion.section className="flex flex-col justify-between items-center gap-10 bg-hpi-white rounded-3xl p-10 w-2/4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col justify-between">
                <H3 color="text-hpi-blue-light font-bold">
                    VERONICA-AS-A-SERVICE
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-10">
                    Discover how Veronica, our suite of terminal  <br />
                    services, is revolutionising logistics <br />
                    operations, increasing efficiency, and <br />
                    productivity through automation and real-time data management.
                </B2>
            </section>
            <article className="py-12 rounded-3xl cursor-pointer relative">
                <video
                    className="rounded-3xl"
                    width={600}
                    ref={ref} onClick={playVideo} onEnded={resetVideo}
                    autoPlay loop>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20VERONICA-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute top-[40%] left-[45%] cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </article>
        </motion.section>
    )
}
const RosaComponent = () => {
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null);

    const playVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.src = "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/ROSA_video.mp4"
        video.controls = true;
        video.loop = false;
        video.load();
        video.play();
        setPlaying(true);
    }

    const resetVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.controls = false;
        video.src = "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20ROSA-preview.mp4"
        video.loop = true;
        video.load();
        video.play();
        setPlaying(false);
    }

    return (
        <motion.section className="flex flex-col justify-between items-center gap-10 bg-hpi-white rounded-3xl p-10 w-2/4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col justify-between">
                <H3 color="text-hpi-blue-light font-bold">
                    Remote Operations Services
                    and Architecture (ROSA)
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-10">
                    Explore how ROSA, our pioneering remote operations
                    technology, is streamlining port management efficiency
                    byenabling seamless management across multiple
                    terminals with the Regional Operations Centre
                    (ROC).
                </B2>
            </section>
            <article className="py-12 rounded-3xl cursor-pointer relative">
                <video
                    className="rounded-3xl"
                    width={600}
                    ref={ref} onClick={playVideo} onEnded={resetVideo}
                    autoPlay loop>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20ROSA-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute top-[40%] left-[45%] cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </article>
        </motion.section>
    )
}

export const FeatureUI = () => {

    return (
        <motion.section initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <header className="text-left ml-7">
                <H3 color="text-hpi-blue-light">Empowering Terminals</H3>
                <H2 color="text-gradient"> FEATURING STORIES</H2>
            </header>
            <section className="mt-14 flex gap-5 justify-between">
                <VeronicaComponent />
                <RosaComponent />
            </section>
        </motion.section>
    )
}