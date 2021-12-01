import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { ItemList } from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { Loader } from "../Loader/Loader";
import {
  Popover,
  PopoverContent,
  PopoverCloseButton,
  PopoverTrigger,
} from "../Popover/Popover";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //categoria del producto
  //si estoy en inicio el params = undefined
  const { brand } = useParams();

  //Al momento de montaje
  useEffect(async () => {
    //consumiendo nuestra base de datos

    //crear la referencia a nuestra coleccion de datos
    const preordersRef = collection(db, "preorders");
    //para filtrar figuras -> query
    const q = brand
      ? query(preordersRef, where("brand", "==", brand))
      : preordersRef;

    getDocs(q)
      .then((response) => {
        //console.log(response);
        const preorders = response.docs.map((doc) => {
          //para añadir id de firebase de cada documento
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(preorders);

        setItems(preorders);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [brand]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="mt-5 p-3 welcome text-center">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <div className="mt-5 p-3 welcome text-center">
            <h1>¡Bienvenido a la tienda!</h1>
          </div>
          <Popover>
            <PopoverTrigger>
              <div className="mt-3 p-3 welcome gradient text-center">
                <h1 className="gradient">Ofertas y descuentos</h1>
              </div>
            </PopoverTrigger>

            <PopoverContent>
              <>
                <div className="p-5 welcome">
                  <PopoverCloseButton />
                  <h1 className="fw-bold">
                    Este mes tenemos muchos descuentos para vos.
                  </h1>
                  <h2>
                    En tu primera compra te regalamos ¥ 1000 en cualquier
                    preorder usando el cupón PRIMERCOMPRA.
                  </h2>
                </div>
              </>
            </PopoverContent>
          </Popover>

          <ItemList items={items} />
        </>
      )}
    </>
  );
};
