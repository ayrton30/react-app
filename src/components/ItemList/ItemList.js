import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="my-3 row row-cols-1 row-cols-sm-2 g-3">
      {items.map((fig) => (
        <div key={fig.id} className="col">
          <Item key={fig.id} item={fig} />
        </div>
      ))}
    </div>
  );
};
