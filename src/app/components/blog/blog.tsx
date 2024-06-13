'use client'
import { motion } from 'framer-motion';
import { H3, B2 } from '../text/text';


import UBI from '../../../../public/home/ubi.png'
import Graphic from '../../../../public/home/graphic.svg'
import Truck from '../../../../public/home/ABU QIR.png'
import Arrow from "../../../../public/home/arrow.svg";

import Image from 'next/image';

import { RevealTextAfterSection } from '../../animations/animation'
import Link from 'next/link';


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
    // IMAGES GO OUT OF CARDS
    // CHECK MOBILES
    return (
        <>
            <motion.section className="flex flex-col items-center mt-10 gap-5 md:gap-10" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <section className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
                    <motion.article
                        className="
                        bg-white shadow-lg flex rounded-2xl
                        md:flex-row md:rounded-3xl
                        xl:w-[50%]
                        "
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="
                            p-3 
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                            xl:w-[70%]
                        "
                        >
                            <h3 className="text-hpi-blue-light font-bold mt-2 text-[16px] md:mt-0 xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                UBI, REVOLUTIONISING PORTS OPERATIONS
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-4 md:text-hpi-body-grey md:mt-5 lg:line-clamp-none">
                                UBI is truly a game-changer. Users can access critical port-related information, including vessel schedules and port announcements
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 lg:text-[21px] md:mt-6 md:py-0">
                                <Link href="/news/ubi" target="_blank">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <Image src={UBI} alt={""} className="
                        h-[12em] object-contain pl-[20px] 
                        md:h-auto md:object-none md:pl-0
                        lg:h-full lg:w-[90%] lg:object-cover lg:object-left
                        xl:w-[60%] xl:h-[90%]
                        " />
                    </motion.article>
                    <motion.article
                        className="
                        bg-white shadow-lg flex rounded-2xl
                        md:flex-row md:rounded-3xl
                        xl:w-[50%]
                        "
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="
                            p-3
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                            xl:w-[50%]
                            2xl:px-14
                            ">
                            <h3 className="text-hpi-blue-light font-bold mt-2 leading-[20px] text-[16px] md:mt-0 md:w-[80%] lg:w-full xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                VERONICA IS ONBOARDING IN MEXICO
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-4 md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full lg:line-clamp-none">
                                Exciting times ahead as we gear up to introduce &quot;Veronica&quot;, the cutting-edge Terminal Operating System (TOS), to our Mexico Business Units.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0 lg:text-[21px]">
                                <Link href="/news/veronica" target="_blank">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <Image src={Graphic} alt={""} className="
                            h-[10em] object-contain pl-[20px] 
                            md:h-auto md:object-none md:pl-0
                            lg:h-full lg:w-[13em]
                            xl:h-inherit xl:w-inherit xl:object-cover
                            2xl:w-[24em]
                            " />
                    </motion.article>
                </section>
                <motion.article
                    className="bg-white shadow-lg flex justify-between w-[100%] rounded-2xl md:h-[30em] md:rounded-3xl"
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="
                    p-3
                    md:p-14
                    lg:flex lg:flex-col lg:justify-around
                    ">
                        <h3 className="text-hpi-blue-light font-bold mt-2 text-[16px] md:mt-0 xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                            nGEN - HUTCHISON PORTS ABU QIR
                        </h3>
                        <B2 color="font-medium text-hpi-grey-dark line-clamp-4 md:mt-5 md:text-hpi-body-grey lg:line-clamp-none">
                            nGen sailed smoothly into action at Hutchison Ports Abu Qir (AQCT) aligning with the terminal&apos;s grand opening on 8th Jan 2024.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:py-0 md:mt-6 lg:text-[21px]">
                            <Link href="/news/ngen" target="_blank">
                                Read More
                            </Link>
                        </B2>
                    </article>
                    <Image src={Truck} alt={""} width={800} className="
                    object-cover rounded-tr-2xl rounded-br-2xl w-[150px] object-left 
                    md:w-auto
                    lg:w-[30em]
                    xl:w-[40em] xl:h-full
                    2xl:w-[50em]
                    " />
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
