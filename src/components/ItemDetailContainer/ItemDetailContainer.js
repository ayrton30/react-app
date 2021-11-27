import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFigure } from "../../utils/preorderAPI";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getFigure(id).then((response) => setItem(response));
  }, [id]);

  return (
    <div className=" border border-dark m-2 text-center">
      <h2>ListDetailContainer</h2>
      {item && <ItemDetail item={item} />}
    </div>
  );
};
