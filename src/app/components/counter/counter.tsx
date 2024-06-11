'use client';
import { useEffect, useRef } from "react";

import { LazyMotion, domAnimation, m, useAnimate, useInView, useMotionValue, useTransform } from "framer-motion";

export function ComponentName({ num, next }: any) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px"
    });

    const [_, animate] = useAnimate();
    const startingValue = useMotionValue(0);

    const currentValue = useTransform(startingValue, (value) => (
        Math.round(value) + next)
    );

    useEffect(() => {
        if (isInView) {
            animate(startingValue, num, {
                duration: 2,
                ease: "circIn"
            });
        }
    }, [animate, isInView, num, startingValue]);

    return (
        <LazyMotion features={domAnimation}>
            <m.p className="text-[20px] xl:text-[50px] 2xl:text-[80px] font-extrabold" ref={ref}>
                {currentValue}
            </m.p>
        </LazyMotion>
    );
}