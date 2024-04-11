import React from "react";

export default function MediumText({ children, styles, onMouseEnter}: { children: React.ReactNode, styles: string, onMouseEnter:any}) {
    return (
        <p className={'font-medium '+ styles} onMouseEnter={onMouseEnter}>{children}</p>
    )
}