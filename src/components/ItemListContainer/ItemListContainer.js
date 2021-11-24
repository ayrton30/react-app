import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({ productID, description }) => {
  const handlerBotonComprar = () => {
    alert("Agregado al carrito");
  };

  return (
    <div className="border border-dark m-2 text-center">
      <h1>{productID}</h1>
      <h2>{description}</h2>
      <ItemCount stock="5" initial="1" onAdd={handlerBotonComprar} />
    </div>
  );
};
