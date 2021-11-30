import React, { useContext, useState } from "react";
import { CartContext } from "../../conext/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [valuesInput, setValuesInput] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const newOrder = (buyer) => {
    const order = {
      //generar la orden con los datos del formulario
      buyer: buyer,
      items: cart,
      total: totalCart(),
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

  const handleInputChange = (e) => {
    //puedo acceder a que input lanzo el evento
    //con e.target.name
    setValuesInput({
      ...valuesInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //verificar campos no vacios!
    //si existe algun atributo del objeto valuesInput vacio
    if (Object.values(valuesInput).some((value) => value === "")) {
      alert("Complete sus datos en el formulario.");
    } else {
      //console.log(valuesInput);
      newOrder(valuesInput);
    }
  };

  return (
    <div>
      {orderId ? (
        <>
          <div className=" welcome p-4 my-5">
            <div className="mt-3 d-flex flex-column align-items-center text">
              <h1>¡Gracias por confiar en nosotros!</h1>

              <h2 className="mt-3">Su orden de compra es:</h2>
              <h2>{orderId}</h2>
            </div>
            <Link className="mt-5 fs-3 btn" to="/">
              Ver figuras
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="text welcome p-4 my-5">
            <h1 className="fw-bold mb-4">Resumen de la compra</h1>
            <form onSubmit={handleSubmit}>
              <input
                name="nombre"
                className="fs-2 form-control text my-2"
                onChange={handleInputChange}
                type="text"
                value={valuesInput.nombre}
                placeholder="Nombre y Apellido"
              />
              <input
                name="email"
                className="fs-2 form-control text my-2"
                onChange={handleInputChange}
                type="mail"
                value={valuesInput.email}
                placeholder="example@gmail.com"
              />
              <input
                name="tel"
                className="fs-2 form-control text my-2"
                onChange={handleInputChange}
                type="tel"
                value={valuesInput.tel}
                placeholder="Teléfono"
              />
              <button className="w-100 fs-4 mt-4 btn">Finalizar</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
