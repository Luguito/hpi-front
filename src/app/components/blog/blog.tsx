
'use client'
import { H3, B2 } from '../text/text';
import Image from 'next/image';

import { RevealTextAfterSection } from '../../animations/animation'
import Link from 'next/link';
import StorageImage from '../getImage/images';
import Button from '../button/button';


const variantParent = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.4,
        }
    }
}
export const BlogsUI = () => {
    const callManualFetch = async () => {
        try {

            let res = await fetch('/api/token', { method: 'POST' });
            let json = await res.json()

            console.log(json)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <section className="flex flex-col items-center mt-10 gap-5 md:gap-10"
            //  initial={false} whileInView="visible" variants={RevealTextAfterSection}
            >
                <section className="flex flex-col lg:flex-row justify-center gap-5 md:gap-10">
                    <article
                        className="
                        bg-white shadow-lg flex rounded-2xl
                        lg:flex-row lgx:rounded-3xl
                        lg:w-[50%]
                        "
                    // whileHover={{ scale: 1.04 }}
                    // variants={variantParent}
                    >
                        <article className="
                            p-3 
                            lg:flex lg:flex-col lg:justify-around lg:py-10 lg:pl-5
                            xl:w-[70%]
                        "
                        >
                            <h3 className="text-hpi-blue-light font-bold mt-2 text-[16px] md:mt-0 xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                UBI, REVOLUTIONISING PORTS OPERATIONS
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-3 md:text-hpi-body-grey md:mt-5 xl:line-clamp-4 2xl:line-clamp-none">
                                UBI is truly a game-changer. Users can access critical port-related information, including vessel schedules and port announcements
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0">
                                <Link href="/news/ubi" target="_blank">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <StorageImage
                            name="home/ubi.png"
                            width={370}
                            height={505}
                            className="
                                h-[12em] object-contain pl-[20px] 
                                lg:h-[80%] lg:w-[10em] lg:object-cover lg:object-left
                                xl:w-[60%] xl:h-[90%]
                            "
                        />
                    </article>
                    <article
                        className="
                        bg-white shadow-lg flex rounded-2xl
                        lg:flex-row lg:rounded-3xl
                        lg:w-[50%]
                        "
                    // whileHover={{ scale: 1.04 }}
                    // variants={variantParent}
                    >
                        <article className="
                            p-3
                            lg:flex lg:flex-col lg:justify-around lg:py-10 lg:pl-5
                            xl:w-[70%]
                            2xl:px-14
                            ">
                            <h3 className="text-hpi-blue-light font-bold mt-2 leading-[20px] text-[16px] md:mt-0 lg:w-[80%] xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                                VERONICA IS ONBOARDING IN MEXICO
                            </h3>
                            <B2 color="font-medium text-hpi-grey-dark line-clamp-3 md:text-hpi-body-grey md:mt-5 lg:w-full xl:line-clamp-4 2xl:line-clamp-none">
                                Exciting times ahead as we gear up to introduce &quot;Veronica&quot;, the cutting-edge Terminal Operating System (TOS), to our Mexico Business Units.
                            </B2>
                            <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:mt-6 md:py-0">
                                <Link href="/news/veronica" target="_blank">
                                    Read More
                                </Link>
                            </B2>
                        </article>
                        <StorageImage
                            name="home/graphic.svg"
                            width={200}
                            height={200}
                            className="
                            h-[10em] object-contain pl-[20px] 
                            lg:h-full lg:w-[13em]
                            xl:h-inherit xl:w-inherit xl:object-cover
                            2xl:w-[24em]
                            " />
                    </article>
                </section>
                <article
                    className="bg-white shadow-lg flex justify-between w-[100%] rounded-2xl lg:h-[20em] xl:h-[25em] lg:rounded-3xl 2xl:h-[30em]"
                // whileHover={{ scale: 1.04 }}
                // variants={variantParent}
                >
                    <article className="
                    p-3
                    lg:flex lg:flex-col lg:justify-around lg:p-14
                    ">
                        <h3 className="text-hpi-blue-light font-bold mt-2 text-[16px] md:mt-0 xl:text-[22px] xl:leading-[33px] 2xl:leading-[45px] 2xl:text-[35px]">
                            nGEN - HUTCHISON PORTS ABU QIR
                        </h3>
                        <B2 color="font-medium text-hpi-grey-dark line-clamp-4 md:mt-5 md:text-hpi-body-grey lg:line-clamp-none">
                            nGen sailed smoothly into action at Hutchison Ports Abu Qir (AQCT) aligning with the terminal&apos;s grand opening on 8th Jan 2024.
                        </B2>
                        <B2 color="text-hpi-blue-light font-semibold cursor-pointer py-2 md:py-0 md:mt-6">
                            <Link href="/news/ngen" target="_blank">
                                Read More
                            </Link>
                        </B2>
                    </article>
                    <StorageImage
                        name="home/ABU QIR.png"
                        width={1545}
                        height={948}
                        className="
                    object-cover rounded-tr-2xl rounded-br-2xl w-[150px] object-left 
                    lg:w-[30em]
                    xl:w-[40em] xl:h-full
                    2xl:w-[90%]
                    " />
                </article>
                {/* <div whileHover="animate" className="flex w-full justify-center gap-2 mb-10 md:mb-0">
                    <B2 color="text-[#009BDE] cursor-pointer font-medium">
                        See All
                    </B2>
                    <div variants={{
                        animate: {
                            x: 10
                        }
                    }} className="flex items-center">
                        <Image src={Arrow} alt="" />
                    </div>
                </div> */}
            </section>
            <Button onClick={callManualFetch}>
                Contact us
            </Button>

        </>
    )
}
