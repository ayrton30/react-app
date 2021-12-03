import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import "../ItemDetailContainer/ItemDetailContainer.css";
import { Loader } from "../Loader/Loader";
import { collection, doc, getDoc } from "firebase/firestore/lite";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    //crear la referencia a nuestra coleccion de datos

    async function fetchData() {
      const preordersRef = collection(db, "preorders");
      //obtenemos documento -> figura en particular con el param id
      const docRef = doc(preordersRef, id);

      await getDoc(docRef)
        .then((response) => {
          setItem({
            id: response.id,
            ...response.data(),
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchData();
  }, [item, id]);

  return (
    <div className="my-5 p-5 detailContainer">
      {isLoading ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};
