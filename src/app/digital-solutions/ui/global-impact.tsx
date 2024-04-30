'use client';

import MapGlobe from "./globe";
import { motion } from 'framer-motion';
import { RevealFromBottomToTop, RevealFromTopToBottom, RevealTextAfterSection} from '@/app/animations/animation';

export default function MapImpactUI() {
    return (
        <>
            <header className="text-center text-white">
                <motion.h2 className="font-bold text-[30px]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>GLOBAL IMPACT OF OUR DIGITAL SOLUTIONS</motion.h2>
                <motion.p className="font-normal text-[16px]" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    We are committed to expanding our reach and continuing to innovate at full speed.
                </motion.p>
            </header>
            <section className="mt-8">
                <MapGlobe />
            </section>
            <footer className="flex justify-center items-center text-white gap-20 mt-8">
                <article className="flex flex-col items-center">
                    <motion.b className="text-[50px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromTopToBottom}>6</motion.b>
                    <motion.p className="text-[20px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromBottomToTop}>CONTINENTS</motion.p>
                </article>
                <article className="flex flex-col items-center">
                    <motion.b className="text-[50px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromTopToBottom}>16</motion.b>
                    <motion.p className="text-[20px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromBottomToTop}>COUNTRIES</motion.p>
                </article>
                <article className="flex flex-col items-center">
                    <motion.b className="text-[50px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromTopToBottom}>30</motion.b>
                    <motion.p className="text-[20px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromBottomToTop}>MAJOR PORTS</motion.p>
                </article>
                <article className="flex flex-col items-center">
                    <motion.b className="text-[50px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromTopToBottom}>60M</motion.b>
                    <motion.p className="text-[20px] font-bold" initial="hidden" whileInView="visible" variants={RevealFromBottomToTop}>TEU PER YEAR</motion.p>
                </article>
            </footer>
        </>
    )
}