import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sapatos from "../../data/sapatos.json";

// CSS
import styles from "./SapatosSoftWorks.module.css";

const SapatosSoftWorks = ({ banner2 }) => {
  return (
    <>
      <Helmet>
        <title>Sapatos Hospitalares</title>
        <meta
          name="description"
          content="Oerecemos sapatos hospitalares impermeáveis, ideais para o ambiente de trabalho em hospitais. Confortáveis, leves e macios, esses calçados foram desenvolvidos para garantir conforto durante toda a rotina, proporcionando segurança e praticidade no dia a dia."
        />
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
        <Container className="p-5 mt-4">
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
                        alt={name}
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
