import React from 'react'
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import './Topline.scss';

const Topline = () => {
  return (
    <div>
      <div className="container">
        <div className="topline">
          <p>
            <FaFilter style={{ marginRight: "5px" }} /> Show Filter
          </p>
          <p>502 product</p>
          <p>
            <FaSortAmountDown style={{ marginRight: "5px" }} /> Sort
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topline;
