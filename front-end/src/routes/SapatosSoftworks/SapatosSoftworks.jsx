import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sapatos from "../../data/sapatos.json";

// CSS
import styles from "./SapatosSoftWorks.module.css";

const SapatosSoftWorks = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Sapatos Hospitalares em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos sapatos hospitalares em Ponte Nova impermeáveis, ideais para o ambiente de trabalho em hospitais. Confortáveis, leves e macios, esses calçados foram desenvolvidos para garantir conforto
          durante toda a rotina, proporcionando segurança e praticidade no dia
          a dia."
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
            Sapatos Hospitalares em Ponte Nova
          </h1>
          <p className="text-center mb-5">
            Oferecemos sapatos hospitalares em Ponte Nova impermeáveis, ideais
            para o ambiente de trabalho em hospitais. Confortáveis, leves e
            macios, esses calçados foram desenvolvidos para garantir conforto
            durante toda a rotina, proporcionando segurança e praticidade no dia
            a dia.
          </p>
          <Row>
            {sapatos &&
              sapatos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/sapatos/${id}`}>
                      <Card.Img
                        className={styles.images_sapatos_hospitalares}
                        variant="top"
                        src={image}
                        alt={`${name} em Ponte Nova`}
                      />
                    </Link>
                  </Card>
                  <Card.Title className="text-center mt-3">{name}</Card.Title>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SapatosSoftWorks;
