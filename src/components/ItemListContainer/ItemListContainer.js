import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFigures } from "../../utils/preorderAPI";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const handlerBotonComprar = () => {
    alert("Agregado al carrito");
  };

  const [items, setItems] = useState([]);
  //categoria del producto
  //si estoy en inicio el params = undefined
  const { brand } = useParams();

  //Al momento de montaje
  useEffect(() => {
    getFigures()
      .then((response) => {
        if (brand) {
          //si no estoy en la pagina de inicio
          setItems(response.filter((fig) => fig.brand === brand));
        } else {
          setItems(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [brand]);

  return (
    <div className=" border border-dark m-2 text-center">
      <h1>¡Bienvenido a la tienda!</h1>
      <h2>ItemListContainer</h2>
      {items && <ItemList items={items} />}
    </div>
  );
};
