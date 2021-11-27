import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="border border-dark m-2 p-2">
      <img className="w-25" src={item.img} />
      <h1>{item.name}</h1>
      <h1>{item.price}</h1>
      <h1>Pre-Order</h1>
      <Link to={`/detail/${item.id}`} className="btn btn-primary">
        Ver más
      </Link>
    </div>
  );
};
