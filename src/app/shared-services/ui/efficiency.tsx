'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import PLANET from '../../../../public/shared-services/planet.png';
import Text, { B1, B2, H2, H3, H5 } from "../../components/text/text";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';
import { ServicesKeysComponent } from './services-key';

export const EfficiencyComponent = () => {
    return (
        <section className="
        flex flex-col justify-center bg-hpi-white rounded-3xl p-8 mx-5 mt-5
        lg:mx-52 lg:px-20
        xl:mx-28 
        2xl:mx-44
        ">
            <section className="
            flex flex-col gap-10
            lg:gap-40 lg:flex-row
            ">
                <section className="flex flex-col justify-center">
                    <H5 color="text-hpi-blue-light font-medium">
                        Our Vision
                    </H5>
                    <H3 color="text-hpi-blue-dark font-bold lg:leading-[43px] xl:leading-[35px] 2xl:mt-4 2xl:leading-[45px] 2xl:text-[40px]">
                        EFFICIENCY, SCALABILITY, VALUE GENERATION
                    </H3>
                    <p className="text-hpi-body-grey font-medium mt-3 text-[14px] md:text-[15px] 2xl:text-[21px]">
                        Through <b>consolidation</b>, <b>standardisation</b>, <b>digitalisation</b> and <b>automation</b>,
                        our Shared Services are committed to deliver high-quality operations to
                        support the growth of Hutchison Ports.
                    </p>
                </section>
                <motion.article className="
                    rounded-3xl
                    xl:py-0
                    2xl:py-24
                "
                    variants={RevealFromRightToLeft}
                    viewport={{ once: true }}>
                    <Image src={PLANET} alt="PLANET" className="
                        w-full max-w-none object-cover h-full
                        lg:w-[10rem]
                        xl:w-[25rem]
                        2xl:2-[35rem]
                    " />
                </motion.article>
            </section>
            <ServicesKeysComponent />
        </section>
    )
}