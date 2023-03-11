import React from "react";
import "./Outfit.scss";
import outFit1 from "../../img/products/outfit/outfit-1-front.png";
import outFit2 from "../../img/products/outfit/outfit-1-back.png";

import Button from "../Button/Button";

function Outfit() {
  return (
    <div className="outfit">
      <div className="outfit__item" data-aos="fade-left">
        <img src={outFit1} alt="" />
        <img src={outFit2} alt="" />
        <div className="outfit__item__name">LEVENTS® | DORAEMON COLLAB TEE/ WHITE</div>
        <Button
          btnText={"Xem bộ sưu tập"}
          customStyle={{
            position: "absolute",
            bottom: "4%",
            backgroundImage: "linear-gradient(#000000, #000000)",
          }}
        ></Button>
      </div>

      <div className="outfit__item" data-aos="fade-left">
        <img src={outFit1} alt="" />
        <img src={outFit2} alt="" />
        <div className="outfit__item__name">LEVENTS® | DORAEMON COLLAB TEE/ WHITE</div>
        <Button
          btnText={"Xem bộ sưu tập"}
          customStyle={{
            position: "absolute",
            bottom: "4%",
            backgroundImage: "linear-gradient(#000000, #000000)",
          }}
        ></Button>
      </div>

      <div className="outfit__item" data-aos="fade-left">
        <img src={outFit1} alt="" />
        <img src={outFit2} alt="" />
        <div className="outfit__item__name">LEVENTS® | DORAEMON COLLAB TEE/ WHITE</div>
        <Button
          btnText={"Xem bộ sưu tập"}
          customStyle={{
            position: "absolute",
            bottom: "4%",
            backgroundImage: "linear-gradient(#000000, #000000)",
          }}
        ></Button>
      </div>

      <div className="outfit__item" data-aos="fade-left">
        <img src={outFit1} alt="" />
        <img src={outFit2} alt="" />
        <div className="outfit__item__name">LEVENTS® | DORAEMON COLLAB TEE/ WHITE</div>
        <Button
          btnText={"Xem bộ sưu tập"}
          customStyle={{
            position: "absolute",
            bottom: "4%",
            backgroundImage: "linear-gradient(#000000, #000000)",
          }}
        ></Button>
      </div>

      <div className="outfit__item" data-aos="fade-left">
        <img src={outFit1} alt="" />
        <img src={outFit2} alt="" />
        <div className="outfit__item__name">LEVENTS® | DORAEMON COLLAB TEE/ WHITE</div>
        <Button
          btnText={"Xem bộ sưu tập"}
          customStyle={{
            position: "absolute",
            bottom: "4%",
            backgroundImage: "linear-gradient(#000000, #000000)",
          }}
        ></Button>
      </div>
    </div>
  );
}

export default Outfit;
