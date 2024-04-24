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
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light leading-[22px]">
                        VERONICA-AS-A-SERVICE
                    </Text>
                </article>
                <article>
                    <p className="text-[16px] text-hpi-grey-dark mt-5 mb-1">
                        Discover how Veronica, our suite of terminal  <br />
                        services, is revolutionising logistics <br />
                        operations, increasing efficiency, and <br />
                        productivity through automation and real- <br />
                        time data management.
                    </p>
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
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light leading-[22px]">
                        Remote Operations Services <br />
                        and Architecture (ROSA)
                    </Text>
                </article>
                <article>
                    <p className="text-[16px] text-hpi-grey-dark mt-5 mb-1">
                        Explore how ROSA, our pioneering remote operations <br />
                        technology, is streamlining port management efficiency <br />
                        byenabling seamless management across multiple <br />
                        terminals with the Regional Operations Centre <br />
                        (ROC).
                    </p>
                    {/* <Button>
                        <Text type="bold" classes="text-[14px] text-hpi-white">
                            Learn More
                        </Text>
                    </Button> */}
                </article>
            </section>
            <article className="py-12 rounded-3xl">
                <Image src={DD} alt="DD" height={400} />
            </article>
        </motion.section>
    )
}

const arrComponent = [RosaComponent, DDComponent];

export const FeatureUI = () => {
    const [component, setIndexComponent] = useState(0);

    const CurrentSection = arrComponent[component];

    return (
        <motion.section initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
            <section className="mt-14">
                <motion.section className="bg-hpi-celeste rounded-3xl" initial="hidden" whileInView="visible" variants={RevealSectionInitial}>
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