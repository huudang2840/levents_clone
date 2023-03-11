import React from "react";
import PropTypes from "prop-types";
import { spShirt, spBottom, spJacket, spAC, spBTS, bvKL } from "../../data/childSubNavData";

ChildSubNav.propTypes = {
  id: PropTypes.string,
};

function ChildSubNav(props) {
  const { id } = props;
  let myArray;
  switch (id) {
    case "sp-shirt":
      myArray = spShirt;
      break;
    case "sp-bottom":
      myArray = spBottom;
      break;
    case "sp-jacket":
      myArray = spJacket;
      break;
    case "sp-ac":
      myArray = spAC;
      break;
    case "sp-bts":
      myArray = spBTS;
      break;
    case "bv-knowledge":
      myArray = bvKL;
      break;
    default:
      myArray = [];
      break;
  }
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
