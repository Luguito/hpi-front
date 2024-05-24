'use client';

import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import Text, { B1, B2, H2, H3 } from '../../components/text/text';
import Button from '../../components/button/button';
import ROSA from '../../../../public/home/rosa.png'
import DD from '../../../../public/shared-services/DD Graphic.png'
import { motion } from 'framer-motion'
import { RevealSectionInitial, RevealTextAfterSection } from "@/app/animations/animation";


const RosaComponent = () => {
    return (
        <motion.section className="flex flex-col justify-between items-center gap-10 bg-hpi-white rounded-3xl p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col">
                <H3 color="text-hpi-blue-light font-bold">
                    REMOTE OPERATIONS <br /> 
                    SERVICES AND ARCHITECTURE <br />
                    (ROSA)
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-10">
                    ROSA brings terminal operations into the digital age,
                    enabling end-to-end remote management of multiple 
                    terminals with real-time transparency. This technology 
                    simplifies complex operations, making them more 
                    efficient and competitive.
                </B2>
            </section>
            <article className="py-12 rounded-3xl">
                <video width={600} autoPlay loop>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/ROSA_gif.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </article>
        </motion.section>
    )
}

const DDComponent = () => {
    return (
        <motion.section className="flex flex-col justify-between items-center gap-10 bg-hpi-white rounded-3xl p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col justify-between">
                <H3 color="text-hpi-blue-light font-bold">
                    DOCUMENT DIGITALISATION <br />
                    (DD)
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-10">
                    This AI-driven platform simplifies document handling
                    by standardising and automating the classification
                    and digitalisation of key information from emails, 
                    making processes faster without human intervention.
                </B2>
            </section>
            <article className="py-12 rounded-3xl">
                <video width={600} autoPlay loop>
                    <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/DD_gif.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </article>
        </motion.section>
    )
}

const arrComponent = [RosaComponent, DDComponent];

export const InnovativeSection = () => {
    const [component, setIndexComponent] = useState(0);

    const CurrentSection = arrComponent[component];

    return (
        <motion.section className="mx-80" initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <header className="text-left ml-7">
                <H2 color="text-gradient">INNOVATIVE TECHNOLOGIES BEHIND ROC</H2>
                <B1 color="text-hpi-blue-dark font-medium">
                    Two groundbreaking technologies reinforce ROC{'’'}s backbone, pushing the boundaries of
                    terminal operations and redefining the shipping industry{'’'}s standards.
                </B1>
            </header>

            <section className="mt-14 flex gap-5 justify-between">
                <RosaComponent />
                <DDComponent />
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