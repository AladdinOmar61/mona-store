import ReactModal from "react-modal";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import "./ShoppingCart.css";
import PropTypes from "prop-types";
import { useSupabase } from "../../../lib/hooks/useSupabase";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

function ShoppingCart(props) {
  const { cart, setCart } = useSupabase();

  const removeCartItem = (itemToRemove) => {
    const storedCart = sessionStorage.getItem("products");
    if (storedCart) {
      const currCart = JSON.parse(storedCart);
      const filteredCart = currCart.filter(
        (cartItem, index) => index !== itemToRemove
      );
      const newCart = JSON.stringify(filteredCart);
      sessionStorage.setItem("products", newCart);
      sessionStorage.removeItem(`quantity${cart.indexOf(cart[itemToRemove])}`);
      setCart(filteredCart);
    }
  };

  return (
    <div className="shopping-cart">
      <ReactModal
        ariaHideApp={false}
        contentLabel="Shopping Cart"
        className={{
          base: "CartModal",
          afterOpen: "CartModal--after-open",
          beforeClose: "CartModal--before-close",
        }}
        isOpen={props.cartOpened}
        onRequestClose={props.handleCart}
        closeTimeoutMS={300}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 150,
          },
          content: {
            backgroundColor: "white",
            right: 5,
            top: 0,
            marginRight: -5,
            width: "470px",
            position: "relative",
            outline: "none",
          },
        }}
      >
        <Icon
          className="close-cart"
          onClick={props.handleCart}
          path={mdiClose}
        />
        <h1 className="cart-header">Shopping Cart</h1>
        <hr className="cart-divider" />
        <div className="cart-item-list">
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <ShoppingCartItem
                item={item}
                key={index}
                index={index}
                removeCartItem={removeCartItem}
              />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No items in cart</p>
          )}
        </div>
        <button className="checkout">Checkout</button>
      </ReactModal>
    </div>
  );
}
ShoppingCart.propTypes = {
  cartOpened: PropTypes.bool.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
