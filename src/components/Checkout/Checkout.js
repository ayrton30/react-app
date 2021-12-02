import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);

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
            <h1 className="fw-bold mb-4">Ingrese sus datos de contacto:</h1>

            <CheckoutForm setOrderId={setOrderId} />
          </div>
        </>
      )}
    </div>
  );
};
