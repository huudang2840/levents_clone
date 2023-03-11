import React from "react";
import PropTypes from "prop-types";
import ChildSubNav from "./ChildSubNav";
import { subSP, subPost, subCSKH } from "../../data/subNavData";

SubNav.propTypes = {
  id: PropTypes.string,
};

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
