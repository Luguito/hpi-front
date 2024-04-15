import MIND from '../../../../public/shared-services/head-side-medical (1).svg'
import GROW from '../../../../public/shared-services/chat-arrow-grow.svg'
import SOLUTION from '../../../../public/shared-services/lightbulb-on.svg';
import EYE from '../../../../public/shared-services/Group 37.svg';
import Image from 'next/image';
import Text from '../../components/text/text';


const STYLE = "flex flex-col items-center justify-center border-4 border-hpi-blue-dark rounded-2xl gap-6 py-16 h-72";

export const PeaceSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={MIND} alt="Mind Icon" />
            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                Peace of mind
            </Text>
        </article>
    )
}

export const GrowSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={GROW} alt="Mind Icon" />
            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                Expand-As-You-Grow
            </Text>
        </article>
    )
}

export const CentralisedSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={SOLUTION} alt="Mind Icon" />
            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                Centralised Solution
            </Text>
        </article>
    )
}

export const EyeSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={EYE} alt="Mind Icon" />
            <Text type="bold" classes="text-[30px] text-hpi-blue-dark">
                See All and Know All
            </Text>
        </article>
    )
}