import React from "react";
import "./Products.scss";
import Button from "../Button/Button";
import blackTeeFront from "../../img/products/shirt/black-tee-front.jpeg";
import blackTeeBack from "../../img/products/shirt/black-tee-back.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function Products() {
  AOS.init({});

  return (
    <div className="products">
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>

      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>
      <div className="products__item" data-aos="fade-up">
        <div className="products__item__top">
          <img src={blackTeeFront} alt="" />
          <img src={blackTeeBack} alt="" />

          <ul className="products__item__top__color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="products__item__bottom">
          <div className="products__item__bottom__name">Levents® Color Tee/ Black </div>
          <div className="products__item__bottom__price">380,000 vnđ</div>
        </div>
      </div>

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
