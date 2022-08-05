import { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [hover, isHovering] = useState(false);

  const mouseOver = () => {
    isHovering(true);
  };

  const mouseOut = () => {
    isHovering(false);
  };

  return (
    <div className="App">
      <h1 className="store-title">Mona's Online Store</h1>
      <div className="item-listings">
        <div className="store-item">
          <div
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            className="store-item-img"
          >
            {hover && (
              <Link to="/details">
                <p className="view-details">View Details</p>
              </Link>
            )}
            <Link to="/details">
              <img
                className="item-img"
                src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
              ></img>
            </Link>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price
                <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
        <div className="store-item">
          <div
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            className="store-item-img"
          >
            {hover && (
              <Link to="/details">
                <p className="view-details">View Details</p>
              </Link>
            )}
            <Link to="/details">
              <img
                className="item-img"
                src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
              ></img>
            </Link>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
        <div className="store-item">
          <div className="store-item-img">
            <img
              className="item-img"
              src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
            ></img>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
        <div className="store-item">
          <div className="store-item-img">
            <img
              className="item-img"
              src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
            ></img>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
        <div className="store-item">
          <div className="store-item-img">
            <img
              className="item-img"
              src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
            ></img>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
        <div className="store-item">
          <div className="store-item-img">
            <img
              className="item-img"
              src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
            ></img>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
        <div className="store-item">
          <div className="store-item-img">
            <img
              className="item-img"
              src="https://th.bing.com/th/id/R.895b97fecf1438033cef63e473a5c3d0?rik=fUdMfoaLEjVaAQ&pid=ImgRaw&r=0"
            ></img>
          </div>
          <div className="details-container">
            <div className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more-details">
              <div className="price">
                Price <br />
                $35.99
              </div>
              <div className="rating">
                Rating <br />
                *****
              </div>
              <div className="stock">
                Stock
                <br />
                12
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
