import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sandaliasortopedicas from "../../data/sandaliasortopedicas.json";

// CSS
import styles from "./Sandalias.module.css";

const Sandalias = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Sandálias Ortopédicas em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos sandálias ortopédicas em Ponte Nova projetados para
            aliviar a dor nos pés, calcanhares, joelhos e até mesmo nas costas,
            graças à sua distribuição de peso, estabilidade e amortecimento.
            Reduzem a sobrecarga em pontos específicos e proporcionam uma
            postura mais equilibrada."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <style type="text/css">
        {`
        .container-fluid {
          --bs-gutter-x: 0;
        }
      `}
      </style>
      <div>
        <Container fluid>
          <img
            className={`img-fluid image-carousel-produtos`}
            src={banner2}
            alt="Pró-Vida Banner Produtos"
          />
        </Container>
      </div>
      <div>
        <Container className="p-4 mt-4">
          <h1 className="text-center text-success">
            Sandálias Ortopédicas em Ponte Nova
          </h1>
          <p className="text-center mb-5">
            Oferecemos sandálias ortopédicas em Ponte Nova projetados para
            aliviar a dor nos pés, calcanhares, joelhos e até mesmo nas costas,
            graças à sua distribuição de peso, estabilidade e amortecimento.
            Reduzem a sobrecarga em pontos específicos e proporcionam uma
            postura mais equilibrada.
          </p>
          <Row>
            {sandaliasortopedicas.map(({ id, name, image }) => (
              <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                <Card>
                  <Link to={`/produtos/sandalias/${id}`}>
                    <Card.Img
                      className={styles.images_sandalias}
                      variant="top"
                      src={image}
                      alt={`${name} em Ponte Nova`}
                    />
                  </Link>
                </Card>
                <h6 className="text-center mt-3">{name}</h6>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Sandalias;
