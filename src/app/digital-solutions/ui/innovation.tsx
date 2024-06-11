'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import Text, { B1, H2 } from "../../components/text/text";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';
import { useRef, useState } from 'react';
import Play from '../../../../public/digital-solutions/play-circle.svg'

export const InnovationUI = () => {
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
        setPlaying(false)
    }
    return (
        <section className="flex flex-col gap-10 mt-10 md:mt-28 xl:mt-16 2xl:mt-28">
            <section className="flex flex-col text-center">
                <H2 color="text-gradient leading-[26px] md:leading-[65px]">
                    INNOVATION AND TECHNOLOGICAL
                    SOPHISTICATION ARE AT OUR CORE
                </H2>
                <article className="mt-3">
                    <B1 color="text-hpi-blue-dark font-medium">
                        We relentlessly pursue advancements to remain leaders in the shipping industry,
                        adopting Digital Solutions to redefine logistics operations worldwide.
                    </B1>
                </article>
            </section>
            <motion.article className="p-2 md:p-12 relative bg-hpi-white rounded-3xl" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <video poster="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/veronica-digital.png"
                    className="rounded-3xl cursor-pointer w-full"
                    ref={ref} onClick={playVideo} onEnded={resetVideo}>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/veronica_final_v3%20(Original).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute top-[25%] left-[35%] md:top-[40%] md:left-[45%] cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </motion.article>
        </section>
    )
}