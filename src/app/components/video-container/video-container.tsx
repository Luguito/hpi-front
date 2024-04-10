import React from 'react';
import VideoPlayer from '../video/video';

const VideoContainer = ({ children, videoSrc }: { children: any, videoSrc: string }) => {
    return (
        <section className="snap-center flex justify-center items-center relative">
            <VideoPlayer videoSrc={videoSrc}></VideoPlayer>
            {children}
        </section>
    );
};

export default VideoContainer;