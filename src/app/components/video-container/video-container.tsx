import React from 'react';
import VideoPlayer from '../video/video';
import Text from '../text/text';

const VideoContainer = ({ title, videoSrc }: { title: string, videoSrc: string }) => {
    return (
        <section className="relative">
            <VideoPlayer videoSrc={videoSrc}></VideoPlayer>
            <Text type="medium" classes="absolute top-1/4 text-center text-[80px] text-hpi-white">{title}</Text>
        </section>
    );
};

export default VideoContainer;