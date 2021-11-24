import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const handleSumar = () => {
    cantidad < stock && setCantidad(parseInt(cantidad) + 1);
  };

  const handleRestar = () => {
    cantidad > initial && setCantidad(parseInt(cantidad) - 1);
  };

  return (
    <div className="d-inline-flex flex-column border rounded border-dark p-1">
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={handleRestar} className="btn fs-1">
          <AiFillMinusCircle />
        </button>
        <span className="fs-1 mx-2">{cantidad}</span>
        <button onClick={handleSumar} className="btn fs-1">
          <AiFillPlusCircle />
        </button>
      </div>
      <div>
        <button onClick={onAdd} className="btn btn-success fs-3">
          Agregar
        </button>
      </div>
    </div>
  );
};
