import React from "react";

export default function MediumText({ children, styles }: { children: React.ReactNode, styles: string}) {
    return (
        <p className={'font-medium '+ styles}>{children}</p>
    )
}