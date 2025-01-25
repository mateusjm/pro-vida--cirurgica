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

const Header = ({ logo, produtos }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavItemClick = () => {
    if (expanded) setExpanded(false);
  };

  // Função para normalizar as strings e remover acentos
  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
  };

  // Função para lidar com o envio da pesquisa
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    // Normaliza o termo de busca
    const normalizedSearchTerm = normalizeString(searchTerm.toLowerCase());

    // Realiza a navegação para a página de busca com o termo normalizado
    navigate(`/busca?q=${normalizedSearchTerm}`);

    // Limpa o campo de busca e fecha o menu
    setSearchTerm("");
    setExpanded(false);
  };

  return (
    <Navbar
      className={`bg-body-light ${styles.header_shadow} ${styles.navbar_custom}`}
      variant="light"
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
                borderColor: "green"
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
