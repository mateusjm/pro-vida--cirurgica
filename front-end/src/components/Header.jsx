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
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavItemClick = () => {
    if (expanded) setExpanded(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
  
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    navigate(`/busca?q=${encodeURIComponent(normalizedSearchTerm)}`);
  
    setSearchTerm("");
    setExpanded(false);
  };

  return (
    <Navbar
      className={`${styles.header_shadow} ${styles.navbar_custom}`}
      expand="lg"
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
          <Nav className="ms-auto p-2" role="navigation" aria-label="Menu principal">
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
            <LinkContainer to="/blog">
              <Nav.Link
                active={location.pathname === "/blog"}
                onClick={handleNavItemClick}
              >
                Blog
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato">
              <Nav.Link
                active={location.pathname === "/contato"}
                onClick={handleNavItemClick}
              >
                Contato
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="Pesquisar produtos..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Pesquisar produtos"
              style={{
                outline: "none",
                boxShadow: "none",
                borderColor: "green",
              }}
            />
            <Button variant="outline-success" className="me-2" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
