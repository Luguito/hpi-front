'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import Text, { B1, H2 } from "../../components/text/text";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';
import { useRef, useState } from 'react';
import Play from '../../../../public/digital-solutions/play-circle.svg'
import StorageVideosClient from '@/app/components/getImage/client-videos';

export const InnovationUI = () => {
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
                <StorageVideosClient clickeable={true} className="rounded-3xl cursor-pointer w-full" name="videos/hpi-assets_veronica_final_v3 (Original).mp4" poster="digital-solutions/veronica-digital.png"/>
            </motion.article>
        </section>
    )
}