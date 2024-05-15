'use client';

import BoldText from "./bold";
import MediumText from "./medium";
import { motion } from 'framer-motion';
import { RevealTextAfterSection } from '../../animations/animation'
export default function Text({ children, type, classes, onMouseEnter }: { children: React.ReactNode, type: TypeText, classes: string, onMouseEnter?: any }) {
    const TextComponents = {
        'medium': MediumText,
        'bold': BoldText
    };

    const TextComponent = TextComponents[type];
    return (
        <TextComponent styles={classes} onMouseEnter={onMouseEnter}>
            {children}
        </TextComponent>
    )
}

type TypeText = 'medium' | 'bold';


export const H1 = ({ children, color, ...props }: any) => {
    return (
        <motion.h1 {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[80px] " + color}>{children}</motion.h1>
    )
}
export const H2 = ({ children, color, ...props }: any) => {
    return (
        <motion.h2 {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[55px] font-bold " + color}>{children}</motion.h2>
    )
}

export const H3 = ({ children, color, ...props }: any) => {
    return (
        <motion.h3 {...props} variants={RevealTextAfterSection} className={"text-[35px] " + color}>{children}</motion.h3>
    )
}
export const H5 = ({ children, color, ...props }: any) => {
    return (
        <motion.h5 {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[25px] " + color}>{children}</motion.h5>
    )
}
export const B1 = ({ children, color, ...props }: any) => {
    return (
        <motion.p {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[28px] " + color}>{children}</motion.p>
    )
}
export const B2 = ({ children, color, ...props }: any) => {
    return (
        <motion.p {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[21px] " + color}>{children}</motion.p>
    )
}

export const E1 = ({ children, color, ...props }: any) => {
    return (
        <motion.p {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[21px] " + color}>{children}</motion.p>
    )
}

export const MapNumber = ({ children, color, ...props }: any) => {
    return (
        <motion.h2 {...props} variants={RevealTextAfterSection} viewport={{ once: true }} className={"text-[50px] " + color}>{children}</motion.h2>
    )
}