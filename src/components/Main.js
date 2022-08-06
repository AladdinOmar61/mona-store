import { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="App">
      <h1 className="store-title">Mona's Online Store</h1>
      <div className="item-listings">
        <div className="store-item">
          <div className="store-item-img">
            <Link to="/details">
              <img
                className="item-img"
                src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
              ></img>
            </Link>
          </div>
          <div className="details-container">
            <p className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              <Link to="/details"><span className="view-details">View details</span></Link>
            </p>
            <div className="more-details">
              <div className="price">
                $35.99
              </div>
              <div className="stock">
                Stock: 12
              </div>
              <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
