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
        Math.round(value).toLocaleString() + next)
    );

    useEffect(() => {
        if (isInView) {
            animate(startingValue, num, {
                duration: 5,
                ease: "circIn"
            });
        }
    }, [animate, isInView, num, startingValue]);

    return (
        <LazyMotion features={domAnimation}>
            <m.p className="text-hpi-blue-light text-[80px] font-extrabold" ref={ref}>
                {currentValue}
                </m.p>
        </LazyMotion>
    );
}