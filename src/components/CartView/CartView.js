import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../conext/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { ItemCount } from "../ItemCount/ItemCount";

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

  return (
    <div className="container">
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <>
          <h2>Tu carrito está vacío</h2>
          <Link className="btn btn-primary" to="/">
            Ver figuras
          </Link>
        </>
      ) : (
        <>
          {cart.map((fig) => (
            <div
              className="d-flex flex-column border border-dark m-2 p-2"
              key={fig.id}
            >
              <h3>{fig.name}</h3>
              <h3>¥{fig.price}</h3>
              <h3>{fig.amount}</h3>
              <ItemCount
                count={fig.amount}
                increment={() => incrementAmount(fig)}
                decrement={() => decrementAmount(fig)}
              />

              <button
                className="btn btn-danger"
                onClick={() => removeCart(fig.id)}
              >
                <BsFillTrashFill />
              </button>
            </div>
          ))}
          <h1>Total de productos: {countCart()}</h1>
          <h1>Total: {totalCart()}</h1>

          <button onClick={emptyCart} className="btn btn-danger">
            Vaciar carrito
          </button>
          <button className="btn btn-success">Terminar mi compra</button>
        </>
      )}
    </div>
  );
};
