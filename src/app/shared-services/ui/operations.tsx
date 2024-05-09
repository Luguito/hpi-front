import MIND from '../../../../public/shared-services/Idea.png'
import GROW from '../../../../public/shared-services/grow.svg'
import SOLUTION from '../../../../public/shared-services/Centralized.png';
import EYE from '../../../../public/shared-services/Eye.png';
import PLUS from '../../../../public/shared-services/plus.svg';
import MINUS from '../../../../public/shared-services/minus.svg';
import Image from 'next/image';
import Text, { H3 } from '../../components/text/text';


const STYLE = "flex items-center justify-center shadow-custom rounded-2xl gap-10 py-40 h-72 bg-hpi-white relative";
const STYLE2 = "flex items-center justify-center shadow-custom rounded-2xl gap-10 py-40 h-72 bg-hpi-blue-dark text-hpi-white relative";

export const PeaceSolution = () => {
    return (
        <article className={STYLE}>
            <H3 color="font-bold text-hpi-blue-light">
                PEACE OF <br />
                MIND
            </H3>
            <Image src={MIND} alt="Mind Icon" />
            <Image src={PLUS} alt="PLUS Icon" className="absolute bottom-5 right-5" />
        </article>
    )
}
export const PeaceSolutionContent = () => {
    return (
        <article className={STYLE2}>
            <p className="text-[16px] text-hpi-white text-center w-3/5">
                Plug-and-Play to the standardised and <br />
                proven operational practice (SOP) - <br />
                uplifting the service level in no time! <br />
            </p>
        </article>
    )
}
export const GrowSolution = () => {
    return (
        <article className={STYLE}>
            <H3 color="font-bold text-hpi-blue-light">
                EXPAND-AS- <br />
                YOU-GROW
            </H3>
            <Image src={GROW} alt="Mind Icon"  />
            <Image src={PLUS} alt="PLUS Icon" className="absolute bottom-5 right-5" />
        </article>
    )
}

export const CentralisedSolution = () => {
    return (
        <article className={STYLE}>
            <H3 color="font-bold text-hpi-blue-light">
                CENTRALISED <br />
                SOLUTION
            </H3>
            <Image src={SOLUTION} alt="Mind Icon" />
            <Image src={PLUS} alt="PLUS Icon" className="absolute bottom-5 right-5" />
        </article>
    )
}

export const EyeSolution = () => {
    return (
        <article className={STYLE}>
            <H3 color="font-bold text-hpi-blue-light">
                SEE ALL AND <br />
                KNOW ALL
            </H3>
            <Image src={EYE} alt="Mind Icon" />
            <Image src={PLUS} alt="PLUS Icon" className="absolute bottom-5 right-5" />
        </article>
    )
}