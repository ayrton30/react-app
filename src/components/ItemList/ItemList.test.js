import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ItemList } from "../ItemList/ItemList";
import { preorders } from "../../data/preorders";
import { MemoryRouter } from "react-router";

//sobre un componente puedo generar varios tests

test("renderiza correctamente", () => {
  //simular de manera virtual el montaje de un componente
  //y su comportamiento

  //debo pasarle por propiedades un array de items
  //ya tenemos datos para la simulacion data/preorders.js
  const component = render(
    <MemoryRouter>
      <ItemList items={preorders} />
    </MemoryRouter>
  );

  //para chequear que el contenido este realmente en la renderizacion
  expect(component.container).toHaveTextContent("Nendoroid");

  //cuantos items renderice
  const items = component.container.querySelectorAll(
    "div#itemContainer.d-flex.flex-column.align-items-center.item.p-4"
  );
  expect(items.length).toBe(preorders.length);
});
