import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../conext/CartContext";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";
import { CartItem } from "../CartItem/CartItem";

export const CartView = () => {
  const { countCart, totalCart, emptyCart, cart } = useContext(CartContext);

  //renderizado condicional
  if (cart.length === 0) {
    return (
      <>
        <div className="welcome p-5 my-5 text container">
          <h2 className="text-center fs-1">
            Tu carrito de compras se encuentra vacío
          </h2>
          <Link className="mt-5 fs-3 btn" to="/">
            Ver figuras
          </Link>
        </div>
      </>
    );
  }

  //si tengo compras en el carrito
  return (
    <div className="my-5 text container">
      <h1 className="fw-bold fs-1">Carrito de compras:</h1>

      <>
        {cart.map((fig) => (
          <CartItem key={fig.id} item={fig} />
        ))}

        <button
          onClick={emptyCart}
          className="d-flex gap-2 justify-content-center align-items-center fs-3 w-100 mb-3 btn"
        >
          <BsFillTrashFill /> Vaciar carrito
        </button>
        <div className="p-4 mb-3 detailContainer">
          <h1 className="mt-3">Total de productos: {countCart()}</h1>
          <h1 className="fw-bold ">Total: ¥ {totalCart()}</h1>
        </div>

        <Link
          to="/checkout"
          className="d-flex gap-2 justify-content-center align-items-center text fw-bold fs-3 p-3 cart-widget"
        >
          <BsCheckLg /> Terminar mi compra
        </Link>
      </>
    </div>
  );
};
