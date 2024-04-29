'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import Text from "../../components/text/text";
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
        <section className="flex flex-col justify-center snap-center items-center gap-10 mt-28">
            <section className="flex flex-col text-center">
                <motion.article initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                    <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                        INNOVATION AND TECHNOLOGICAL <br />
                        SOPHISTICATION ARE AT OUR CORE.
                    </Text>
                </motion.article>
                <article className="mt-3">
                    <motion.p className="text-[18px] text-hpi-blue-dark font-normal" initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                        We relentlessly pursue advancements to remain leaders in the shipping industry,<br />
                        adopting Digital Solutions to redefine logistics operations worldwide.
                    </motion.p>
                </article>
            </section>
            <motion.article className="py-12 rounded-3xl relative" initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                <video poster="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/F-frame-Sweden.png"
                    width={1000}
                    className="rounded-3xl cursor-pointer"
                    ref={ref} onClick={playVideo} onEnded={resetVideo}>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/HPI-Sweden.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Image src={Play} alt="" className={`absolute top-[40%] left-[45%] cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
            </motion.article>
        </section>
    )
}