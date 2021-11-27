import { preorders } from "../data/preorders";

// Se crea una promesa que devuelve los datos guardados
// Se simula una demora de esta solicitud de datos
export const getFigures = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(preorders);
    }, 100);
  });
};

export const getFigure = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(preorders.find((fig) => fig.id === id));
    }, 100);
  });
};
