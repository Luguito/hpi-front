'use client'
import { motion } from 'framer-motion';
import { H3, B2 } from '../text/text';


import UBI from '../../../../public/home/ubi.png'
import Graphic from '../../../../public/home/graphic.png'
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
            <motion.section className="flex flex-col items-center gap-10 mt-10 xs:gap-5" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <section className="flex justify-center gap-10 xs:gap-5">
                    <motion.article
                        className="bg-white rounded-3xl shadow-lg flex 
                        xs:flex-col-reverse xs:rounded-2xl"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="xs:px-3 md:py-10 md:px-14">
                            <H3 color="text-hpi-blue-light font-bold xs:mt-2">
                                UBI, THE 
                                NEW APP
                                FOR TRUCK 
                                DRIVERS
                            </H3>
                            <B2 color="text-hpi-body-grey font-medium md:mt-5 xs:text-hpi-grey-dark">
                                Check whether the 
                                container is on the 
                                vessel, or ready for 
                                pickup or collected.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer md:mt-6 xs:py-2">
                                Read More
                            </B2>
                        </article>
                        <Image src={UBI} alt={""} className="xs:h-[100px] xs:object-cover xs:pl-[20px]" />
                    </motion.article>
                    <motion.article
                        className="bg-white rounded-3xl shadow-lg flex 
                        xs:flex-col-reverse xs:rounded-2xl"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="xs:px-3 md:p-10">
                            <H3 color="text-hpi-blue-light font-bold xs:mt-2">
                                VERONICA 
                                WILL GET 
                                SMARTER
                            </H3>
                            <B2 color="text-hpi-body-grey font-medium md:mt-5 xs:text-hpi-grey-dark">
                                New decision
                                engines driven by
                                real-time data
                                provide flexibility to
                                accommodate changes.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer md:mt-6 xs:py-2 ">
                                Read More
                            </B2>
                        </article>
                        <Image src={Graphic} alt={""}  className="xs:h-[100px] xs:object-cover xs:rounded-t-2xl" />
                    </motion.article>
                </section>
                <motion.article
                    className="md:h-[30em] bg-white rounded-3xl shadow-lg flex justify-between w-[100%] xs:rounded-2xl"
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="xs:px-3 md:p-10">
                        <H3 color="text-hpi-blue-light font-bold xs:mt-2">
                            GATE OPERATIONS ARE
                            POSSIBLE THROUGH
                            GATE AUTOMATION
                        </H3>
                        <B2 color="text-hpi-body-grey font-medium md:mt-5 xs:text-hpi-grey-dark">
                            These systems integrate advanced
                            technologies such as Optical Characters
                            Recognition (OCR), License Plate
                            Recognition (LPR), CCTV, RFID tractor card 
                            reader and remote reefer monitoring system.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer md:mt-6 xs:py-2">
                            Read More
                        </B2>
                    </article>
                    <Image src={Truck} alt={""} width={800} className="object-cover rounded-tr-2xl rounded-br-2xl xs:w-[150px] xs:object-left" />
                </motion.article>
                <motion.div whileHover="animate" className="flex w-full justify-center gap-2 xs:mb-10">
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