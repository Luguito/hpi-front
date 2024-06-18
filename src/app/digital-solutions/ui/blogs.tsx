'use client'

import { H3, B2, } from '../../components/text/text';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { RevealTextAfterSection } from '@/app/animations/animation';
import Table from '../../../../public/digital-solutions/tablet.png'
import Veronica from '../../../../public/digital-solutions/veronica-port.png'
import Sphere from '../../../../public/digital-solutions/sphere.png'
import Arrow from '../../../../public/home/arrow.svg'
import Link from 'next/link';
import StorageImageClient from '@/app/components/getImage/client-images';

const variantParent = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.4,
        }
    }
}

// 
export const BlogsDSUI = () => {
    return (
        <>
            <motion.section className="flex flex-col items-center gap-5 mt-4 md:gap-10 md:mt-10" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
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
                            p-3 leading-[20px] flex flex-col justify-around
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                            xl:px-0 xl:pl-14 xl:w-[50%]
                            2xl:w-[50%] 2xl:flex 2xl:flex-col 2xl:justify-around
                        ">
                            <H3 color="text-hpi-blue-light font-bold mt-2 md:mt-0 xl:leading-[33px] 2xl:leading-[45px]">
                                STAYING AHEAD BY REVOLUTIO…
                            </H3>
                            <p className="
                            font-medium text-hpi-grey-dark text-[13px] line-clamp-4
                            md:text-hpi-body-grey md:mt-5 lg:line-clamp-none
                            xl:text-[15px] 
                            2xl:text-[21px] 2xl:leading-[30px]
                            ">
                                Discover how Hutchison Ports has continued
                                to push the boundaries of automation and
                                Terminal Operating…
                            </p>
                            <B2 color="
                            text-hpi-blue-light font-semibold cursor-pointer py-2 
                            md:mt-6 md:py-0
                            lg:text-[21px]
                            ">
                                <Link href="https://wpassets.porttechnology.org/wp-content/uploads/2023/07/12101353/019-024_PTI132_Hutchinson_v10.pdf" target="_blank">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <StorageImageClient name="digital-solutions/tablet.png" height={742} width={495} alt={""} className="
                            h-[14em] w-[10em] object-cover pl-[20px] 
                            md:h-auto md:object-none md:pl-0
                            lg:h-full lg:w-[90%] lg:object-cover lg:object-left
                            xl:object-cover xl:object-center xl:w-inherit
                            2xl:w-[50%] 2xl:h-[90%] 2xl:pr-10 2xl:pt-5
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
                        p-3 flex flex-col justify-around
                        md:py-10 md:px-14
                        xl:px-0 xl:pl-14
                        2xl:w-[50%] 2xl:flex 2xl:flex-col 2xl:justify-around
                        ">
                            <H3 color="
                            text-hpi-blue-light font-bold leading-[20px]
                            md:mt-0 md:w-[80%] lg:w-full
                            xl:leading-[33px] 2xl:leading-[45px]
                            ">
                                INTRODUCING VERONICA
                            </H3>
                            <p className="
                            line-clamp-4 text-hpi-grey-dark font-medium text-[13px]
                            md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full
                            xl:text-[15px]
                            2xl:text-[21px]
                            ">
                                Discover an exclusive feature dedicated to Veronica,
                                highlighting its capabilities, showcasing its smart
                                functionalities, and…
                            </p>
                            <B2 color="
                            text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0
                            lg:text-[21px]
                            ">
                                <Link href="https://hutchisonports.com/media/d/OPPORTUNITY+Issue+18.pdf?key=000000000017079109639244tFe4" target="_blank">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <StorageImageClient name="digital-solutions/veronica-port.png" height={280} width={373} alt={""} className="
                        h-[12.5em] object-contain pl-[20px] rounded-tr-2xl rounded-br-2xl
                        md:h-auto md:object-none md:pl-0
                        lg:h-full lg:w-[16em]
                        xl:object-contain xl:object-center xl:w-[13em] xl:pr-4
                        2xl:w-[50%] 2xl:h-[90%] 2xl:pr-10 2xl:pt-5
                        " />
                    </motion.article>
                </section>
                {/* Blogs */}
                <motion.article
                    className="
                    bg-white shadow-lg flex justify-between w-[100%] rounded-2xl 
                    md:h-[30em] md:rounded-3xl
                    xl:h-auto
                    "
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="
                    px-3 
                    md:p-14
                    lg:flex lg:flex-col lg:justify-around
                    xl:w-[60%]
                    ">
                        <H3 color="text-hpi-blue-light font-bold mt-2 leading-[20px] md:mt-0 xl:leading-[35px] 2xl:leading-[45px]">
                            THE PORTS AI REVOLUTION IS HERE…
                        </H3>
                        <p className="text-hpi-grey-dark font-medium mt-5 line-clamp-4 lg:line-clamp-none md:mt-5 md:text-hpi-body-grey text-[13px] xl:text-[15px] 2xl:text-[21px]">
                            Hutchison Ports is revolutionising port operations by
                            welcoming a new family - Veronica and her offspring. Together,
                            they will replace the world{"'"}s leading Terminal Operating System, nGen,
                            with an AI-driven sensing and planning system in alignment with autonomous vehicles.
                        </p>
                        <B2 color="
                        text-hpi-blue-light font-semibold cursor-pointer py-2 
                        md:py-0 md:mt-6
                        lg:text-[21px]
                        ">
                            <Link href="https://sphere.ckh.com.hk/eng/in-focus/280/the-ports-ai-revolution-is-here-%E2%80%93-and-her-name-is-veronica.html" target="_blank">
                                Read More
                            </Link>
                        </B2>
                    </article>
                    <StorageImageClient name="digital-solutions/sphere.png" alt={""} height={497} width={746} className="
                        object-cover rounded-tr-2xl rounded-br-2xl w-[150px] object-left 
                        md:object-none md:w-auto
                        lg:w-[30em]
                        xl:w-[40em] xl:object-cover xl:
                        2xl:w-[50em] 
                    " />
                </motion.article>
                {/* <motion.div whileHover="animate" className="flex w-full justify-center gap-2">
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
                </motion.div> */}
            </motion.section>
        </>
    )
}