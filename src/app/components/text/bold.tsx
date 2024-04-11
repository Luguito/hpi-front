import React from "react";

export default function BoldText({ children, styles, onMouseEnter }: { children: React.ReactNode, styles: string, onMouseEnter: any }) {
    return (
        <p className={'font-bold ' + styles} onMouseEnter={onMouseEnter}>{children}</p>
    )
}