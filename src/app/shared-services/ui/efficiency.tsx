'use client';
import EFFICIENCY from '../../../../public/shared-services/efficiency.png';
import Text from "../../components/text/text";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { RevealFromLeftToRight, RevealFromRightToLeft, RevealTextAfterSection} from '@/app/animations/animation';

export const EfficiencyComponent = () => {
    return (
        <section className="flex mx-36 justify-center snap-center items-center gap-10">
            <section className="flex flex-col w-3/12">
                <motion.article initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                    <Text type="bold" classes="text-[20px] text-hpi-blue-light">
                        EFFICIENCY AT EVERY TURN
                    </Text>
                </motion.article>
                <article className="mt-10">
                    <motion.p className="text-[16px] text-[#494949] font-normal" initial="hidden" whileInView="visible" variants={RevealFromLeftToRight}>
                        We are committed to achieving operational <br />
                        excellence, offering a configurable solution to <br />
                        drive port terminals <span className="text-hpi-blue-light font-bold"> efficiency, scalability, <br />
                            and value generation.
                        </span>
                    </motion.p>
                </article>
            </section>
            <motion.article className="py-12 rounded-3xl" initial="hidden" whileInView="visible" variants={RevealFromRightToLeft}>
                <Image src={EFFICIENCY} width={500} alt="ROSA " />
            </motion.article>
        </section>
    )
}