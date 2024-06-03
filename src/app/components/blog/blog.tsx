'use client'
import { motion } from 'framer-motion';
import { H3, B2 } from '../text/text';


import UBI from '../../../../public/home/ubi.png'
import Graphic from '../../../../public/home/graphic.svg'
import Truck from '../../../../public/home/13.jpg'
import Arrow from "../../../../public/home/arrow.svg";

import Image from 'next/image';

import { RevealTextAfterSection } from '../../animations/animation'


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
            <motion.section className="flex flex-col items-center mt-10 gap-5 md:gap-10" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <section className="flex justify-center gap-5 md:gap-10">
                    <motion.article
                        className="
                        bg-white shadow-lg flex flex-col-reverse rounded-2xl
                        md:flex-row md:rounded-3xl"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="
                            px-3 
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                        "
                        >
                            <H3 color="text-hpi-blue-light font-bold mt-2 md:mt-0">
                                UBI, THE
                                NEW APP
                                FOR TRUCK
                                DRIVERS
                            </H3>
                            <B2 color="font-medium text-hpi-grey-dark md:text-hpi-body-grey md:mt-5">
                                Check whether the
                                container is on the
                                vessel, or ready for
                                pickup or collected.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 lg:text-[21px] md:mt-6 md:py-0">
                                Read More
                            </B2>
                        </article>
                        <Image src={UBI} alt={""} className="
                        h-[100px] object-cover pl-[20px] 
                        md:h-auto md:object-none md:pl-0
                        lg:h-full lg:w-[90%] lg:object-cover lg:objecct-left
                        " />
                    </motion.article>
                    <motion.article
                        className="
                        bg-white shadow-lg flex flex-col-reverse rounded-2xl
                        md:flex-row md:rounded-3xl"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="
                            px-3 
                            md:py-10 md:px-14
                            ">
                            <H3 color="text-hpi-blue-light font-bold mt-2 md:mt-0 md:w-[80%] lg:w-full">
                                VERONICA
                                WILL GET
                                SMARTER
                            </H3>
                            <B2 color="font-medium text-hpi-grey-dark md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full">
                                New decision
                                engines driven by
                                real-time data
                                provide flexibility to
                                accommodate changes.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0 lg:text-[21px]">
                                Read More
                            </B2>
                        </article>
                        <Image src={Graphic} alt={""} className="
                            h-[100px] object-cover pl-[20px] 
                            md:h-auto md:object-none md:pl-0
                            lg:h-full lg:w-[16em]
                            " />
                    </motion.article>
                </section>
                <motion.article
                    className="bg-white shadow-lg flex justify-between w-[100%] rounded-2xl md:h-[30em] md:rounded-3xl"
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="
                    px-3 
                    md:p-14
                    ">
                        <H3 color="text-hpi-blue-light font-bold mt-2 md:mt-0">
                            GATE OPERATIONS ARE
                            POSSIBLE THROUGH
                            GATE AUTOMATION
                        </H3>
                        <B2 color="font-medium text-hpi-grey-dark md:mt-5 md:text-hpi-body-grey">
                            These systems integrate advanced
                            technologies such as Optical Characters
                            Recognition (OCR), License Plate
                            Recognition (LPR), CCTV, RFID tractor card
                            reader and remote reefer monitoring system.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:py-0 md:mt-6">
                            Read More
                        </B2>
                    </article>
                    <Image src={Truck} alt={""} width={800} className="object-cover rounded-tr-2xl rounded-br-2xl w-[150px] object-left md:object-none md:w-auto" />
                </motion.article>
                <motion.div whileHover="animate" className="flex w-full justify-center gap-2 mb-10 md:mb-0">
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