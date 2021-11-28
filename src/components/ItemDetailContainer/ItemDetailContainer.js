import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFigure } from "../../utils/preorderAPI";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getFigure(id).then((response) => setItem(response));
  }, [id]);

  return (
    <div className="my-5 p-5 detailContainer">
      {item && <ItemDetail item={item} />}
    </div>
  );
};
