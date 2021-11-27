import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../conext/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const { initialAmount, maxAmount, addToCart, isInCart } =
    useContext(CartContext);

  const { count, increment, decrement } = useCounter(initialAmount, maxAmount);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddFig = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: count,
    });
  };

  return (
    <div className="d-flex flex-column border border-dark m-2 p-2">
      <button onClick={handleBack} className="btn btn-danger">
        Volver
      </button>
      <img className="w-50" src={item.img} />
      <h1>{item.name}</h1>
      <h1>{item.price}</h1>
      <h1>{item.releaseDate}</h1>
      <h1>Pre-Order</h1>
      <p>{item.desc}</p>

      {!isInCart(item.id) ? (
        <ItemCount
          count={count}
          increment={increment}
          decrement={decrement}
          onAdd={handleAddFig}
        />
      ) : (
        <Link to className="btn btn-success">
          Terminar mi compra
        </Link>
      )}
    </div>
  );
};
