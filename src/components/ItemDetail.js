import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function itemDetail() {
  return (
    <div className="item-details">
      <div className="item-details-container">
        <div className="subcontain1">
        {/* this is start of flex row */}
          <img
          className="detail-item-img"
            src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
          ></img>
        <div className="detailed-desc">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        {/* this is end of flex row */}
      </div>
      <div className="subcontain2">
              <div className="price-detail">
              <FontAwesomeIcon icon="fa-solid fa-circle-dollar" /> <br />
                $35.99
              </div>
              <div className="rating-detail">
                Rating <br />
                *****
              </div>
              <div className="stock-detail">
                Stock
                <br />
                12
              </div>
              <div className="purchase">
                <label for="numbers">Stock</label>
                <br/>
                <select className="stock-qty" name="numbers" id="numbers">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <br/>
                <button className="buy-now">Buy Now</button>
              </div>
      </div>
      </div>
    </div>
  );
}

export default itemDetail;
