'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Blogs from "../../../../public/home/blogs-image.png";
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
        className="flex cursor-grab items-center gap-5 active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

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
            className="shrink-0 rounded-xl w-[49.5em]"
          >
            <section className="flex justify-between shadow rounded-3xl py-7 px-9" key={idx}>
              <section className="flex flex-col gap-3">
                <Text type="bold" classes="text-[35px] text-hpi-blue-light">
                  New mobile app UBI for truck drivers
                </Text>
                <Text type="medium" classes="text-[25px] text-hpi-grey-dark">
                  Check whether the container is on the vessel, or ready for pickup or collected.
                </Text>
              </section>
              <article className="w-2/4">
                <Image src={imgSrc} alt="Blog Image" />
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