'use client'
import { B2 } from "@/app/components/text/text"
import { useEffect, useState } from "react"

export const U1999I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports London Thamesport pioneers Remote-Controlled Rail Mounted Gantry Cranes (RMGCs),
                marking Hutchison Ports’ first project in this innovative domain.
            </B2>
        </>
    )
}

export const U1993I = () => {
    return (
        <section>
            <article>
                <B2 color="text-hpi-body-grey font-medium">
                    Hutchison Ports ECT Delta becomes the first automated terminal with Automated Stacking Cranes,
                    Automated Guided Vehicles, automated gantry and in-stack shuffling capability, setting a model for terminal automation.
                </B2>
            </article>
            <img src="" alt="IMG" />
        </section>
    )
}
export const U1995I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Remote-Controlled Rail Mounted Gantry Cranes are introduced at Hutchison Ports HIT
            </B2>
        </>
    )
}
export const U2007I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports ECT Euromax sees the implementation of Automated Stacking Cranes,
                Automated Guided Vehicles, and Remote-Controlled manual truck handling.
            </B2>
        </>
    )
}
export const U2012I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports BEST implements Automated Stacking Cranes, and first next-generation Terminal Management System (nGen), establishing as a productivity leader for Hutchison Ports in Europe. This implementation set new productivity benchmarks for Southern European ports, achieving:
            </B2>
            <ul>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Ship productivity rate exceeding 200 movements per hour.
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Average crane performance over 40 movements per hour, among the world's highest.
                    </B2>
                </li>
            </ul>
        </>
    )
}
export const U2013I = () => {
    return (
        <>
            <ul>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Hutchison Ports Brisbane and Hutchison Ports Sydney adopt semi-automated models with Automated Stacking Cranes (ASCs) and Straddle Carrier operation.
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Hutchison Ports HIT implements a truck identification system using RFID tags, and a Retrofit Rail Mounted Gantry Crane (RMGC) with remote control capability to improve safety, efficiency and working conditions.
                    </B2>
                </li>
            </ul>
        </>
    )
}
export const U2015I = () => {
    return (
        <>
            <ul>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Hutchison Ports ECT becomes the first Hutchison Ports terminal to implement Remote-Controlled QCs, followed by Hutchison Ports Dammam and Hutchison Ports HIT Terminal 9 North.
                    </B2>
                </li>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Hutchison Ports HIT Terminal 9 North reconfigured 29 RTGCs and becomes the first terminal to operate Remote-Controlled RTGCs with mixed traffic. This led to a 30-40% productivity increase and a 20% boost in operational efficiency, enabling the handling of high-volume cargoes from ultra-large container ships up to 20,000 TEUs.
                    </B2>
                </li>
            </ul>
        </>
    )
}

export const U2016I = () => {
    return (
        <>
            <B2 color="text-hpi-body-grey font-medium">
                Hutchison Ports Sohar implements Remote-Controlled Quay Cranes (RCQCs). This marks the standardisation of RCQCs, with quick implementation across global terminals.
            </B2>
        </>
    )
}

export const U2018I = () => {
    return (
        <>
            <ul>
                <li>
                    <B2 color="text-hpi-body-grey font-medium">
                        Hutchison Ports Thailand Terminal D becomes the world's first fully remote-controlled terminal, employing both Remote-Controlled QCs and Remote-Controlled Rubber-Tyred Gantry Cranes (RTGCs).
                    </B2>
                </li>
            </ul>
        </>
    )
}

export const U2019I = () => {
    return (
        <></>
    )
}
export const U2020I = () => {
    return (
        <></>
    )
}

export const U2021I = () => {
    return (
        <></>
    )
}

export const U2022I = () => {
    return (
        <></>
    )
}

export const U2023I = () => {
    return (
        <></>
    )
}

export const U2030I = () => {
    // 6 images
    return (
        <></>
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