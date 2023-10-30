import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Header.css";

function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="header">
     <label id="name">My Shop</label>
      <div className="header_end">
        <Link to="/checkout" style={{ textDecoration: "none", color: "black" }}>
          <span>
            <RiShoppingCartLine />
            <p id="count">{cart.cart.length}</p>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
