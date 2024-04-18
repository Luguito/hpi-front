'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Blogs from "../../../../public/home/blogs-image.png";
import Arrow from "../../../../public/home/arrow.svg";
import Text from "../text/text"
import Image from "next/image";

const imgs = [
  Blogs,
  Blogs,
  Blogs,
  Blogs,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [animateArrow, setAnimateArrow] = useState(false)
  const dragX = useMotionValue(0);

  useEffect(() => {
    // const intervalRef = setInterval(() => {
    //   const x = dragX.get();

    //   if (x === 0) {
    //     setImgIndex((pv) => {
    //       if (pv === imgs.length - 1) {
    //         return 0;
    //       }
    //       return pv + 1;
    //     });
    //   }
    // }, AUTO_DELAY);

    // return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const onHover = ({ type }: any) => {
    if (type === 'mouseleave') setAnimateArrow(false);
    if (type === 'mouseenter') setAnimateArrow(true);
  }

  return (
    <div className="relative overflow-hidden">
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
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center gap-5 active:cursor-grabbing ml-20 mt-4">

        <Images imgIndex={imgIndex} />
      </motion.div>
      <div className="absolute left-[98%] inset-0 bg-gradient-to-l from-white via-white to-transparent w-14"></div>
      <div className="absolute left-0 inset-0 bg-gradient-to-r from-white via-white to-transparent w-14"></div>
      <span className="mt-16 flex w-full justify-center gap-2 text-[16px] text-[#009BDE] cursor-pointer font-medium" onMouseEnter={onHover} onMouseLeave={onHover}>
        See All
        <motion.div animate={ animateArrow ? { x: 10 } : {} } className="flex items-center">
          <Image src={Arrow} alt="" />
        </motion.div>
      </span>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            transition={SPRING_OPTIONS}
            className="shrink-0 rounded-xl w-[40em]"
          >
            <section className="flex justify-between shadow-custom rounded-3xl py-7 px-9 gap-4" key={idx}>
              <section className="flex flex-col justify-center gap-7 w-2/4 text-left">
                <Text type="bold" classes="text-[20px] text-hpi-blue-light">
                  NEW MOBILE APP UBI FOR TRUCK DRIVERS
                </Text>
                <p className="text-[16px] text-[#494949] font-normal">
                  Check whether the container is on the vessel, or ready for pickup or collected.
                </p>
                <p className="font-semibold text-[#009BDE] text-[16px] cursor-pointer">
                  Read More
                </p>
              </section>
              <article className="">
                <Image src={imgSrc} className="w-80 h-60 object-fill" alt="Blog Image" />
              </article>
            </section>
          </motion.div>
        );
      })}
    </>
  );
};

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

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};