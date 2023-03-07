import React, { useState } from "react";
import "./Header.scss";
import logo from "../../img/header/logo.png";
import icVN from "../../img/header/ic-vn.svg";
import icCart from "../../img/header/ic-cart.svg";
import icSearch from "../../img/header/ic-ser.svg";
import icUser from "../../img/header/ic-user.svg";
import icNoti from "../../img/header/notification.png";
import SubNav from "./SubNav";

import IconQuality from "./IconQuality";
const listTitle = [
  { id: "about", title: "Về chúng tôi" },
  {
    id: "sp",
    title: "Sản phẩm",
    secondTitle: true,
  },
  {
    id: "sale",
    title: "Giảm giá",
  },
  {
    id: "bst",
    title: "Bộ sưu tập",
  },
  {
    id: "bp",
    title: "Bộ phối",
  },
  {
    id: "bv",
    title: "Bài viết",
    secondTitle: true,
  },
  {
    id: "lh",
    title: "Liên hệ",
  },
  {
    id: "cskh",
    title: "Chăm sóc Khách hàng",
    secondTitle: true,
  },
  {
    id: "td",
    title: "Tuyển dụng",
  },
];

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showBottom, setShowBottom] = useState(true);
  let lastScrollPosition = window.pageYOffset;

  const scrollShowBanner = () => {
    let currentScrollPosition = window.pageYOffset;
    if (lastScrollPosition > currentScrollPosition) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
    lastScrollPosition = currentScrollPosition;
  };
  const scrollShowBottom = () => {
    if (window.scrollY > 80) {
      setShowBottom(false);
    } else {
      setShowBottom(true);
    }
  };

  window.addEventListener("scroll", scrollShowBanner);
  window.addEventListener("scroll", scrollShowBottom);

  return (
    <div className="header">
      <div className={showBanner ? "header__banner active" : "header__banner"}>
        <div className="header__banner-left">
          <i className="fa-solid fa-globe"></i>
          <p>LEVENTS LOVES YOU </p>
        </div>
        <div className="header__banner-right">
          <a href="/">MUA NGAY!</a>
          <i className="fa-solid fa-circle-right"></i>
        </div>
      </div>
      <div className="header__top">
        <div className="header__top--left"></div>
        <div className="header__top--center ">
          <a href="/">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <div className="header__top--right">
          <span>
            <IconQuality img={icNoti} quality={1} />
            <a href="/">Sản phẩm yêu thích </a>
            <img src={icSearch} alt="" />
            <IconQuality img={icCart} quality={0} />
            <img src={icUser} alt="" />
            <img src={icVN} alt="" />
          </span>
        </div>
      </div>
      <div className={showBottom ? "header__bottom active" : "header__bottom"}>
        {listTitle.map((item) => (
          <div className="header__bottom__item" key={item.id}>
            {item.title}

            {item.secondTitle ? (
              <i
                className="fas fa-angle-down icon__dropdown"
                style={{ color: "#858585", marginLeft: "8px", marginTop: "2px" }}
              ></i>
            ) : (
              <div className="header__bottom__item--after"></div>
            )}
            {item.secondTitle ? <SubNav id={item.id} /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
