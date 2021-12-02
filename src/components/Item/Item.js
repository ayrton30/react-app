import React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css";

export const Item = ({ item }) => {
  return (
    <div
      id="itemContainer"
      className="d-flex flex-column align-items-center item p-4"
    >
      <img className="w-50" src={item.img} alt={item.name} />

      <div className="mt-3 align-items-center d-flex flex-column justify-content-center gap-1">
        <h1 className="text-center fs-1">{item.name}</h1>

        <h1 className="fs-5 px-3 py-1 preorder">Pre-Order</h1>
        <Link to={`/detail/${item.id}`} className="mt-3 fs-3 px-5 btn">
          Ver más
        </Link>
      </div>
    </div>
  );
};
