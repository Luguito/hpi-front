import React from 'react';
import VideoPlayer from '../video/video';

const VideoContainer = ({ children, videoSrc, bgColor }: { children: any, videoSrc: string, bgColor: string }) => {
    return (
        <section className="snap-center flex justify-center items-center relative">
            <VideoPlayer videoSrc={videoSrc} bgColor={bgColor}></VideoPlayer>
            {children}
        </section>
    );
};

export default VideoContainer;