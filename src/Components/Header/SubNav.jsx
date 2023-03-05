import React from "react";
import PropTypes from "prop-types";
import ChildSubNav from "./ChildSubNav";

SubNav.propTypes = {
  id: PropTypes.string,
};

const subSP = [
  { id: "sp-all", title: "Tất cả" },
  { id: "sp-new", title: "Sản phẩm mới" },
  { id: "sp-shirt", title: "Áo", child: true },
  { id: "sp-bottom", title: "Quần", child: true },
  { id: "sp-jacket", title: "Áo khoác", child: true },
  { id: "sp-bag", title: "Cặp sách" },
  { id: "sp-ac", title: "Phụ kiện", child: true },
  { id: "sp-bts", title: "Bts", child: true },
];

const subPost = [
  { id: "bv-trends", title: "Xu hướng thời trang" },
  { id: "bv-knowledge", title: "Kiến thức thời trang", child: true },
];

const subCSKH = [
  { id: "cskh-fabric", title: "Lì Ve Fabric" },
  { id: "cskh-ez", title: "Mua hàng dễ dàng" },
];
// const list = [subSP, subPost, subCSKH];

function SubNav(props) {
  const { id } = props;
  let myArray;
  switch (id) {
    case "sp":
      myArray = subSP;
      break;
    case "bv":
      myArray = subPost;
      break;
    case "cskh":
      myArray = subCSKH;
      break;

    default:
      break;
  }

  return (
    <ul className="header__bottom__item__second">
      {myArray.map((s) => (
        <li key={s.id}>
          {s.title}
          {s.child ? (
            <i
              className="fas fa-angle-down icon__dropdown"
              style={{ color: "#858585", marginLeft: "8px", marginTop: "2px" }}
            ></i>
          ) : (
            <div className="line"></div>
          )}
          {s.child ? <ChildSubNav id={s.id} /> : ""}
        </li>
      ))}
    </ul>
  );
}

export default SubNav;
