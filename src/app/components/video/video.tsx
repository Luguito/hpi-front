import React from 'react';
import './video.css';

const VideoPlayer = ({ videoSrc, bgColor }: { videoSrc: string, bgColor: string }) => {
  return (
    <div className={`w-full after:content-[''] after:absolute after:top-0 after:left-0 
    after:w-full after:h-full ${!bgColor ? 'your-content' : 'after:' + bgColor}`}>
      <video width="auto" height="100" autoPlay loop muted playsInline className={bgColor ? 'opacity-90' : ''}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;