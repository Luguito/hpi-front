'use client';

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from 'next/image';
import Text from '../../components/text/text';
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

        video.play();
        video.controls = true;
        setPlaying(true);
    }

    const resetVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.controls = false;
        video.load();
        setPlaying(false);
    }
    return (
        <motion.section className="flex justify-center items-center gap-10 snap-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col w-3/4 pl-32">
                <article>
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light leading-[22px]">
                        VERONICA-AS-A-SERVICE
                    </Text>
                </article>
                <article>
                    <p className="text-[16px] text-hpi-grey-dark mt-5 mb-1">
                        Discover how Veronica, our suite of terminal  <br />
                        services, is revolutionising logistics <br />
                        operations, increasing efficiency, and <br />
                        productivity through automation and real-time data management.
                    </p>
                </article>
            </section>
            <article className="py-12 rounded-3xl cursor-pointer relative">
                <video poster="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20ROSA.gif"
                    width={1400}
                    ref={ref} onClick={playVideo} onEnded={resetVideo}>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/ROSA_video.mp4" type="video/mp4" />
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

        video.play();
        video.controls = true;
    }

    const resetVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.controls = false;
        video.load();
    }

    return (
        <motion.section className="flex justify-center items-center gap-10 snap-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col w-3/4 pl-32">
                <article>
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light leading-[22px]">
                        Remote Operations Services <br />
                        and Architecture (ROSA)
                    </Text>
                </article>
                <article>
                    <p className="text-[16px] text-hpi-grey-dark mt-5 mb-1">
                        Explore how ROSA, our pioneering remote operations
                        technology, is streamlining port management efficiency
                        byenabling seamless management across multiple
                        terminals with the Regional Operations Centre
                        (ROC).
                    </p>
                </article>
            </section>
            <article className="py-12 rounded-3xl cursor-pointer relative">
                <video poster="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Digital%20Solutions%20VERONICA.gif"
                    width={1400}
                    ref={ref} onClick={playVideo} onEnded={resetVideo}>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/VERONICA_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute top-[40%] left-[45%] cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </article>
        </motion.section>
    )
}

const arrComponent = [VeronicaComponent,RosaComponent];

export const FeatureUI = () => {
    const [component, setIndexComponent] = useState(0);

    const CurrentSection = arrComponent[component];

    return (
        <motion.section initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <section className="mt-14">
                <motion.section className="bg-hpi-celeste rounded-3xl h-[30em]" initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
                    <CurrentSection />
                </motion.section>
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
        <div className="mt-16 flex w-full justify-center gap-2">
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