import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../conext/CartContext";
import { newOrder } from "../../firebase/newOrder";

const schema = Yup.object().shape({
  nombre: Yup.string().required().min(4).max(30),
  email: Yup.string().required().email(),
  tel: Yup.string().required(),
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
        <Field
          name="nombre"
          className="fs-2 form-control text my-2"
          type="text"
          placeholder="Nombre y Apellido"
        />
        <Field
          name="email"
          className="fs-2 form-control text my-2"
          type="mail"
          placeholder="example@gmail.com"
        />
        <Field
          name="tel"
          className="fs-2 form-control text my-2"
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
