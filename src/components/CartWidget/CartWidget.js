import React from "react";
import "./CartWidget.css";
import { HiShoppingCart } from "react-icons/hi";

export const CartWidget = () => {
  return (
    <div className="cart-widget fs-2 d-flex align-items-center">
      <HiShoppingCart variant="primary" />
    </div>
  );
};
