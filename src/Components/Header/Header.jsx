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
  const [showNavbar, setShowNavbar] = useState(false);

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

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };
  window.addEventListener("scroll", scrollShowBanner);
  window.addEventListener("scroll", scrollShowBottom);

  return (
    <div className={showBanner ? "header active" : "header"}>
      <div className="header__banner">
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
        <div className="header__top--left">
          <div>
            <input type="checkbox" id="menu_checkbox" onChange={handleCheckBox} />
            <label for="menu_checkbox">
              <div></div>
              <div></div>
              <div></div>
            </label>
          </div>

          <img src={icSearch} alt="" />
        </div>

        <div className="header__top--center ">
          <a href="/">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <div className="header__top--right">
          <span>
            <IconQuality img={icNoti} quality={1} />
            <a className="rs__hide" href="/">
              Sản phẩm yêu thích{" "}
            </a>
            <img className="rs__hide" src={icSearch} alt="" />
            <IconQuality img={icCart} quality={0} />
            <img src={icUser} alt="" />
            <img className="rs__hide" src={icVN} alt="" />
          </span>
        </div>
        <div className={showNavbar ? "navbar show__navbar" : "navbar"}>
          <ul className="navbar__left">
            {listTitle.map((item) => (
              <li className="header__bottom__item " key={item.id}>
                {item.title}

                {item.secondTitle ? (
                  <i
                    className="fas fa-angle-down icon__dropdown"
                    style={{ color: "#858585", marginLeft: "8px", marginTop: "2px" }}
                  ></i>
                ) : (
                  <div className="header__bottom__item--after"></div>
                )}
              </li>
            ))}
            <li style={{ borderBottom: "none" }}></li>
            <li className="navbar__left--love">
              <a href="/">Sản phẩm yêu thích</a>
            </li>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">Langue: Tiếng Việt</a>
            </li>
          </ul>

          <div className="navbar__right"> a</div>
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
