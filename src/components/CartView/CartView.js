import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../conext/CartContext";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";
import { ItemCount } from "../ItemCount/ItemCount";
import { IoMdArrowRoundBack } from "react-icons/io";

export const CartView = () => {
  const {
    countCart,
    totalCart,
    removeCart,
    emptyCart,
    cart,
    incrementAmount,
    decrementAmount,
  } = useContext(CartContext);

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
          <div
            className="d-flex detailContainer align-items-center justify-content-between my-4 p-4"
            key={fig.id}
          >
            <div>
              <img className="w-25" src={fig.img} />
              <h3>{fig.name}</h3>
              <h3>¥ {fig.price}</h3>
            </div>
            <div className="d-flex">
              <ItemCount
                count={fig.amount}
                increment={() => incrementAmount(fig)}
                decrement={() => decrementAmount(fig)}
              />

              <button
                className="mx-2 fs-2 btn"
                onClick={() => removeCart(fig.id)}
              >
                <BsFillTrashFill />
              </button>
            </div>
          </div>
        ))}
        <div className="p-4 mb-3 detailContainer">
          <h1 className="mt-3">Total de productos: {countCart()}</h1>
          <h1 className="fw-bold ">Total: ¥ {totalCart()}</h1>
        </div>

        <button
          onClick={emptyCart}
          className="d-flex gap-2 justify-content-center align-items-center fs-3 w-100 mb-3 btn"
        >
          <BsFillTrashFill /> Vaciar carrito
        </button>
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
