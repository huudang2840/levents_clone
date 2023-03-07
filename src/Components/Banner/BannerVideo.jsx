import React from "react";
import Button from "../Button/Button";
import "./BannerVideo.scss";

import vdBanner from "../../img/banner/banner-video.mp4";

function BannerVideo() {
  return (
    <div className="banner-vd">
      <video
        className="banner__video"
        src={vdBanner}
        loop={true}
        autoPlay="autoplay"
        controls
        muted
      />
      <Button
        btnText={"Bộ sưu tập mới của Levents!"}
        customStyle={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundImage: "linear-gradient(#000000, #000000)",
        }}
      ></Button>
    </div>
  );
}

export default BannerVideo;
