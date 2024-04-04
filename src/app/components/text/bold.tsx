import React from "react";

export default function BoldText({ children, styles }: { children: React.ReactNode, styles: string}) {
    return (
        <p className={'font-bold '+ styles}>{children}</p>
    )
}