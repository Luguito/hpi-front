'use client';

import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import ROSA from '../../../../public/home/rosa.png'
import DD from '../../../../public/shared-services/DD Graphic.png'
import { motion } from 'framer-motion'
import { RevealSectionInitial, RevealTextAfterSection } from "@/app/animations/animation";


const RosaComponent = () => {
    return (
        <motion.section className="flex justify-center items-center gap-10 snap-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col">
                <article>
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light">
                        REMOTE OPERATIONS SERVICES AND <br />
                        ARCHITECTURE (ROSA)
                    </Text>
                </article>
                <article>
                    <p className="text-[16px] text-hpi-grey-dark mt-14 mb-1">
                        ROSA brings terminal operations into the digital <br />
                        age, enabling end-to-end remote management <br />
                        of multiple terminals with real-time transparency. <br />
                        This technology simplifies complex operations, <br />
                        making them more efficient and competitive.
                    </p>
                    <Button>
                        <Text type="bold" classes="text-[14px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button>
                </article>
            </section>
            <article className="py-12 rounded-3xl">
                <Image src={ROSA} alt="ROSA " height={400} />
            </article>
        </motion.section>
    )
}

const DDComponent = () => {
    return (
        <motion.section className="flex justify-center items-center gap-10 snap-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <section className="flex flex-col">
                <article>
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light">
                        DOCUMENT DIGITALISATION (DD)
                    </Text>
                </article>
                <article>
                    <p className="text-[16px] text-hpi-grey-dark mt-14 mb-1">
                        This AI-driven platform simplifies <br />
                        document handling by standardising <br />
                        and automating the classification and <br />
                        digitalisation of key information from <br />
                        emails, making processes faster <br />
                        without human intervention.
                    </p>
                    <Button>
                        <Text type="bold" classes="text-[14px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button>
                </article>
            </section>
            <article className="py-12 rounded-3xl">
                <Image src={DD} alt="DD" height={400} />
            </article>
        </motion.section>
    )
}

const arrComponent = [RosaComponent, DDComponent];

export const InnovativeSection = () => {
    const [component, setIndexComponent] = useState(0);

    const CurrentSection = arrComponent[component];

    return (
        <motion.section initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <header className="snap-center text-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                <motion.div initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="bold" classes="text-[30px]">
                        INNOVATIVE TECHNOLOGIES BEHIND ROC
                    </Text>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                    <Text type="medium" classes="text-[18px] text-hpi-blue-dark mt-5">
                        Two groundbreaking technologies reinforce ROC’s backbone, pushing the boundaries of <br />
                        terminal operations and redefining the shipping industry’s standards.
                    </Text>
                </motion.div>
            </header>
            <section className="mx-[25em] mt-14">
                <motion.section className="bg-hpi-celeste rounded-3xl px-14" initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
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