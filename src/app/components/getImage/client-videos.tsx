'use client'

import { useEffect, useRef, useState } from "react";
import Play from '../../../../public/digital-solutions/play-circle.svg'
import BluePlay from '../../../../public/digital-solutions/play.svg'

import Image from 'next/image';
import { getImageFromStorage } from "./get";

export default function StorageVideosClient({ name, poster, ...props }: any) {
    const [videoUrl, setVideo] = useState("/");
    const [posterUrl, setPoster] = useState("/");
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        Promise.all([
            getImageFromStorage(poster),
            getImageFromStorage(name)
        ]).then(v => {
            setPoster(v[0]);
            setVideo(v[1])
        })
    }, [])



    const playVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.src = videoUrl
        video.controls = true;
        video.loop = false;
        video.load();
        video.play();
        setPlaying(true);
    }

    const resetVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.controls = false;
        video.src = posterUrl
        video.loop = true;
        video.load();
        video.play();
        setPlaying(false);
    }

    return (
        <>
            {
                videoUrl === '/' ? null :
                    <>
                        <video width="auto" height="100" poster={posterUrl} autoPlay loop muted playsInline
                            ref={ref} onClick={playVideo} onEnded={resetVideo} {...props}>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {props.clickeable && <Image src={Play} alt="" className={`absolute top-[25%] left-[35%] md:top-[40%] md:left-[45%] cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} /> }
                    </>

            }
        </>
    )
}

export const StorageVideosClientWithoutPoster = ({ name, ...props }: any) => {
    const [videoUrl, setVideo] = useState("/");
    const ref = useRef(null)
    useEffect(() => {
        getImageFromStorage(name).then(v => {
            setVideo(v)
        })
    }, [])

    return (
        <>
            {
                videoUrl === '/' ? null :
                    <video ref={ref} width="auto" height="100" autoPlay loop muted playsInline {...props}>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            }
        </>
    )
}

export const StorageVideosClientWithPosterAsVideos = ({ name, poster, ...props }: any) => {
    const [videoUrl, setVideo] = useState("/");
    const [posterUrl, setPoster] = useState("/");
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        Promise.all([
            getImageFromStorage(poster),
            getImageFromStorage(name)
        ]).then(v => {
            setPoster(v[0]);
            setVideo(v[1])
        })
    }, [])


    const playVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.src = videoUrl
        video.controls = true;
        video.loop = false;
        video.load();
        video.play();
        setPlaying(true);
    }

    const resetVideo = () => {
        if (!ref.current) return;

        let video = ref.current as HTMLVideoElement;

        video.controls = false;
        video.src = posterUrl
        video.loop = true;
        video.load();
        video.play();
        setPlaying(false);
    }

    return (
        <>
            {
                videoUrl === '/' ? null :
                    <>
                        <video ref={ref} width="auto" height="100" autoPlay loop muted playsInline onClick={playVideo} onEnded={resetVideo} {...props}>
                            <source src={posterUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Image src={BluePlay} alt="" className={`absolute bottom-[10px] right-4  w-[30px] lg:w-[50px] lg:right-0 lg:mt-5 cursor-pointer ${playing ? 'hidden' : 'block'}`} onClick={playVideo} />
                    </>
            }
        </>
    )
}