'use client';

import MapGlobe from "./globe";
import { motion } from 'framer-motion';
import { RevealFromBottomToTop, RevealFromTopToBottom, RevealTextAfterSection } from '@/app/animations/animation';
import { B1, B2, H2, H3, MapNumber } from "@/app/components/text/text";
import { ComponentName } from "@/app/components/counter/counter";

export default function MapImpactUI() {
    return (
        <>
            <header className="text-left ml-7">
                <H2 color="text-gradient">
                    GLOBAL IMPACT OF OUR DIGITAL SOLUTIONS
                </H2>
                <B1 color="text-hpi-blue-dark font-medium mt-3">
                    We are committed to expanding our reach and continuing to innovate at full speed.
                </B1>
            </header>
            <section className="bg-[#F0F0F1] mt-10 mb-8 rounded-3xl flex flex-col px-5 lg:p-20">
                <article className="flex justify-between">
                    <MapGlobe />
                    <section className="flex flex-col gap-5 py-3 md:py-0 md:gap-16">
                        <article className="flex flex-col items-center">
                            <MapNumber color="text-hpi-blue-dark font-bold">
                                <ComponentName num={6} next="" />
                            </MapNumber>
                            <H3 color="text-hpi-blue-dark font-bold">
                                CONTINENTS
                            </H3>
                        </article>
                        <article className="flex flex-col items-center">
                            <MapNumber color="text-hpi-blue-dark font-bold">
                                <ComponentName num={24} next="" />
                            </MapNumber>
                            <H3 color="text-hpi-blue-dark font-bold">
                                COUNTRIES
                            </H3>
                        </article>
                        <article className="flex flex-col items-center">
                            <MapNumber color="text-hpi-blue-dark font-bold">
                                <ComponentName num={53} next="" />
                            </MapNumber>
                            <H3 color="text-hpi-blue-dark font-bold">
                                PORTS
                            </H3>
                        </article>
                        <article className="flex flex-col items-center">
                            <MapNumber color="text-hpi-blue-dark font-bold">
                                <ComponentName num={82} next=".1M" />
                            </MapNumber>
                            <H3 color="text-hpi-blue-dark font-bold text-center">
                                TEUs HANDLED IN 2023
                            </H3>
                        </article>
                    </section>
                </article>
                <p className="text-hpi-blue-dark font-bold my-5 text-[13px] text-center xl:mt-10 xl:text-[30px] 2xl:text-[40px]">
                    OUR SOLUTIONS ARE SUPPORTING MORE THAN 80% THROUGHPUT OF HUTCHISON PORTS.
                </p>
            </section>
        </>
    )
}