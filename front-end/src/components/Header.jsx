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
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      style={{ zIndex: 10 }}
      className={`${styles.header_shadow}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <a onClick={() => setExpanded(false)}>
              <img width={150} src={logo} alt="Logo Pró-Vida Cirúrgica" />
            </a>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto p-2"
            role="navigation"
            aria-label="Menu principal"
          >
            <LinkContainer to="/" onClick={() => setExpanded(false)}>
              <Nav.Link active={location.pathname === "/"}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/produtos" onClick={() => setExpanded(false)}>
              <Nav.Link active={location.pathname === "/produtos"}>
                Produtos
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/locacoes" onClick={() => setExpanded(false)}>
              <Nav.Link active={location.pathname === "/locacoes"}>
                Locações
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/servicos" onClick={() => setExpanded(false)}>
              <Nav.Link active={location.pathname === "/servicos"}>
                Serviços
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog" onClick={() => setExpanded(false)}>
              <Nav.Link active={location.pathname === "/blog"}>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato" onClick={() => setExpanded(false)}>
              <Nav.Link active={location.pathname === "/contato"}>
                Contato
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
