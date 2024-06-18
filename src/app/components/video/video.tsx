'use client';

import React, { useEffect, useState } from 'react';
import LoadingImage from '../../../../public/home/LoadingBanner.jpg'
import Image from 'next/image'
import './video.css';

const VideoPlayer = ({ videoSrc, bgColor }: { videoSrc: string, bgColor: string }) => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, []);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };
  return (
    <div className={`w-full ${isLoading ? 'h-[67em]' : ''} after:content-[''] after:absolute after:top-0 after:left-0 
    after:w-full after:h-full ${!bgColor ? 'your-content' : 'after:' + bgColor}`}>
      {/* {
        isLoading && <Image src={LoadingImage} alt="Loading" priority={true} />
      } */}
      <video width="auto" height="100" autoPlay loop muted playsInline className={`${bgColor ? 'opacity-90 rounded-3xl' : ''} `}
        onLoadedMetadata={handleLoadedData}
        onLoadedData={handleLoadedData}
        onLoadStart={handleLoadStart}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;