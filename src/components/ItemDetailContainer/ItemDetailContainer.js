import React, { useEffect, useState } from "react";
import { getFigure } from "../../utils/preorderAPI";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getFigure(1753).then((response) => setItem(response));
  }, []);

  return (
    <div className=" border border-dark m-2 text-center">
      <h2>ListDetailContainer</h2>
      {item && <ItemDetail item={item} />}
    </div>
  );
};
