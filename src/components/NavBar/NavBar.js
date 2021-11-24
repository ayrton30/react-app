import React from "react";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { MdSmartToy } from "react-icons/md";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" variant="primary">
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            <MdSmartToy /> Figs
          </Navbar.Brand>
          <div className="d-flex justify-content-end">
            <Nav.Link href="#">Enlace 1</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1">Fig Marca 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2">FigMarca 2</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
