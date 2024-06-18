'use client';

import { useEffect, useState } from "react";
import { getImageFromStorage } from "./get";
import LoadingBanner from '../../../../public/home/LoadingBanner.jpg'
import Image from "next/image";


export default function StorageVideos({ name, bgColor, ...props }: any) {
    const [videoUrl, setVideo] = useState("/");
    useEffect(() => {
        getImageFromStorage(name).then(v => {
            setVideo(v)
        })
    })

    return (
        <div className={`w-full after:content-[''] after:absolute after:top-0 after:left-0 
        after:w-full after:h-full ${!bgColor ? 'your-content' : 'after:' + bgColor}`}>
            {
                videoUrl === '/' ? <Image src={LoadingBanner} priority alt="Loading Banner"/> :
                    <>
                        <video width="auto" height="100" autoPlay loop muted playsInline className={`${bgColor ? 'opacity-90 rounded-3xl' : ''} `}>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </>
            }
        </div>
    )
}