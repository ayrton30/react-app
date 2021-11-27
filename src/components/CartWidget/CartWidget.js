import React, { useContext } from "react";
import "./CartWidget.css";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../../conext/CartContext";

export const CartWidget = () => {
  const { countCart } = useContext(CartContext);

  return (
    <div className="cart-widget fs-4 d-flex align-items-center">
      <HiShoppingCart />
      <span>{countCart()}</span>
    </div>
  );
};
