import React from "react";
import { useSelector } from "react-redux";
import SubTotal from "./SubTotal";
import { useDispatch } from "react-redux";
import { removefromcart } from "./Redux/CartAction";
import "./Checkout.css";
function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="checkout">
      <div className="checkout_items">
        <h2>Your Shopping Cart</h2>
        {cart.cart.map((item) => {
          return (
            <div className="checkout_product">
              <img src={item.image} />
              <div className="checkout_product_info">
                <h4>{item.title}</h4>
                <p>{item.rating}</p>
                <p>{item.price}</p>
                <button onClick={() => dispatch(removefromcart(item.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="subtotal">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
