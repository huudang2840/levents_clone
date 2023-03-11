import React from "react";
import "./Products.scss";
import Button from "../Button/Button";
import { listProduct } from "../../data/productData";

import AOS from "aos";
import "aos/dist/aos.css";

function Products() {
  AOS.init({});

  return (
    <div className="products">
      {listProduct.map((p) => (
        <div key={p.id} className="products__item" data-aos="fade-up">
          <div className="products__item__top">
            <img src={p.imgFront} alt="" />
            <img src={p.imgBack} alt="" />

            <ul className="products__item__top__color">
              {p.color.map((c) => (
                <li style={{ backgroundColor: c }}></li>
              ))}
            </ul>
          </div>
          <div className="products__item__bottom">
            <div className="products__item__bottom__name">{p.name}</div>
            <div className="products__item__bottom__price">{p.price} vnđ</div>
          </div>
        </div>
      ))}

      <Button
        btnText={"Xem thêm"}
        customStyle={{
          height: "35px",
          marginTop: "50px",
          border: "1px solid #858585",
          backgroundImage: "linear-gradient(#504f4f, #504f4f)",
        }}
      ></Button>
    </div>
  );
}

export default Products;
