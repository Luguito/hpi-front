import Text, { B1, B2, H1, H2, H3, H5, TitleNews } from "../../components/text/text";
import BlogImage from '../../../../public/home/ubi.png';
import Graphic from '../../../../public/home/graphic.svg'
import Truck from '../../../../public/home/ABU QIR.png'
import Image from 'next/image';
import Link from "next/link";
import Arrow from "../../../../public/home/arrow.svg";

export default function UBINew() {
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
                    UBI, REVOLUTIONISING PORTS OPERATIONS AT YOUR FINGERTIPS
                </TitleNews>
                <H5 color="text-hpi-blue-light font-medium mt-2">
                    Jun 07, 2024
                </H5>
            </header>
            <Image src={BlogImage} alt="Image" />
            <section className="xl:w-3/4 mt-10">
                <B1 color="text-hpi-body-grey font-medium">
                    ubi is truly a game-changer. Users can access critical port-related information,
                    including vessel schedules and port announcements, for efficient operational planning.
                    Moreover, they can perform key tasks such as submitting Truck Appointment Requests and
                    utilising Driver Identification QR codes to streamline Gate Automation processes and eliminate
                    paperwork.
                </B1>
            </section>
            <footer className="flex flex-col justify-center mt-10 xl:my-20 xl:w-3/4 2xl:my-40">
                <header className="text-left">
                    <H5 color="text-hpi-blue-light font-medium">
                        Discover our latest technological advances
                    </H5>
                    <TitleNews color="text-gradient font-bold">
                        WHAT IS NEW AT HUTCHISON PORTS
                    </TitleNews>
                </header>
                <section className="flex gap-10 2xl:mt-10">
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
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-4 md:text-hpi-body-grey md:mt-5 lg:line-clamp-none">
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
                            xl:w-[50%]
                            2xl:px-14
                            ">
                            <h3 className="text-hpi-blue-light font-bold mt-2 leading-[20px] text-[16px] md:mt-0 md:w-[80%] lg:w-full xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                NGEN - HUTCHISON PORTS ABU QIR
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-4 md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full lg:line-clamp-none">
                                nGen sailed smoothly into action at Hutchison Ports Abu Qir (AQCT) aligning with the terminal&apos;s grand opening on 8th Jan 2024.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0 lg:text-[21px]">
                                <Link href="/news/ngen">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <Image src={Truck} alt={""} className="
                            h-[10em] object-contain pl-[20px] rounded-tr-2xl rounded-br-2xl
                            md:h-auto md:object-none md:pl-0
                            lg:h-full lg:w-[13em]
                            xl:h-inherit xl:w-inherit xl:object-cover
                            " />
                    </article>
                </section>
            </footer>
        </section>
    )
}