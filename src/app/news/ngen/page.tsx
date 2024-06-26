import Text, { B1, B2, H1, H2, H3, H5, TitleNews } from "../../components/text/text";
import UBI from '../../../../public/home/ubi.png';
import Graphic from '../../../../public/home/graphic.svg'
import BlogImage from '../../../../public/home/ABU QIR.jpeg'
import Image from 'next/image';
import Link from "next/link";
import Arrow from "../../../../public/home/arrow.svg";

export default function VeronicaNew() {
    return (
        <section className="flex flex-col justify-center items-center mx-5 xl:mx-0">
            <header className="pt-20 w-full xl:pt-36 xl:w-3/4">
                <Link href="/" className="flex items-center gap-3 cursor-pointer mb-5">
                    <Image src={Arrow} alt="Go back" className="rotate-180"></Image>
                    <p className="text-hpi-blue-light font-semibold 2xl:text-[21px]">
                        Go back
                    </p>
                </Link>
                <TitleNews color="text-hpi-blue-dark font-bold">
                    nGEN IS LIVE IN HUTCHISON PORTS ABU QIR
                </TitleNews>
                <H5 color="text-hpi-blue-light font-medium mt-2">
                    Jun 07, 2024
                </H5>
            </header>
            <Image
                src={BlogImage}
                alt="ABU QIR Port"
                className="mt-5 rounded-xl xl:w-3/4"
                />
            <section className="xl:w-3/4 mt-10">
                <B1 color="text-hpi-body-grey font-medium">
                    nGen sailed smoothly into action at Hutchison Ports Abu Qir (AQCT) aligning with the terminal&apos;s
                    grand opening on 8th Jan 2024. This achievement is a pivotal moment in AQCT&apos;s journey. Looking ahead,
                    we&apos;re geared up for more success in 2024 with Automated Gate Operating System (AGOS) and Autonomous Truck (AT)
                    deployments.
                </B1>
            </section>
            <footer className="flex flex-col justify-center mt-10 xl:my-20 xl:w-[85%] 2xl:my-40">
                <header className="text-left">
                    <H5 color="text-hpi-blue-light font-medium">
                        Discover our latest technological advances
                    </H5>
                    <TitleNews color="text-gradient font-bold">
                        WHAT IS NEW AT HUTCHISON PORTS
                    </TitleNews>
                </header>
                <section className="flex flex-col gap-5 my-5 xl:gap-10 xl:flex-row xl:mt-10">
                    <article
                        className="
                        bg-white shadow-lg flex rounded-2xl
                        md:flex-row md:rounded-3xl
                        xl:w-[50%]
                        ">
                        <article className="
                            p-3 
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                            xl:w-[70%]
                        "
                        >
                            <h3 className="text-hpi-blue-light font-bold mt-2 text-[16px] md:mt-0 xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                VERONICA IS ONBOARDING IN MEXICO
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-3 md:text-hpi-body-grey md:mt-5 xl:line-clamp-4 2xl:line-clamp-none">
                                Exciting times ahead as we gear up to introduce &quot;Veronica&quot;, the cutting-edge Terminal Operating System (TOS), to our Mexico Business Units.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 lg:text-[21px] md:mt-6 md:py-0">
                                <Link href="/news/veronica">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <Image src={Graphic} alt={""} className="
                        h-[12em] object-contain pl-[20px] 
                        md:h-auto md:object-none md:pl-0
                        lg:h-full lg:w-[90%] lg:object-cover lg:object-left
                        xl:w-[60%] xl:h-[90%]
                        " />
                    </article>
                    <article
                        className="
                        bg-white shadow-lg flex rounded-2xl
                        md:flex-row md:rounded-3xl
                        xl:w-[50%]
                        ">
                        <article className="
                            p-3
                            md:py-10 md:px-14
                            lg:flex lg:flex-col lg:justify-around
                            xl:w-[60%]
                            2xl:px-14
                            ">
                            <h3 className="text-hpi-blue-light font-bold mt-2 leading-[20px] text-[16px] md:mt-0 md:w-[80%] lg:w-full xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                UBI, REVOLUTIONISING PORTS OPERATIONS
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-3 md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full xl:line-clamp-4 2xl:line-clamp-none">
                                ubi is truly a game-changer. Users can access critical port-related information, including vessel schedules and port announcements
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0 lg:text-[21px]">
                                <Link href="/news/ubi">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <Image src={UBI} alt={""} className="
                            h-[10em] object-contain pl-[20px] rounded-tr-2xl rounded-br-2xl
                            md:h-auto md:object-none md:pl-0
                            lg:h-full lg:w-[13em]
                            xl:h-inherit xl:w-inherit xl:object-cover xl:object-left
                            " />
                    </article>
                </section>
            </footer>
        </section>
    )
}