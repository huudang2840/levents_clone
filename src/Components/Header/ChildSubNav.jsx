import React from "react";
import PropTypes from "prop-types";

ChildSubNav.propTypes = {
  id: PropTypes.string,
};
const spShirt = [
  { id: "sp-shirt-thun", title: "Áo thun", child: true },
  { id: "sp-shirt-polo", title: "Áo Polo" },
  { id: "sp-shirt-somi", title: "Áo sơ mi" },
];

// const spShirtThun = [
//   { id: "sp-shirt-thun-tron", title: "Áo thun trơn" },
//   { id: "sp-shirt-thun-hinh", title: "Áo thun hình" },
// ];
// const spBottom = [
//   { id: "sp-bottom-long", title: "Quần dài" },
//   { id: "sp-bottom-short", title: "Quần ngắn" },
// ];
// const spJacket = [
//   { id: "sp-jacket-long", title: "Quần dài" },
//   { id: "sp-jacket-short", title: "Quần ngắn" },
// ];

function ChildSubNav(props) {
  const { id } = props;
  let myArray;
  switch (id) {
    case "sp-shirt":
      myArray = spShirt;
      break;

    default:
      myArray = [];
      break;
  }
  // console.log(myArray);
  return (
    <ul className="header__bottom__item__second" style={{ left: "105%", top: "-200%" }}>
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
        </li>
      ))}
    </ul>
  );
}

export default ChildSubNav;
