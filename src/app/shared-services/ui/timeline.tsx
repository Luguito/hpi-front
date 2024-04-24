'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion'
import { RevealTextAfterSection } from '@/app/animations/animation';
import Image from 'next/image';
// Icons
import Icon1 from '../../../../public/shared-services/timeline/tap.svg'
import Icon2 from '../../../../public/shared-services/timeline/productivity.svg'
import Icon3 from '../../../../public/shared-services/timeline/lightbulb-setting.svg'
import Icon4 from '../../../../public/shared-services/timeline/expand-arrows.svg'
import Icon5 from '../../../../public/shared-services/timeline/arrow-progress.svg'
import { useEffect } from 'react';


export const TimelineComponent = () => {

    useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            console.log(entries)
        })

        let element = document.querySelectorAll('.vertical-timeline-element');

        // @ts-ignore
        element.forEach((el) => {
            observer.observe(el)
        })
    }, [])

    const iconStyle = { background: '#002E6D', color: '#fff', boxShadow: 'none', transform: 'translate(-4.5em, 2em)', width: '7em', height: '7em', display: 'flex', justifyContent: 'center', alignItems: 'center' };
    const contentStyle = { background: 'transparent', boxShadow: 'none', padding: '1em 2em' };
    return (
        <>
            <VerticalTimeline animate={false} layout="1-column-left" lineColor="#707070"
                className="bg-transparent p-0 pl-10 m-0 w-full max-w-max before:z-[-2] before:top-8 before:left-[1.4em] before:h-[90%] after:top-8 after:left-[1.4em] after:h-[90%] after:w-[5px] after:absolute after:z-[-1]">
                <VerticalTimelineElement
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    contentArrowStyle={{ border: 'none' }}
                    icon={
                        <Image src={Icon3} alt="" />

                    }
                >
                    <section>
                        <article className="flex flex-col">
                            <motion.p className="text-[16px] text-[#009BDE] font-medium" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>Ideation</motion.p>
                            <motion.h3 className="text-[50px] text-[#002E6D] font-extrabold" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>2012</motion.h3>
                        </article>
                        <motion.p className="text-[16px] text-[#494949] font-normal" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                            Hutchison Ports forms a task force of operations professionals and technology experts to rethink <br />
                            terminal operations. Within 3 months, a groundbreaking operational model is conceived with an <br />
                            aggressive rollout plan.
                        </motion.p>
                    </section>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    contentArrowStyle={{ border: 'none' }}
                    icon={
                        <Image src={Icon1} alt="" />
                    }
                >
                    <section>
                        <article className="flex flex-col">
                            <motion.p className="text-[16px] text-[#009BDE] font-medium" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>Embarkment</motion.p>
                            <motion.h3 className="text-[50px] text-[#002E6D] font-extrabold" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>2013</motion.h3>
                        </article>
                        <motion.p className="text-[16px] text-[#494949] font-normal" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                            The first ROC is established in Asia, marking the beginning of a new era in port operations management at Hutchison Ports.
                        </motion.p>
                    </section>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    contentArrowStyle={{ border: 'none' }}
                    icon={
                        <Image src={Icon2} alt="" />
                    }
                >
                    <section>
                        <article className="flex flex-col">
                            <motion.p className="text-[16px] text-[#009BDE] font-medium" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>Growth</motion.p>
                            <motion.h3 className="text-[50px] text-[#002E6D] font-extrabold" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>2014</motion.h3>
                        </article>
                        <motion.p className="text-[16px] text-[#494949] font-normal" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                            ROC begins providing support for all planning activities at terminals in Pakistan (SAPT/KICT), resulting in a <b>30% increase in productivity</b>.
                            ROC expands services to the Middle East and Africa (MEA) region within a year.
                        </motion.p>
                    </section>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    contentArrowStyle={{ border: 'none' }}
                    icon={
                        <Image src={Icon4} alt="" />
                    }
                >
                    <section>
                        <article className="flex flex-col">
                            <motion.p className="text-[16px] text-[#009BDE] font-medium" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>Expansion</motion.p>
                            <motion.h3 className="text-[50px] text-[#002E6D] font-extrabold" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>2020</motion.h3>
                        </article>
                        <motion.p className="text-[16px] text-[#494949] font-normal" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                            ROC{"'"}s success leads to its implementation at HIT, Hutchison Ports{"'"} flagship terminal in Hong Kong.
                            Managing thousands of vessels monthly, the ROC implementation led to a <b>60% reduction in human error</b>.
                        </motion.p>
                    </section>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    contentArrowStyle={{ border: 'none' }}
                    icon={
                        <Image src={Icon5} alt="" />
                    }
                >
                    <section>
                        <article className="flex flex-col">
                            <motion.p className="text-[16px] text-[#009BDE] font-medium" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}> Future Directions</motion.p>
                            <motion.h3 className="text-[50px] text-[#002E6D] font-extrabold" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>2024</motion.h3>
                        </article>
                        <motion.p className="text-[16px] text-[#494949] font-normal" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                            Hutchison Ports will introduce NOC in Egypt, set to manage all its operational planning and back-office operations, showcasing our commitment to pushing the boundaries.
                        </motion.p>
                    </section>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}
