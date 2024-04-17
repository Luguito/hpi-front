import MIND from '../../../../public/shared-services/head-side-medical (1).svg'
import GROW from '../../../../public/shared-services/chat-arrow-grow.svg'
import SOLUTION from '../../../../public/shared-services/lightbulb-on.svg';
import EYE from '../../../../public/shared-services/Group 37.svg';
import Image from 'next/image';
import Text from '../../components/text/text';


const STYLE = "flex flex-col items-center justify-center shadow-custom rounded-2xl gap-6 py-16 h-64";

export const PeaceSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={MIND} alt="Mind Icon" height={50} />
            <Text type="bold" classes="text-[20px] text-hpi-blue-dark">
                PEACE OF MIND
            </Text>
        </article>
    )
}

export const GrowSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={GROW} alt="Mind Icon" height={50} />
            <Text type="bold" classes="text-[20px] text-hpi-blue-dark">
                EXPAND-AS-YOU-GROW
            </Text>
        </article>
    )
}

export const CentralisedSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={SOLUTION} alt="Mind Icon" height={60} />
            <Text type="bold" classes="text-[20px] text-hpi-blue-dark">
                CENTRALISED SOLUTION
            </Text>
        </article>
    )
}

export const EyeSolution = () => {
    return (
        <article className={STYLE}>
            <Image src={EYE} alt="Mind Icon" height={50} />
            <Text type="bold" classes="text-[20px] text-hpi-blue-dark">
                SEE ALL AND KNOW ALL
            </Text>
        </article>
    )
}