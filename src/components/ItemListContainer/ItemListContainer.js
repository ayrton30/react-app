import React, { useEffect, useState } from "react";
import { getFigures } from "../../utils/preorderAPI";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const handlerBotonComprar = () => {
    alert("Agregado al carrito");
  };

  const [items, setItems] = useState([]);

  //Al momento de montaje
  useEffect(() => {
    getFigures()
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" border border-dark m-2 text-center">
      <h1>¡Bienvenido a la tienda!</h1>
      <h2>ItemListContainer</h2>
      {items && <ItemList items={items} />}
    </div>
  );
};
