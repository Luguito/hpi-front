'use client'
import { B2 } from "@/app/components/text/text"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Image from 'next/image'


// Images
import I1993 from '../../../../public/automation/1993.jpg'
import I2012 from '../../../../public/automation/2012.jpg'

import I2016_1 from '../../../../public/automation/2016-1.jpg'
import I2016_2 from '../../../../public/automation/2016-2.jpg'
import I2016_3 from '../../../../public/automation/2016-3.png'

import I2018 from '../../../../public/automation/2018.jpg'

import I2020 from '../../../../public/automation/2020.bmp'
import I2021 from '../../../../public/automation/2021.png'
// import I2022 from '../../../../public/automation/2020.bmp'
// @ts-ignore
import I2023 from '../../../../public/automation/2023.jpg'



import I2030_1 from '../../../../public/automation/2030-1.jpg'
import I2030_2 from '../../../../public/automation/2030-2.jpg'
import I2030_3 from '../../../../public/automation/2030-3.jpg'
import I2030_4 from '../../../../public/automation/2030-4.jpg'
// @ts-ignore
import I2030_5 from '../../../../public/automation/2030-5.jpg'


export const U1999I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports London Thamesport pioneers <strong>Remote-Controlled Rail Mounted Gantry Cranes (RMGCs)</strong> ,
                marking Hutchison Ports{"`"} first project in this innovative domain.
            </B2>
        </>
    )
}
export const U1993I = () => {
    return (
        <section>
            <article>
                <B2 color="text-hpi-body-grey font-medium">
                    Hutchison Ports ECT Delta becomes the <strong>first automated terminal with Automated Stacking Cranes,
                        Automated Guided Vehicles</strong>, automated gantry and in-stack shuffling capability, setting a model for terminal automation.
                </B2>
            </article>
            <Image src={I1993} alt="" priority fetchPriority="high"
                className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "
            />
        </section>
    )
}
export const U1995I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                <strong>Remote-Controlled Rail Mounted Gantry Cranes</strong> are introduced at Hutchison Ports HIT
            </B2>
        </>
    )
}
export const U2007I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports ECT Euromax sees the implementation of <strong>Automated Stacking Cranes,
                    Automated Guided Vehicles,</strong> and <strong>Remote-Controlled manual truck handling</strong>.
            </B2>
        </>
    )
}
export const U2012I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports BEST implements <strong>Automated Stacking Cranes</strong>, and first next-generation <strong>Terminal Management System</strong> (nGen), establishing as a productivity leader for Hutchison Ports in Europe. This implementation set new productivity benchmarks for Southern European ports, achieving:
            </B2>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Ship productivity rate exceeding 200 movements per hour.
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Average crane performance over 40 movements per hour, among the world{"`"}s highest.
                    </B2>
                </li>
            </ul>
            <Image src={I2012} alt="" priority fetchPriority="high"
                className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "
            />
        </>
    )
}
export const U2013I = () => {
    return (
        <>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports Brisbane and Hutchison Ports Sydney adopt semi-automated models with <strong> Automated Stacking Cranes</strong> (ASCs) and Straddle Carrier operation.
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports HIT implements a truck identification system using <strong>RFID tags</strong>, and a <strong>Retrofit Rail Mounted Gantry Crane (RMGC)</strong> with remote control capability to improve safety, efficiency and working conditions.
                    </B2>
                </li>
            </ul>
        </>
    )
}
export const U2015I = () => {
    return (
        <>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports ECT becomes the first Hutchison Ports terminal to implement Remote-Controlled QCs, followed by Hutchison Ports Dammam and Hutchison Ports HIT Terminal 9 North.
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports HIT Terminal 9 North reconfigured 29 RTGCs and becomes the <strong>first terminal to operate Remote-Controlled RTGCs with mixed traffic</strong>. This led to a 30-40% productivity increase and a 20% boost in operational efficiency, enabling the handling of high-volume cargoes from ultra-large container ships up to 20,000 TEUs.
                    </B2>
                </li>
            </ul>
        </>
    )
}

export const U2016I = () => {
    const [index, setIndex] = useState(0);
    const arrImages = [
        {
            name: 'Autonomous Truck (AT)',
            image: I2016_1
        },
        {
            name: 'Automated Straddle Carrier (Auto-SC)',
            image: I2016_2
        },
        {
            name: "",
            image: I2016_3
        }
    ];
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports Sohar implements Remote-Controlled Quay Cranes (RCQCs). This marks the <strong>standardisation of RCQCs</strong>, with quick implementation across global terminals.
            </B2>
            <section>
                <Image src={arrImages[index].image} alt="" priority fetchPriority="high" className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "/>
                <B2 color="text-[#AAAAAA] text-center mt-10 font-normal">{arrImages[index].name}</B2>
                <Dots index={index} setIndex={setIndex} arr={arrImages} />
            </section>
        </>
    )
}

export const U2017I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                <strong>Remote-Controlled Quay Cranes</strong> are implemented in Hutchison Ports Pakistan and Hutchison Ports FCP
            </B2>
        </>
    )
}
export const U2018I = () => {
    return (
        <>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports Thailand Terminal D becomes the <strong>world{"`"}s first fully remote-controlled terminal</strong>, employing both Remote-Controlled QCs and Remote-Controlled Rubber-Tyred Gantry Cranes (RTGCs).
                    </B2>
                </li>
            </ul>
            <Image src={I2018} alt="" priority fetchPriority="high"
                className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "
            />
        </>
    )
}

export const U2019I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Introduced <strong>Remote-Controlled Quay Cranes</strong> across several locations including:
            </B2>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports Port of Felixstowe
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports ICAVE
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports YANTIAN
                    </B2>
                </li>
            </ul>
            <B2 color="text-hpi-body-grey font-medium mt-10">
                The Port of Felixstowe introduced <strong>Remote-Controlled Rubber-Tyred Gantry Cranes (RTGCs)</strong>,
                aiming to reduce its ecological footprint through electrification and to boost yard automation.
            </B2>
        </>
    )
}
export const U2020I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                <strong>Remote-Controlled Quay Cranes</strong> begin operations in Hutchison Ports Stockholm,
                setting new efficiency standards.
            </B2>
            <Image src={I2020} alt="" priority fetchPriority="high"
                className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "
            />
        </>
    )
}

export const U2021I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                <strong>Automated Straddle Carriers</strong> are introduced in Hutchison Ports Stockholm,
                optimising container handling.
            </B2>
            <Image src={I2021} alt="" priority fetchPriority="high"
                className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "
            />
        </>
    )
}

export const U2022I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports Thailand Terminal D pioneers <strong>{"`"}true{"`"} mixed traffic mode operations</strong> with Autonomous Trucks.
            </B2>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        World{"`"}s first terminal operator to achieve {"'"}true{"'"} mixed traffic mode terminal operations.
                    </B2>
                </li>
            </ul>
            <video width="auto" height="100" autoPlay loop muted playsInline className="w-full md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover">
                <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/AT%20Mix%20Traffic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export const U2023I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                <strong>Autonomous Trucks (AT)</strong> are implemented at key locations including:
            </B2>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports Port of Felixstowe
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports IC AVE
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Hutchison Ports Abu Qir
                    </B2>
                </li>
            </ul>
            <Image src={I2023} alt="" priority fetchPriority="high"
                className="
                    w-full 
                    md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                "
            />
        </>
    )
}

export const U2030I = () => {
    const [index, setIndex] = useState(0);
    const arrImages = [
        {
            name: 'Video',
            video: "https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/New%20Autonomous%20Truck%20Ecosystem%20Reshapes%20Terminal%20Operations%20Video.mp4"
        },
        {
            name: 'Autonomous Truck (AT)',
            image: I2030_5
        },
        {
            name: 'Automated Straddle Carrier (Auto-SC)',
            image: I2030_4
        },
        {
            name: 'Automated Stacking Cranes (ASCs)',
            image: I2030_3
        },
        {
            name: 'Automated Guided Vehicles (AGVs)',
            image: I2030_2
        },
        {
            name: 'Gate Automation',
            image: I2030_1
        },
    ];

    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports is set to continue leading the way in port operation
                automation through cutting-edge solutions under our visionary Smart Port Strategy.
                By 2030, over half of its terminals are set to deploy automated solutions, including:
            </B2>
            <ul className="list-blue">
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Autonomous Truck (AT)
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Automated Straddle Carrier (Auto-SC)
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Automated Stacking Cranes (ASCs)
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Automated Guided Vehicles (AGVs)
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Remote-Controlled Rail-Mounted Gantry Cranes (RMGCs)
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Remote-Controlled Quay Cranes (QCs)
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-blue-light font-bold">
                        Gate Automation
                    </B2>
                </li>
            </ul>
            <section>
                {
                    arrImages[index].name !== "Video"
                        ?
                        <>
                            {/* @ts-ignore */}
                            <Image src={arrImages[index].image} alt="" priority fetchPriority="high" className="
                                w-full 
                                md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover
                            "/>
                        </>
                        :
                        <>
                            <video width="auto" height="100" autoPlay loop muted playsInline className="w-full md:h-[50em] md:rounded-3xl md:mt-10 md:object-cover">
                                <source src={arrImages[index].video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </>
                }

                <B2 color="text-[#AAAAAA] text-center mt-10 font-normal">{arrImages[index].name}</B2>
                <Dots index={index} setIndex={setIndex} arr={arrImages} />
            </section>
        </>
    )
}

export const ContainerDatesInformation = ({ date }: any) => {
    const hashMap = {
        '1991': U1999I,
        '1993': U1993I,
        '1995': U1995I,
        '2007': U2007I,
        '2012': U2012I,
        '2013': U2013I,
        '2015': U2015I,
        '2016': U2016I,
        '2017': U2017I,
        '2018': U2018I,
        '2019': U2019I,
        '2020': U2020I,
        '2021': U2021I,
        '2022': U2022I,
        '2023': U2023I,
        '2030': U2030I
    }

    // @ts-ignore
    const CurrentSection = hashMap[date];
    return (
        <CurrentSection />
    )
}

const Dots = ({
    index,
    setIndex,
    arr
}: {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    arr: any[]
}) => {
    return (
        <div className="mt-8 flex w-full justify-center gap-2">
            {arr.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === index ? "bg-hpi-blue-dark" : "bg-hpi-white border-hpi-blue-dark border-2"
                            }`}
                    />
                );
            })}
        </div>
    );
};