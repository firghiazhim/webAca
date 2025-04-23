import ReactPlayer from "react-player";
// import video from "../public/video/video1.mp4";

import React from "react";

const ReactPlayers = (props) => {
  const { ucapan, from, url } = props;
  return (
    <div className="bg-white shadow-lg flex flex-col" data-aos="fade-in">
      <ReactPlayer controls={true} url={url} height={`auto`} width={`auto`} />
      <div className="title p-1">
        <h1 className="font-bold md:text-xl opacity-90">{ucapan}</h1>
      </div>
      <div className="desk p-1">
        <p className="opacity-70">{`- ${from}`}</p>
      </div>
    </div>
  );
};

export default ReactPlayers;
