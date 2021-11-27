import { useState } from "react";

export const useCounter = (initial, preorderLimit) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    count < preorderLimit && setCount(parseInt(count) + 1);
    console.log(count);
  };

  const decrement = () => {
    count > initial && setCount(parseInt(count) - 1);
    console.log(count);
  };

  const reset = () => {
    setCount(initial);
  };

  return {
    //es el estado actual del contador
    count,
    //es la función para incrementar el contador
    increment,
    //es la función para decrementar el contador
    decrement,
    //es la función para resetear el contador
    reset,
  };
};
