"use client";

import React from "react";
import { useRef, useState } from "react";

interface IComponent {
    mouseEnterComponent: React.JSX.Element
    children: React.JSX.Element
}

export const HoverComponent = ({
    mouseEnterComponent,
    children
}: IComponent) => {
    const [isHover, setHover] = useState(false)
    const ref = useRef(null);

    function onHover() {
        // @ts-ignore
        ref.current.classList.add('bg-hpi-blue-dark');
        
        setHover(true)
    }

    function onBlur() {
        // @ts-ignore
        ref.current.classList.remove('bg-hpi-blue-dark');

        setHover(false)
    }

    return (
        isHover ?
            React.cloneElement(mouseEnterComponent, { ref: ref, onMouseEnter: onHover, onMouseLeave: onBlur })
            :
            React.cloneElement(children, { ref: ref, onMouseEnter: onHover, onMouseLeave: onBlur })

    )
}