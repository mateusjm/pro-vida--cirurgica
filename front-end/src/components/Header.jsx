import React, { useState } from "react";
import styles from "./Header.module.css";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ logo }) => {
  const location = useLocation();

  return (
    <Navbar style={{zIndex: 10}} className={`${styles.header_shadow}`} expand="lg">
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <a>
              <img width={150} src={logo} alt="Logo Pró-Vida Cirúrgica" />
            </a>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-2" role="navigation" aria-label="Menu principal">
            <LinkContainer to="/">
              <Nav.Link active={location.pathname === "/"}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/produtos">
              <Nav.Link active={location.pathname === "/produtos"}>Produtos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/locacoes">
              <Nav.Link active={location.pathname === "/locacoes"}>Locações</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/servicos">
              <Nav.Link active={location.pathname === "/servicos"}>Serviços</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link active={location.pathname === "/blog"}>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato">
              <Nav.Link active={location.pathname === "/contato"}>Contato</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
