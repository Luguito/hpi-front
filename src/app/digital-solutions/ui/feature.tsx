'use client';

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from 'next/image';
import Text, { B2, H2, H3 } from '../../components/text/text';
import Button from '../../components/button/button';
import ROSA from '../../../../public/home/rosa.png'
import DD from '../../../../public/shared-services/DD Graphic.png'
import { motion } from 'framer-motion'
import { RevealSectionInitial, RevealTextAfterSection } from "@/app/animations/animation";
import Play from '../../../../public/digital-solutions/play.svg'


const VeronicaComponent = () => {
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null);

    const playVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.src = "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/VERONICA_video.mp4"
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
        video.src = "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20VERONICA%20NEW.mp4"
        video.loop = true;
        video.load();
        video.play();
        setPlaying(false);
    }
    return (
        <section className="
        flex flex-col justify-between gap-2 bg-hpi-white rounded-3xl 
        lg:flex-row lg:items-center lg:p-10 lg:gap-10
        ">
            <section className="flex flex-col justify-between lg:w-3/4 pt-7 px-7 lg:pt-0">
                <H3 color="text-hpi-blue-light font-bold">
                    VERONICA-AS-A-SERVICE
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-5 lg:mt-10">
                    Discover how Veronica, our suite of terminal
                    services, is revolutionising logistics
                    operations, increasing efficiency, and
                    productivity through automation and real-time data management.
                </B2>
            </section>
            <article className="py-5 lg:py-12 rounded-3xl cursor-pointer relative">
                <video
                    className="
                    rounded-3xl 
                    xl:h-[15em] xl:object-cover
                    2xl:max-w-none 2xl:h-[500px]
                    "
                    width={800}
                    ref={ref} onClick={playVideo} onEnded={resetVideo}
                    autoPlay loop>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20VERONICA%20NEW.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute bottom-[10px] right-4  w-[30px] lg:w-[50px] lg:right-0 lg:mt-5 cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </article>
        </section>
    )
}
const RosaComponent = () => {
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null);

    const playVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;
        // change video 
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
        <section className="
        flex flex-col justify-between gap-2 bg-hpi-white rounded-3xl 
        lg:flex-row lg:items-center lg:p-10 lg:gap-10
        ">
            <section className="flex flex-col justify-between lg:w-3/4 pt-7 px-7 lg:pt-0">
                <H3 color="text-hpi-blue-light font-bold">
                    REMOTE OPERATIONS SERVICES AND ARCHITECTURE (ROSA)
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-2 lg:mt-10">
                    Explore how ROSA, our pioneering remote operations
                    technology, is streamlining port management efficiency
                    byenabling seamless management across multiple
                    terminals with the Regional Operations Centre
                    (ROC).
                </B2>
            </section>
            <article className="py-5 lg:py-12 rounded-3xl cursor-pointer relative">
                <video
                    className="
                    rounded-3xl 
                    xl:h-[15em] xl:object-cover
                    2xl:max-w-none 2xl:h-[500px]
                    "
                    width={800}
                    ref={ref} onClick={playVideo} onEnded={resetVideo}
                    autoPlay loop>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20ROSA-preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute bottom-[10px] right-4  w-[30px] lg:w-[50px] lg:right-0 lg:mt-5 cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </article>
        </section>
    )
}
const arrComponent = [VeronicaComponent, RosaComponent];

export const FeatureUI = () => {
    const [component, setIndexComponent] = useState(0);

    const CurrentSection = arrComponent[component];
    return (
        <motion.section whileInView="visible" variants={RevealSectionInitial}>
            <header className="text-left ml-7">
                <h3 className='text-hpi-blue-light text-[12px] lg:text-[22px] xl:text-[15px] 2xl:text-[25px]'>
                    Our Stories
                </h3>
                <H2 color="text-gradient leading-[20px] 2xl:leading-[60px]">HOW WE STAY AHEAD WITH OUR INNOVATIVE SOLUTIONS</H2>
            </header>
            {/* <section className="mt-14 flex gap-5 justify-between">
                <VeronicaComponent />
                <RosaComponent />
            </section> */}
            <section className="mt-10">
                <CurrentSection />
                <Dots index={component} setIndex={setIndexComponent}></Dots>
            </section>
        </motion.section>
    )
}

const Dots = ({
    index,
    setIndex,
}: {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div className="mt-8 flex w-full justify-center gap-2">
            {arrComponent.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === index ? "bg-hpi-blue-dark" : "bg-hpi-white border-hpi-blue-dark border-2"
                            }`}
                    />
                );
            })}
        </div>
    );
};
// poner el video