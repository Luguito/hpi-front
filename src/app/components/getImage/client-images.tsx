'use client'

import Image from "next/image";
import { getImageFromStorage } from "./images";
import { useEffect, useState } from "react";

export default function StorageImageClient({ name, width, height, ...props}: any) {
    const [imageUrl, setImage] = useState("/");
    
    useEffect(() => {
        console.log(name)
        getImageFromStorage(name).then((v) => {
            console.log(v)
            setImage(v)
        })
    }, [])

    return (
        <Image src={imageUrl} width={width} height={height} alt=""  {...props}/>
    )
}