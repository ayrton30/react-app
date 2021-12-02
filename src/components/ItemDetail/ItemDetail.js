import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../conext/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCartCheckFill } from "react-icons/bs";

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
      img: item.img,
    });
  };

  return (
    <>
      <button onClick={handleBack} className="rounded-circle btn_back">
        <IoMdArrowRoundBack className="display-1" />
      </button>

      <div className="d-flex gap-5 align-items-center mb-4">
        <div>
          <img className="img" src={item.img} alt={item.name} />
        </div>
        <div className="d-flex flex-column align-items-start text">
          <h1 className="display-3 title">{item.name}</h1>
          <h1 className="fs-2">Price: ¥ {item.price}</h1>
          <h1 className="fs-2">Release date: {item.releaseDate}</h1>
          <h1 className="fs-5 px-3 py-1 preorder">Pre-Order</h1>
          <p className="fs-3">{item.desc}</p>
        </div>
      </div>
      {!isInCart(item.id) ? (
        <div className="d-flex flex-column mt-4">
          <ItemCount
            count={count}
            increment={increment}
            decrement={decrement}
            onAdd={handleAddFig}
          />
        </div>
      ) : (
        <Link
          to="/cart"
          className="text fw-bold fs-2 d-flex gap-2 align-items-baseline justify-content-center p-3 cart-widget"
        >
          <BsCartCheckFill />
          Ir al carrito
        </Link>
      )}
    </>
  );
};
