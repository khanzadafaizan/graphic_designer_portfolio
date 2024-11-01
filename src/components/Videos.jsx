import React from "react";
import ReactPlayer from "react-player";

function Videos({ videos }) {
  return <ReactPlayer controls url={videos} width={230} height={230} />;
}

export default Videos;
