'use client'
import { motion } from 'framer-motion';
import { H3, B2 } from '../text/text';


import UBI from '../../../../public/home/ubi.png'
import Graphic from '../../../../public/home/graphic.png'
import Truck from '../../../../public/home/13.jpg'
import Arrow from "../../../../public/home/arrow.svg";

import Image from 'next/image';

import { RevealTextAfterSection } from '../../animations/animation'

// ITS WORKING THIS STAGGER
const variantParent = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.4,
        }
    }
}
export const BlogsUI = () => {
    return (
        <>
            <motion.section className="flex flex-col gap-10 mt-10" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <section className="flex justify-center gap-10">
                    <motion.article
                        className="bg-white rounded-3xl shadow-lg flex"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="py-10 px-14">
                            <H3 color="text-hpi-blue-light font-bold">
                                UBI, THE <br />
                                NEW APP <br />
                                FOR TRUCK <br />
                                DRIVERS
                            </H3>
                            <B2 color="text-hpi-body-grey font-medium mt-5">
                                Check whether the <br />
                                container is on the <br />
                                vessel, or ready for <br />
                                pickup or collected.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                                Read More
                            </B2>
                        </article>
                        <Image src={UBI} alt={""} width={400} />
                    </motion.article>
                    <motion.article
                        className="bg-white rounded-3xl shadow-lg flex"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="p-10">
                            <H3 color="text-hpi-blue-light font-bold">
                                VERONICA <br />
                                WILL GET <br />
                                SMARTER
                            </H3>
                            <B2 color="text-hpi-body-grey font-medium mt-5">
                                New decision <br />
                                engines driven by <br />
                                real-time data <br />
                                provide flexibility to <br />
                                accommodate changes.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                                Read More
                            </B2>
                        </article>
                        <Image src={Graphic} alt={""} width={350} />
                    </motion.article>
                </section>
                <motion.article
                    className="h-[30em] bg-white rounded-3xl shadow-lg flex justify-between"
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="p-10">
                        <H3 color="text-hpi-blue-light font-bold">
                            GATE OPERATIONS ARE <br />
                            POSSIBLE THROUGH <br />
                            GATE AUTOMATION
                        </H3>
                        <B2 color="text-hpi-body-grey font-medium mt-5">
                            These systems integrate advanced <br />
                            technologies such as Optical Characters <br />
                            Recognition (OCR), License Plate <br />
                            Recognition (LPR), CCTV, RFID tractor card  <br />
                            reader and remote reefer monitoring system.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                            Read More
                        </B2>
                    </article>
                    <Image src={Truck} alt={""} width={800} className="object-fill rounded-tr-2xl rounded-br-2xl" />
                </motion.article>
                <motion.div whileHover="animate" className="flex w-full justify-center gap-2">
                    <B2 color="text-[#009BDE] cursor-pointer font-medium">
                        See All
                    </B2>
                    <motion.div variants={{
                        animate: {
                            x: 10
                        }
                    }} className="flex items-center">
                        <Image src={Arrow} alt="" />
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}