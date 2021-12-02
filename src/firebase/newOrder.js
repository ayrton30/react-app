import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { db } from "./config";

export const newOrder = (buyer, cart, total, setOrderId, emptyCart) => {
  const order = {
    //generar la orden con los datos del formulario
    buyer: buyer,
    items: cart,
    total: total,
    date: Timestamp.fromDate(new Date()),
  };
  console.log(order);

  //obtengo la referencia y si no existe se crea
  //si no paso id se genera auto
  const ordersRef = collection(db, "orders");
  addDoc(ordersRef, order).then((response) => {
    setOrderId(response.id);
    emptyCart();
  });
};
