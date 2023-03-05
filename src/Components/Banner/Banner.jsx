import React from "react";
import Button from "../Button/Button";
import "./Banner.scss";
import imgBannerTop from "../../img/banner/banner-1.png";

function BannerTop() {
  return (
    <div className="banner">
      <img className="banner__img" src={imgBannerTop} alt="" />
      <Button
        btnText={"Bộ sưu tập mới"}
        customStyle={{
          position: "absolute",
          bottom: "8%",
          backgroundImage: "linear-gradient(#000000, #000000)",
        }}
      ></Button>
    </div>
  );
}

export default BannerTop;
