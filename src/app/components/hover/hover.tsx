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
        setHover(true)
    }

    function onBlur() {
        setHover(false)
    }

    return (
        isHover ?
            React.cloneElement(mouseEnterComponent, { ref: ref, onMouseEnter: onHover, onMouseLeave: onBlur})
            :
            React.cloneElement(children, { ref: ref, onMouseEnter: onHover, onMouseLeave: onBlur })

    )
}