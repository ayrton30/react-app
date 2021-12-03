import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../conext/CartContext";
import { newOrder } from "../../firebase/newOrder";
import "../CheckoutForm/CheckoutForm.css";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Dato requerido")
    .min(4, "Demasiado corto!")
    .max(30, "Demasiado largo!"),
  email: Yup.string().required("Dato requerido").email("Invalido"),
  tel: Yup.string().required("Dato requerido"),
});

export const CheckoutForm = (props) => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);

  return (
    <Formik
      initialValues={{ nombre: "", email: "", tel: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        newOrder(values, cart, totalCart(), props.setOrderId, emptyCart);
      }}
    >
      <Form>
        <ErrorMessage name="nombre">
          {(msg) => <div className="px-2 errorMessage">{msg}</div>}
        </ErrorMessage>
        <Field
          name="nombre"
          className="fs-2 form-control my-2"
          type="text"
          placeholder="Nombre y Apellido"
        />
        <ErrorMessage name="email">
          {(msg) => <div className="px-2 errorMessage">{msg}</div>}
        </ErrorMessage>
        <Field
          name="email"
          className="fs-2 form-control my-2"
          type="mail"
          placeholder="example@gmail.com"
        />
        <ErrorMessage name="tel">
          {(msg) => <div className="px-2 errorMessage">{msg}</div>}
        </ErrorMessage>
        <Field
          name="tel"
          className="fs-2 form-control my-2"
          type="tel"
          placeholder="Teléfono"
        />
        <button type="submit" className="w-100 fs-4 mt-4 btn">
          Finalizar
        </button>
      </Form>
    </Formik>
  );
};
