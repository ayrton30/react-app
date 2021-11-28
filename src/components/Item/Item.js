import React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css";

export const Item = ({ item }) => {
  return (
    <div className="d-flex flex-column align-items-center item p-4">
      <img className="w-50" src={item.img} />

      <div className="mt-3 align-items-center d-flex flex-column justify-content-center gap-1">
        <h1 className="text-center fs-1">{item.name}</h1>

        <h1 className="fs-5 px-3 py-1 preorder">Pre-Order</h1>
      </div>
      <Link to={`/detail/${item.id}`} className="mt-3 fs-3 w-100 btn">
        Ver más
      </Link>
    </div>
  );
};
