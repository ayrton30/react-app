import React, { useContext } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import "../ItemCount/ItemCount.css";
import { CartContext } from "../../conext/CartContext";

export const ItemCount = ({ count, increment, decrement, onAdd }) => {
  const { initialAmount, maxAmount } = useContext(CartContext);

  return (
    <div className="itemCount p-4 d-flex flex-column align-items-center">
      <div className="d-flex gap-4 justify-content-center align-items-center">
        <button
          onClick={decrement}
          className={
            count === initialAmount
              ? "d-flex btn_disabled display-5"
              : "d-flex btn_enabled display-5"
          }
        >
          <HiMinus />
        </button>

        <span className="display-3">{count}</span>

        <button
          onClick={increment}
          className={
            count === maxAmount
              ? "d-flex btn_disabled display-5"
              : "d-flex btn_enabled display-5"
          }
        >
          <HiPlus />
        </button>
      </div>

      {onAdd && (
        <div>
          <button
            onClick={onAdd}
            className="mt-2 px-5 py-2 fw-bold cart-widget fs-3"
          >
            <FaCartPlus className="fs-1" /> Agregar
          </button>
        </div>
      )}
    </div>
  );
};
