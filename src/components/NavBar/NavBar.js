import React from "react";
import "./NavBar.css";
import { Navbar, Container } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Navbar className="d-flex flex-wrap my_nav">
        <Container>
          <Link className="link_title gradient" to="/">
            <div className="fs-1">Good Smile :)</div>
          </Link>

          <div className="d-flex justify-content-end align-items-center gap-3 fs-4">
            <Link className="link p-2" to="/category/nendo">
              Nendoroid
            </Link>
            <Link className="link p-2" to="/category/figma">
              figma
            </Link>
            <Link className="link p-2" to="/category/scale">
              Figuras en escala
            </Link>
            <Link className="p-2 link_cart" to="/cart">
              <CartWidget />
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
