'use client';

import MapGlobe from "./globe";
import { motion } from 'framer-motion';
import { RevealFromBottomToTop, RevealFromTopToBottom, RevealTextAfterSection } from '@/app/animations/animation';
import { B2, H2, H3, MapNumber } from "@/app/components/text/text";
import { ComponentName } from "@/app/components/counter/counter";

export default function MapImpactUI() {
    return (
        <>
            <header className="text-left">
                <H2 color="text-gradient">
                    GLOBAL IMPACT OF OUR DIGITAL SOLUTIONS
                </H2>
                <B2 color="text-hpi-blue-dark font-medium text-[12px]">
                    We are committed to expanding our reach and continuing to innovate at full speed.
                </B2>
            </header>
            <section className="bg-hpi-blue-dark mt-8 rounded-3xl flex justify-between px-5 lg:p-20">
                <MapGlobe />
                <section className="flex flex-col gap-5 py-3 md:py-0 md:gap-16">
                    <article className="flex flex-col items-center">
                        <MapNumber color="text-hpi-white font-bold">
                            <ComponentName num={6} next="" />
                        </MapNumber>
                        <H3 color="text-hpi-white font-bold">
                            CONTINENTS
                        </H3>
                    </article>
                    <article className="flex flex-col items-center">
                        <MapNumber color="text-hpi-white font-bold">
                            <ComponentName num={16} next="" />
                        </MapNumber>
                        <H3 color="text-hpi-white font-bold">
                            COUNTRIES
                        </H3>
                    </article>
                    <article className="flex flex-col items-center">
                        <MapNumber color="text-hpi-white font-bold">
                            <ComponentName num={30} next="" />
                        </MapNumber>
                        <H3 color="text-hpi-white font-bold">
                            MAJOR PORTS
                        </H3>
                    </article>
                    <article className="flex flex-col items-center">
                        <MapNumber color="text-hpi-white font-bold">
                            <ComponentName num={60} next="M" />
                        </MapNumber>
                        <H3 color="text-hpi-white font-bold">
                            TEU PER YEAR
                        </H3>
                    </article>
                </section>
            </section>
        </>
    )
}