import React from "react";
import "./Outfit.scss";
import { listOutfit } from "../../data/outfitData";
import Button from "../Button/Button";

function Outfit() {
  return (
    <div className="outfit">
      {listOutfit.map((l) => (
        <div className="outfit__item" data-aos="fade-left">
          <img src={l.imgF} alt="" />
          <img src={l.imgB} alt="" />
          <div className="outfit__item__name">{l.name}</div>
          <Button
            btnText={"Xem bộ sưu tập"}
            customStyle={{
              position: "absolute",
              bottom: "4%",
              backgroundImage: "linear-gradient(#000000, #000000)",
            }}
          ></Button>
        </div>
      ))}
    </div>
  );
}

export default Outfit;
