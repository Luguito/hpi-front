'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
// Icons
import Icon1 from '../../../../public/shared-services/timeline/light.svg'
import Icon2 from '../../../../public/shared-services/timeline/pin.svg'
import Icon3 from '../../../../public/shared-services/timeline/growth-stack.svg'
import Icon4 from '../../../../public/shared-services/timeline/boxes.svg'
import Icon5 from '../../../../public/shared-services/timeline/future-flag.svg'
import { useEffect } from 'react';
import { B2, H3, H5 } from '@/app/components/text/text';
import { motion } from 'framer-motion'

export const TimelineComponent = () => {

    useEffect(() => {
        let index = 0;
        let observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                let icon = entry.target.firstChild;
                let parent = entry.target.parentElement as HTMLElement;

                // Change color icon.
                (icon as HTMLElement).style.backgroundColor = "#002E6D";

                const regex = /after:h-\[(100|\d{1,2}(?:\.\d+)?)(?:\.\d+)?%\]/;
                const parentClassList = parent.classList;
                const currentClass = Array.from(parentClassList).find(cls => regex.test(cls));


                function replace() {
                    let x = [33, 40, 50, 85, 85]

                    console.log(`after:h-[${x[index]}%]`)

                    parentClassList.replace(currentClass as string, `after:h-[${x[index]}%]`);
                }

                if (currentClass) {
                    observer.unobserve(entry.target)
                    // replace()
                    // index++
                }
            })
        }, {
            threshold: 0.5
        })

        let element = document.querySelectorAll('.vertical-timeline-element');

        // @ts-ignore
        element.forEach((el) => {
            observer.observe(el)
        })
    }, [])

    const iconStyle = { backgroundColor: '#EFEFEF', color: '#fff', boxShadow: 'none', transform: 'translate(-4.5em, 2em)', width: '7em', height: '7em', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1, transition: 'all 1s'};
    const contentStyle = { background: 'transparent', boxShadow: 'none', padding: '1em 2em' };
    return (
        <>
            <VerticalTimeline animate={false} layout="1-column-left" lineColor="#EBEBEB"
                className="bg-transparent p-0 pl-10 m-0 w-full max-w-max 
                before:top-8 before:left-[1.4em] before:h-[85%] 
                after:top-8 after:left-[1.4em] after:h-[85%] after:w-[5px] after:absolute after:bg-hpi-blue-dark after:transition ">
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
                            <H5 color="text-hpi-blue-light font-medium">Ideation</H5>
                            <motion.p whileHover={{ scale: 1.02 }} className='text-[50px] font-extrabold text-hpi-blue-dark mt-0'>2012</motion.p>
                        </article>
                        <B2 color="font-medium text-hpi-body-grey">
                            Hutchison Ports forms a task force of operations professionals and technology experts to rethink
                            terminal operations. Within 3 months, a groundbreaking operational model is conceived with an
                            aggressive rollout plan.
                        </B2>
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
                            <H5 color="text-hpi-blue-light font-medium">Embarkment</H5>
                            <motion.p whileHover={{ scale: 1.02 }} className='text-[50px] font-extrabold text-hpi-blue-dark mt-0'>2013</motion.p>
                        </article>
                        <B2 color="font-medium text-hpi-body-grey">
                            The first ROC is established in Asia, marking the beginning of a new era in port operations management at Hutchison Ports.
                        </B2>
                    </section>
                </VerticalTimelineElement>
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
                            <H5 color="text-hpi-blue-light font-medium">Growth</H5>
                            <motion.p whileHover={{ scale: 1.02 }} className='text-[50px] font-extrabold text-hpi-blue-dark mt-0'>2014</motion.p>
                        </article>
                        <B2 color="font-medium text-hpi-body-grey">
                            ROC begins providing support for all planning activities at terminals in Pakistan (SAPT/KICT), resulting in a <b>30% increase in productivity</b>.
                            ROC expands services to the Middle East and Africa (MEA) region within a year.
                        </B2>
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
                            <H5 color="text-hpi-blue-light font-medium">Expansion</H5>
                            <motion.p whileHover={{ scale: 1.02 }} className='text-[50px] font-extrabold text-hpi-blue-dark mt-0'>2020</motion.p>
                        </article>
                        <B2 color="font-medium text-hpi-body-grey">
                            ROC{"'"}s success leads to its implementation at HIT, Hutchison Ports{"'"} flagship terminal in Hong Kong.
                            Managing thousands of vessels monthly, the ROC implementation led to a <b>60% reduction in human error</b>.
                        </B2>
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
                            <H5 color="text-hpi-blue-light font-medium">Future Directions</H5>
                            <motion.p whileHover={{ scale: 1.02 }} className='text-[50px] font-extrabold text-hpi-blue-dark mt-0'>2024</motion.p>
                        </article>
                        <B2 color="font-medium text-hpi-body-grey">
                            Hutchison Ports will introduce NOC in Egypt, set to manage all its operational planning and back-office operations, showcasing our commitment to pushing the boundaries.
                        </B2>
                    </section>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}
