import Text, { B1, B2, H1, H2, H3, H5, TitleNews } from "../../components/text/text";
import BlogImage from '../../../../public/news/ubi/UBI.jpg';
import Graphic from '../../../../public/home/graphic.svg'
import Truck from '../../../../public/home/ABU QIR.png'
import Image from 'next/image';
import Link from "next/link";
import Arrow from "../../../../public/home/arrow.svg";

// IMAGES 
import TruckAppoinment from '../../../../public/news/ubi/Truck Appointment System.png'
import DriverQR from '../../../../public/news/ubi/Driver Identification QR Code.png'
import GateInSlip from '../../../../public/news/ubi/Gate In Slip.png'
import TerminalInformation from '../../../../public/news/ubi/Terminal Information.png'
import VesselOperations from '../../../../public/news/ubi/Vessel Operations.png'
import ShippingInformation from '../../../../public/news/ubi/Shipping information.png'
import Download from '../../../../public/news/ubi/DOWNLOAD.jpg'



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
                    We are thrilled to unveil ubi, the revolutionary mobile app designed to transform the way you access to critical port-related information seamlessly, empowering you to enhance operational efficiency like never before.
                    It allows you to plan and optimise your operations with ease, ensuring smooth and streamlines workflows. Say goodbye to unnecessary delays and hello to efficient operational planning.
                </B1>
                <B1 color="text-hpi-body-grey font-medium mt-3">
                    Ubi goes beyond information access. Submit truck appointment requests effortlessly and utilise Driver Identification QR codes to streamline Gate Automation processes and eliminate paperwork.
                </B1>
                <B1 color="text-hpi-body-grey font-medium mt-3">
                    Join the growing community who have already made ubi their go-to solution! Get ready to embark on a new era of efficiency and effectiveness with -
                    <Link className="text-hpi-blue-light" href="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Hutchison%20Port%20ENG%20NM.mp4">
                        ubi.
                    </Link>
                </B1>
                <article className="mt-5">
                    <header>
                        <H3 color="text-hpi-blue-light font-medium mt-2">Truck Appointment System</H3>
                        <B1 color="text-hpi-body-grey font-medium mt-4">
                            Truck Appointment Systems allows terminal to authenticate for container pickup and drop-off booking.
                            Also, it allows cargo agent/ trucking company to assign drivers and reserve timeslot.
                        </B1>
                    </header>
                    <article className="mt-5">
                        <Image src={TruckAppoinment} alt="Truck Appoinment" className="h-[45em] sm:h-[34em] sm:w-[20em] xl:h-[35em] xl:w-[20em]"></Image>
                    </article>
                </article>
                <article className="mt-5">
                    <header>
                        <H3 color="text-hpi-blue-light font-medium mt-2">Driver Identification QR Code</H3>
                        <B1 color="text-hpi-body-grey font-medium mt-4">
                            A one-time QR code to identify driver at gate kiosk to streamline Gate Automation workflows.
                        </B1>
                    </header>
                    <article className="mt-5">
                        <Image src={DriverQR} alt="Truck Appoinment" className="h-[45em] sm:h-[34em] sm:w-[20em] xl:h-[35em] xl:w-[20em]"></Image>
                    </article>
                </article>
                <article className="mt-5">
                    <header>
                        <H3 color="text-hpi-blue-light font-medium mt-2">Gate In Slip</H3>
                        <B1 color="text-hpi-body-grey font-medium mt-4">
                            Gate in Slip allows Truck Drivers to receive the container movement slip directly in the App removing the need to carry paper slip.
                        </B1>
                    </header>
                    <article className="mt-5">
                        <Image src={GateInSlip} alt="Truck Appoinment" className="h-[45em] sm:h-[34em] sm:w-[20em] xl:h-[35em] xl:w-[20em]"></Image>
                    </article>
                </article>
                <article className="mt-5">
                    <header>
                        <H3 color="text-hpi-blue-light font-medium mt-2">Terminal Information</H3>
                        <B1 color="text-hpi-body-grey font-medium mt-4">
                            Terminal Updates is a feature in ubi that allows user to view and subscribe the updates of the terminal. Announcement and Operational status will pop-up when launching the application.
                        </B1>
                    </header>
                    <article className="mt-5">
                        <Image src={TerminalInformation} alt="Truck Appoinment" className="h-[45em] sm:h-[34em] sm:w-[20em] xl:h-[35em] xl:w-[20em]"></Image>
                    </article>
                </article>
                <article className="mt-5">
                    <header>
                        <H3 color="text-hpi-blue-light font-medium mt-2">Vessel Operations</H3>
                        <B1 color="text-hpi-body-grey font-medium mt-4">
                            Shipping Line can see progress of operations and projected time of departure.
                        </B1>
                    </header>
                    <article className="mt-5">
                        <Image src={VesselOperations} alt="Truck Appoinment" className="h-[45em] sm:h-[34em] sm:w-[20em] xl:h-[35em] xl:w-[20em]"></Image>
                    </article>
                </article>
                <article className="mt-5">
                    <header>
                        <H3 color="text-hpi-blue-light font-medium mt-2">Shipping information</H3>
                        <B1 color="text-hpi-body-grey font-medium mt-4">
                            Shipping Information allows Shippers, Shipping Lines/Agents {'&'} auliers to view the arrival, departure and closing time of the vessels.
                        </B1>
                    </header>
                    <article className="mt-5">
                        <Image src={ShippingInformation} alt="Truck Appoinment" className="h-[45em] sm:h-[34em] sm:w-[20em] xl:h-[35em] xl:w-[20em]"></Image>
                    </article>
                </article>
                <article className="mt-5">
                    <article className="mt-5">
                        <Image src={Download} alt="Truck Appoinment" ></Image>
                    </article>
                </article>
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
                            xl:w-[50%]
                            2xl:px-14
                            ">
                            <h3 className="text-hpi-blue-light font-bold mt-2 leading-[20px] text-[16px] md:mt-0 md:w-[80%] lg:w-full xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                NGEN - HUTCHISON PORTS ABU QIR
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-3 md:text-hpi-body-grey md:mt-5 md:w-[60%] lg:w-full xl:line-clamp-4 2xl:line-clamp-none">
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

// 