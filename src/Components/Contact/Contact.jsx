import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <iframe
        className="contact__map"
        title="LEVENTS"
        width="100%"
        height="480px"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=levents&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
      <div className="contact__right">
        <h1>GỬI TIN NHẮN NGAY CHO LEVENTS</h1>
        <h1> KHI BẠN CẦN HỖ TRỢ HOẶC CÓ THẮC MẮC NHÉ!</h1>
        <form className="contact__right__form" action="">
          <input type="text" placeholder="Họ và tên" />
          <span>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Số điện thoại" />
          </span>
          <textarea type="text" placeholder="Lời nhắn" />
          <button className="btn-submit" type="submit">
            Gửi đi
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
