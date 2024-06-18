'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageFromStorage } from "./get";

export default function StorageImageClient({ name, width, height, ...props}: any) {
    const [imageUrl, setImage] = useState("/");
    
    useEffect(() => {
        getImageFromStorage(name).then((v) => { setImage(v) })
    }, [])

    return (
        <Image src={imageUrl} width={width} height={height} alt=""  {...props}/>
    )
}