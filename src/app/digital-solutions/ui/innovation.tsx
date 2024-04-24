'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import Text from "../../components/text/text";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection } from '@/app/animations/animation';

export const InnovationUI = () => {
    return (
        <section className="flex flex-col justify-center snap-center items-center gap-10 mt-28">
            <section className="flex flex-col text-center">
                <motion.article initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                    <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                        INNOVATION AND TECHNOLOGICAL <br />
                        SOPHISTICATION ARE AT OUR CORE.
                    </Text>
                </motion.article>
                <article className="mt-3">
                    <motion.p className="text-[18px] text-hpi-blue-dark font-normal" initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                        We relentlessly pursue advancements to remain leaders in the shipping industry,<br />
                        adopting Digital Solutions to redefine logistics operations worldwide.
                    </motion.p>
                </article>
            </section>
            <motion.article className="py-12 rounded-3xl" initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                <Image src={EFFICIENCY}  alt="ROSA " />
            </motion.article>
        </section>
    )
}