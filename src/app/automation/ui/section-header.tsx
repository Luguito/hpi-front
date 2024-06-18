'use client';
import StorageImageClient from "@/app/components/getImage/client-images";
import { useEffect, useState } from "react";
import { B2, H1, H2, H3 } from "../../components/text/text";

export const SectionHeader = ({ title }: any) => {
    const [isOpen, setOpen] = useState(false);

    const isExtended = () => {
        let doc = document.getElementById('innovation') as HTMLDetailsElement

        setOpen(doc.open ?? false);
    }

    useEffect(() => {
        isExtended();
    }, [])

    return (
        <summary onClick={() => setOpen(!isOpen)} className="flex gap-5 lg:gap-10 cursor-pointer">
            <IconSideName open={isOpen} />
            <H2 color={`${!isOpen ? 'text-hpi-grey-light' : 'text-hpi-blue-dark'} font-bold`}>
                {title}
            </H2>
        </summary>
    )
}

const IconSideName = ({ open }: { open: boolean }) => {
    return (
        open
            ?
            <StorageImageClient width={100} height={100} name="automation/minus.svg" alt="" className="w-5 xl:w-10 2xl:w-auto" />
            :
            <StorageImageClient width={100} height={100} name="automation/plus.svg" alt="" className="w-5 xl:w-10 2xl:w-auto" />
    )
}