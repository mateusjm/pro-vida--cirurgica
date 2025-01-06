import React from "react";

// CSS
import styles from "./Footer.module.css";

// bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";

const Footer = ({ logo, telefone, email, facebook, instagram, whatsapp }) => {
  return (
    <Container
      fluid
      expand="xxl"
      className={`footer-fixed p-3 bg-dark text-white ${styles.height_custom}`}
    >
      <Row className="mt-5 mb-5 p-3">
        <Col xxl={3} className="text-center">
          <Link to="/">
            <img width={200} src={logo} alt="Logo da Pró-Vida" />
          </Link>
        </Col>
        <Col xxl={3} md={4} className="p-3">
          <h6>Links Úteis</h6>
          <Stack gap>
            <LinkContainer to="/">
              <Link className={styles.footerLink}>Home</Link>
            </LinkContainer>
            <LinkContainer to="/produtos">
              <Link className={styles.footerLink}>Produtos</Link>
            </LinkContainer>
            <LinkContainer to="/locacoes">
              <Link className={styles.footerLink}>Locações</Link>
            </LinkContainer>
            <LinkContainer to="/servicos">
              <Link className={styles.footerLink}>Serviços</Link>
            </LinkContainer>
          </Stack>
        </Col>
        <Col xxl={3} md={4} className="p-3">
          <h6>Redes Sociais</h6>
          <Stack>
            <Link
              className={styles.footerLink}
              to="https://www.instagram.com/provida.cirurgica"
              target="blank"
            >
              <img className="p-1" width={25} src={instagram} alt="Instagram" />
              Instagram
            </Link>
            <Link className={styles.footerLink}>
              <img className="p-1" width={25} src={facebook} alt="Facebook" />
              Facebook
            </Link>
            <Link
              className={styles.footerLink}
              to="https://wa.me/message/K7V37SCXJ72KG1"
              target="blank"
            >
              <img className="p-1" width={25} src={whatsapp} alt="WhatsApp" />
              WhatsApp
            </Link>
          </Stack>
        </Col>
        <Col xxl={3} md={4} className="p-3">
          <h6>Contato</h6>
          <Stack>
            <Link className={styles.footerLink}>
              <img className="p-1" width={25} src={telefone} alt="Telefone" />
              (31) 98976-7045
            </Link>
            <Link className={styles.footerLink}>
              <img className="p-1" width={25} src={telefone} alt="Telefone" />
              (31) 3881-7565
            </Link>
            <Link
              className={styles.footerLink}
              to="mailto:contato@providacirurgica.com.br"
            >
              <img className="p-1" width={25} src={email} alt="E-mail" />
              E-mail
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
