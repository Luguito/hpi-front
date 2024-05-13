'use client';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const Counter = ({ number }: any) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 6700, { duration: 2 });
        
    }, []);

    return <motion.h1>{rounded}</motion.h1>;
}
// REVISAR ESTO