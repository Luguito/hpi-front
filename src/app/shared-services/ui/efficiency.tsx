'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import PLANET from '../../../../public/shared-services/planet.png';
import Text, { B1, H2 } from "../../components/text/text";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';
import { ServicesKeysComponent } from './services-key';

export const EfficiencyComponent = () => {
    return (
        <section className="flex flex-col px-20 justify-center snap-center items-center gap-10 bg-hpi-white rounded-3xl">
            <section className="flex gap-40">
                <section className="flex flex-col justify-center">
                    <H2 color="text-hpi-blue-light font-bold leading-[63px]">
                        EFFICIENCY AT <br />
                        EVERY TURN
                    </H2>
                    <B1 color="text-hpi-blue-dark font-medium mt-10">
                        We are committed to achieving <br />
                        operational excellence, offering a <br />
                        configurable solution to drive port <br />
                        terminals <b>efficiency, scalability,and </b>  <br />
                        <b>value generation.</b>
                    </B1>
                </section>
                <motion.article className="py-24 rounded-3xl" initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                    <Image src={PLANET} width={400} alt="PLANET " />
                </motion.article>
            </section>
            <ServicesKeysComponent />
        </section>
    )
}