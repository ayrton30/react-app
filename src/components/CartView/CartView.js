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
    <div className="my-5 text container">
      <h1 className="fw-bold display-2">Carrito de compras:</h1>
      {cart.length === 0 ? (
        <>
          <h2 className="p-5 text-center display-3">Tu carrito está vacío</h2>
          <Link className="fs-2 btn" to="/">
            Ver figuras
          </Link>
        </>
      ) : (
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
                  className="btn btn-danger"
                  onClick={() => removeCart(fig.id)}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            </div>
          ))}
          <h1 className="mt-3">Total de productos: {countCart()}</h1>
          <h1>Total: ¥ {totalCart()}</h1>

          <button onClick={emptyCart} className="btn btn-danger">
            Vaciar carrito
          </button>
          <button className="btn btn-success">Terminar mi compra</button>
        </>
      )}
    </div>
  );
};
