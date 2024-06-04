'use client'

import { H3, B2, } from '../../components/text/text';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { RevealTextAfterSection } from '@/app/animations/animation';
import Table from '../../../../public/digital-solutions/tablet.png'
import Veronica from '../../../../public/digital-solutions/veronica-port.png'
import Sphere from '../../../../public/digital-solutions/sphere.png'
import Arrow from '../../../../public/home/arrow.svg'

const variantParent = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.4,
        }
    }
}
export const BlogsDSUI = () => {
    return (
        <>
            <motion.section className="flex flex-col items-center gap-5 mt-4 md:gap-10 md:mt-10" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <section className="flex justify-center gap-5 md:gap-10">
                    <motion.article
                        className="
                        bg-white shadow-lg flex flex-col-reverse rounded-2xl
                        md:flex-row md:rounded-3xl
                        "
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="
                            px-3 
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                        ">
                            <H3 color="text-hpi-blue-light font-bold mt-2 md:mt-0">
                                STAYING AHEAD BY REVOLUTIO…
                            </H3>
                            <B2 color="font-medium text-hpi-grey-dark md:text-hpi-body-grey md:mt-5">
                                Discover how Hutchison Ports has continued
                                to push the boundaries of automation and
                                Terminal Operating…
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 lg:text-[21px] md:mt-6 md:py-0">
                                Read More
                            </B2>
                        </article>
                        <Image src={Table} alt={""} className="
                            h-[100px] object-cover
                            md:h-auto md:object-none md:pl-0
                            lg:h-full lg:w-[90%] lg:object-cover lg:object-left
                        " />
                    </motion.article>
                    <motion.article
                        className="
                        bg-white shadow-lg flex flex-col-reverse rounded-2xl
                         md:flex-row md:rounded-3xl
                        "
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="
                        px-3 
                        md:py-10 md:px-14
                        ">
                            <H3 color="
                            text-hpi-blue-light font-bold 
                            md:mt-0 md:w-[80%] lg:w-full
                            ">
                                INTRODUCING VERONICA
                            </H3>
                            <B2 color="
                            line-clamp-4 text-hpi-grey-dark font-medium 
                            md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full
                            ">
                                Discover an exclusive feature dedicated to Veronica,
                                highlighting its capabilities, showcasing its smart
                                functionalities, and…
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0">
                                Read More
                            </B2>
                        </article>
                        <Image src={Veronica} alt={""} className="
                        h-[100px] object-contain
                        md:h-auto md:object-none md:pl-0
                        lg:h-full lg:w-[16em]
                        " />
                    </motion.article>
                </section>
                <motion.article
                    className="
                    bg-white shadow-lg flex justify-between w-[100%] rounded-2xl 
                    md:h-[30em] md:rounded-3xl
                    "
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="
                    px-3 
                    md:p-14
                    ">
                        <H3 color="text-hpi-blue-light font-bold mt-2 md:mt-0">
                            THE PORTS AI REVOLUTION IS HERE…
                        </H3>
                        <B2 color="text-hpi-grey-dark font-medium mt-5 md:mt-5 md:text-hpi-body-grey">
                            Hutchison Ports is revolutionising port operations by
                            welcoming a new family - Veronica and her offspring. Together,
                            they will replace the world{"'"}s leading Terminal Operating System, nGen,
                            with an AI-driven sensing and planning system in alignment with autonomous vehicles.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:py-0 md:mt-6">
                            Read More
                        </B2>
                    </article>
                    <Image src={Sphere} alt={""} width={800} className="
                        object-cover rounded-tr-2xl rounded-br-2xl w-[150px] object-left md:object-none md:w-auto
                    " />
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