'use client';
// SHOULD WORK IN SERVER
import { CACHE_IMAGES } from "@/cache";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageFromStorage } from "./get";

export default function StorageImage({ name, width, height, ...props}: any) {
    const [imageUrl, setImage] = useState("/");

    useEffect(() => {
        getImageFromStorage(name).then((v) => { setImage(v) })
    }, [])
    return (
        <Image src={imageUrl} width={width} height={height} alt=""  {...props}/>
    )
}