import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../conext/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const CartItem = ({ item }) => {
  const { removeCart, incrementAmount, decrementAmount } =
    useContext(CartContext);

  return (
    <div
      className="d-flex detailContainer align-items-center justify-content-between my-4 p-4"
      key={item.id}
    >
      <div>
        <img className="w-25" src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <h3>¥ {item.price}</h3>
      </div>
      <div className="d-flex">
        <ItemCount
          count={item.amount}
          increment={() => incrementAmount(item)}
          decrement={() => decrementAmount(item)}
        />

        <button className="mx-2 fs-2 btn" onClick={() => removeCart(item.id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};
