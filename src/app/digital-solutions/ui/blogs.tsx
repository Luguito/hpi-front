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
            <motion.section className="flex flex-col items-center gap-10 mt-10" initial="hidden" whileInView="visible" variants={RevealTextAfterSection}>
                <section className="flex justify-center gap-10">
                    <motion.article
                        className="bg-white rounded-3xl shadow-lg flex"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="py-10 px-14">
                            <H3 color="text-hpi-blue-light font-bold">
                                STAYING AHEAD BY REVOLUTIO…
                            </H3>
                            <B2 color="text-hpi-body-grey font-medium mt-5">
                                Discover how Hutchison Ports has continued
                                to push the boundaries of automation and
                                Terminal Operating…
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                                Read More
                            </B2>
                        </article>
                        <Image src={Table} alt={""} width={400} className="object-cover" />
                    </motion.article>
                    <motion.article
                        className="bg-white rounded-3xl shadow-lg flex"
                        whileHover={{ scale: 1.04 }}
                        variants={variantParent}>
                        <article className="p-10">
                            <H3 color="text-hpi-blue-light font-bold">
                                INTRODUCING VERONICA
                            </H3>
                            <B2 color="text-hpi-body-grey font-medium mt-5">
                                Discover an exclusive feature dedicated to Veronica,
                                highlighting its capabilities, showcasing its smart
                                functionalities, and…
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                                Read More
                            </B2>
                        </article>
                        <Image src={Veronica} alt={""} width={350} className="object-contain"/>
                    </motion.article>
                </section>
                <motion.article
                    className="h-[30em] bg-white rounded-3xl shadow-lg flex justify-between w-[100%]"
                    whileHover={{ scale: 1.04 }}
                    variants={variantParent}>
                    <article className="p-10">
                        <H3 color="text-hpi-blue-light font-bold">
                            THE PORTS AI REVOLUTION IS HERE…
                        </H3>
                        <B2 color="text-hpi-body-grey font-medium mt-5">
                        Hutchison Ports is revolutionising port operations by 
                        welcoming a new family - Veronica and her offspring. Together, 
                        they will replace the world{"'"}s leading Terminal Operating System, nGen, 
                        with an AI-driven sensing and planning system in alignment with autonomous vehicles.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                            Read More
                        </B2>
                    </article>
                    <Image src={Sphere} alt={""} width={800} className="object-fill rounded-tr-2xl rounded-br-2xl" />
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