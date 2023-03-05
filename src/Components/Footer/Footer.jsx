import React from "react";
import "./Footer.scss";
import imgSaleNoti from "../../img/footer/logoSaleNoti-1.png";
import icFb from "../../img/footer/ic-fb.svg";
import icIns from "../../img/footer/ic-ins.svg";
import icTt from "../../img/footer/ic-tt.svg";
import icYt from "../../img/footer/ic-yt.svg";

function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div className="footer__about">
          <h1>VỀ CHÚNG TÔI</h1>
          <p>Levents® – Popular Streetwear Brand</p>
          <p className="footer__about__infor">
            HỘ KINH DOANH Red Label <br />
            GPKD được cấp bởi Cục Cảnh sát QLHC & TTXH <br /> Trụ sở hộ kinh doanh: 842 Sư Vạn Hạnh,
            Phường 13, Quận 10, Tp. Hồ Chí Minh <br />
            Mä só thuê: 41J8031547 Ngày cấp: 06/07/2021 Người đại diện: Nguyễn Trần Duy Khiết
            <br />
            Mã Số thuế cá nhân: 8748861448-001
          </p>
          <img src={imgSaleNoti} alt="" srcset="" />
        </div>
        <div className="footer__contact">
          <h1>LIÊN HỆ</h1>
          <span>
            <p>Hotline</p>
            <p>1900 633 028</p>
          </span>
          <span>
            <p>Email</p>
            <p>Customercare@levents.asia</p>
          </span>
          <span>
            <p>Thứ Hai - Chủ nhật</p>
            <p>09:30 ~ 21:30</p>
          </span>
          <span>
            <p>Email liên hệ công việc</p>
            <p>business@levents.asia</p>
          </span>
        </div>
        <div className="footer__product">
          <h1>DANH MỤC SẢN PHẨM</h1>
          <div className="footer__product__link">
            <a href="/">Tất cả</a>
            <a href="/">New Arrival</a>
            <a href="/">Áo</a>
            <a href="/">Quần</a>
            <a href="/">Outerwear</a>
            <a href="/">Ba lô</a>
            <a href="/">Phụ kiện</a>
            <a href="/">BST</a>
          </div>
        </div>
        <div className="footer__support">
          <h1>HỖ TRỢ</h1>
          <div className="footer__support__link">
            <a href="/">LÌ VEN FABRIC</a>
            <a href="/">Tài khoản</a>
            <a href="/">Chính sách vận chuyển</a>
            <a href="/">Thanh toán trực tuyến </a>
            <a href="/"> Chính sách bảo mật</a>
            <a href="/">Chính sách bảo hành</a>
            <a href="/"> Chính sách khiếu nại</a>
          </div>
        </div>
        <div className="footer__store">
          <h1 style={{ fontFamily: "SVNFuturaLight" }}>CỬA HÀNG</h1>
          <p>842 Sư Vạn Hạnh, Phường 12, Quận 10, HCM</p>
          <p>The New Playground, 04, Quận 1, HCM</p>
          <p>54, Mậu Thân, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</p>
          <div className="footer__store__icon">
            <img src={icFb} alt="" srcset="" />
            <img src={icIns} alt="" srcset="" />
            <img src={icTt} alt="" srcset="" />
            <img src={icYt} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="term">
        <div className="term__brand">
          <p>Levents® - Popular Streetwear brand</p>
        </div>
        <div className="term__other">
          <p></p>
          <a href="/">Tuyển dụng</a>
          <a href="/">Term & Policies</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
