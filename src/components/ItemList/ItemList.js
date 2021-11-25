import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="border border-dark m-2">
      <h3>ItemList</h3>
      {items.map((fig) => (
        <Item key={fig.id} item={fig} />
      ))}
    </div>
  );
};
