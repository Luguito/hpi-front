import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <h1>Video Player</h1>
      <video controls width="640" height="360">
        <source src="../../../../public/Landing Banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;