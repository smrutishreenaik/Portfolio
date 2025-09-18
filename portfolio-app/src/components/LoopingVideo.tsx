import React from "react";
import LowVideo from "../assets/low.mp4"

const LoopingVideo: React.FC = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay loop muted playsInline className="small-video">
        <source src={LowVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;
