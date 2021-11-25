import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  return (
    <div className="border border-dark m-2 p-2">
      <img className="w-50" src={item.img} />
      <h1>{item.name}</h1>
      <h1>{item.price}</h1>
      <h1>{item.releaseDate}</h1>
      <h1>Pre-Order</h1>
      <p>{item.desc}</p>
      <ItemCount />
    </div>
  );
};
