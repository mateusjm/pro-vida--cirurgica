import React, { useState } from "react";

// CSS
import styles from "./Header.module.css";

// bootstrap
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// react router
import { useLocation } from "react-router-dom";

const Header = ({ logo }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  return (
    <>
      <Navbar
        sticky="top"
        expand="md"
        className={`bg-body-light ${styles.header_shadow} ${styles.navbar_custom}`}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link onClick={handleNavItemClick}>
                <img width={150} src={logo} alt="Logo Pró-Vida Cirúrgica" />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto p-2">
              <LinkContainer to="/">
                <Nav.Link
                  active={location.pathname === "/"}
                  onClick={handleNavItemClick}
                >
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/produtos">
                <Nav.Link
                  active={location.pathname === "/produtos"}
                  onClick={handleNavItemClick}
                >
                  Produtos
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/locacoes">
                <Nav.Link
                  active={location.pathname === "/locacoes"}
                  onClick={handleNavItemClick}
                >
                  Locações
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/servicos">
                <Nav.Link
                  active={location.pathname === "/servicos"}
                  onClick={handleNavItemClick}
                >
                  Serviços
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Button className={styles.button_link} variant="outline-success">
              <a
                className={styles.a}
                href="https://wa.me/message/K7V37SCXJ72KG1"
                target="blank"
              >
                Entrar em contato
              </a>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
