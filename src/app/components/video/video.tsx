import React from 'react';

const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <div className="w-full after:content-[''] after:absolute after:top-0 after:left-0 after:bg-hpi-opacity-video after:w-full after:h-full">
      <video className="opacity-65" width="auto" height="100" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;