import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Navbar, Container } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

export const NavBar = () => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  //Al momento de montaje
  useEffect(() => {
    //consumiendo nuestra base de datos
    //categories dinámicas

    async function fetchData() {
      //crear la referencia a nuestra coleccion de datos
      const categoriesRef = collection(db, "categories");

      await getDocs(categoriesRef)
        .then((response) => {
          console.log(response);
          const categories = response.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setCategories(categories);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchData();
  }, []);

  return (
    <header>
      <Navbar className="d-flex flex-wrap my_nav">
        <Container>
          <Link className="link_title gradient" to="/">
            <div className="fs-1">GoodSmile</div>
          </Link>

          <div className="d-flex justify-content-end align-items-center gap-2 flex-nowrap fs-4">
            {!isLoading && (
              <>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    className="link p-2"
                    to={`/category/${category.brand}`}
                  >
                    {category.category}
                  </Link>
                ))}
              </>
            )}

            <Link className="p-2 link_cart" to="/cart">
              <CartWidget />
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
