import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video className="opacity-65" width="auto" height="100" autoPlay loop muted playsInline>
        <source src="https://storage.googleapis.com/dexfreight-webapp-assets/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;