import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getTotal } from "./Redux/CartReducer";
import "./SubTotal.css";

function SubTotal() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="subtotal">
      <div className="subtotal_area">
        <p>
          Subtotal ({cart.cart.length} items):${getTotal(cart.cart)}
        </p>
        <button>Proceed to Ckeckout</button>
      </div>
    </div>
  );
}

export default SubTotal;
