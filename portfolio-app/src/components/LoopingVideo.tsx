import React from "react";

interface LoopingVideoProps {
  videoSrc: string;        
  videoClassName: string; 
}

const LoopingVideo: React.FC<LoopingVideoProps> = ({ videoSrc, videoClassName }) => {
  return (
    <div className="video-wrapper">
      <video autoPlay loop muted playsInline className={videoClassName}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;
