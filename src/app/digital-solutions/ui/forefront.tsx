'use client'
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";

// IMAGES
import I from '../../../../public/digital-solutions/HPDX_logo.png'
import I2 from '../../../../public/digital-solutions/DD_logo.png'
import I3 from '../../../../public/digital-solutions/VERONICA_logo.png'
import I4 from '../../../../public/digital-solutions/UBI_logo.png'
import I5 from '../../../../public/digital-solutions/blueprint.png'
import I6 from '../../../../public/digital-solutions/parking.png'
import I7 from '../../../../public/digital-solutions/truck.png'
import I8 from '../../../../public/digital-solutions/ROSA_logo.png'
import { Dispatch, SetStateAction, useState } from 'react';

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

export default function ForeFrontUI() {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < 1) {
            setImgIndex((pv: number) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv: number) => pv - 1);
        }
    };

    return (
        <>
            <header className="text-center">
                <small className="font-medium text-hpi-blue-light text-[16px]">Our Solutions</small>
                <h2 className="bg-gradient-to-r from-[#0054AC] via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text text-[30px] font-bold">
                    AT THE FOREFRONT OF PORT INNOVATION
                </h2>
            </header>
            <section className="relative overflow-hidden cursor-grab ">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    className="flex cursor-grab items-center gap-5 active:cursor-grabbing ml-20 mt-4"
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}>
                    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-4 mt-11 shrink-0 rounded-xl w-full">
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I3} alt="" className="mt-[-0.5em]" />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">ONE TOS, ONE WORLD</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    The 1st global port group to provide a cloud-based <br />
                                    TOS in SaaS model, and to standardise operations <br />
                                    across 30 terminals in 16 countries with our home- <br />
                                    grown TOS (nGen/Veronica).
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I} alt="" className="mt-[-0.5em]" height={210} />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">ONCE-FOR-ALL CONNECTION</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    HPDX offers a single data exchange for connecting <br />
                                    all terminals with the logistics world, including the <br />
                                    blockchain-based Global Shipping Business <br />
                                    Network (GSBN).
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I8} alt="" className="mt-[-0.5em]" />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">OPERATIONS ANYTIME, ANYWHERE</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Revolutionising remote operations management <br />
                                    with our Remote Operations Services and <br />
                                    Architecture (ROSA), enabling efficient multi-port <br />
                                    management.
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I7} alt="" className="mt-[-0.5em]" />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">UNLOCKING EFFICIENCY THROUGH AUTOMATION</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Our advanced scheduling system optimises the <br />
                                    management of all types of automation <br />
                                    equipment and job scheduling.
                                </p>
                            </article>
                        </section>
                    </section>
                    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-4 mt-11 shrink-0 rounded-xl w-full">
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I2} alt="" className="mt-[-0.5em]" height={200} />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">GO BEYOND PAPERLESS</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Elevate digital communication and process documentation using DD (Document Digitalisation), our advanced AI application, for global port operations data processing.
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I6} alt="" className="mt-[-0.5em]" height={200} />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">KEEP-IT-FLOW</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Our Auto Gate Operating System (AGOS), designed for faster container flow,
                                    boosts container movements and enhances terminal efficiency by 50%.

                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I5} alt="" className="mt-[-0.5em]" height={200} />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">KNOW BEFORE IT HAPPENS</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    With our EMULATION technology, you can foresee and optimise operational outcomes.
                                    Ensure efficient refinements across your TOS, Equipment Control System, and Fleet Management System without trial and error.
                                </p>
                            </article>
                        </section>
                        <section className="flex flex-col justify-center bg-hpi-celeste gap-4 items-start rounded-2xl px-14 py-8 h-[27em]">
                            <article className="flex justify-center items-center w-full">
                                <Image src={I4} alt="" className="mt-[-0.5em]" height={200} />
                            </article>
                            <article className="flex flex-col">
                                <b className="text-hpi-blue-dark font-bold text-[20px]">PORT ACCESSIBILITY</b>
                                <p className="text-[16px] text-[#494949] font-normal mt-7">
                                    Experience unparalleled access to real-time logistics insights and services with Ubi,
                                    the first app to standardise mobile access across our global ports.
                                </p>
                            </article>
                        </section>
                    </section>
                </motion.div>
                <div className="absolute left-[98%] inset-0 bg-gradient-to-l from-white via-white to-transparent w-14"></div>
                <div className="absolute left-0 inset-0 bg-gradient-to-r from-white via-white to-transparent w-14"></div>
                <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            </section>
        </>
    )
}


const Dots = ({
    imgIndex,
    setImgIndex,
  }: {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
  }) => {
    return (
      <div className="mt-16 flex w-full justify-center gap-2">
        {['', ''].map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-hpi-blue-dark" : "bg-hpi-white border-hpi-blue-dark border-2"
                }`}
            />
          );
        })}
      </div>
    );
  };