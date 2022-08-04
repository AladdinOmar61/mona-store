import React from "react";

function itemDetail() {
  return (
    <div className="item-details">
      <div className="item-details-container">
        <div className="item-img">
          <img
            className="detail-item-img"
            src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
          ></img>
        </div>
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
      </div>
    </div>
  );
}

export default itemDetail;
