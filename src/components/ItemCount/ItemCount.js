import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const ItemCount = ({ count, increment, decrement, onAdd }) => {
  return (
    <div className="d-inline-flex flex-column border rounded border-dark p-1">
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={decrement} className="btn fs-1">
          <AiFillMinusCircle />
        </button>
        <span className="fs-1 mx-2">{count}</span>
        <button onClick={increment} className="btn fs-1">
          <AiFillPlusCircle />
        </button>
      </div>
      {onAdd && (
        <div>
          <button onClick={onAdd} className="btn btn-success fs-3">
            Agregar
          </button>
        </div>
      )}
    </div>
  );
};
