import React from "react";
import "./NavBar.css";
import { Navbar, Container } from "react-bootstrap";
import { MdSmartToy } from "react-icons/md";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" variant="primary">
        <Container>
          <Link to="/">
            <div className="fs-2">
              <MdSmartToy /> Figs
            </div>
          </Link>

          <div className="d-flex justify-content-end">
            <Link to="/category/nendo">Nendoroid</Link>
            <Link to="/category/figma">figma</Link>
            <Link to="/category/scale">Figuras en escala</Link>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
