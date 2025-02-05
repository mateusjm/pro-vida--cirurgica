import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import materiaisdescartaveis from "../../data/materiaisdescartaveis.json";

// CSS
import styles from "./MateriaisDescartaveis.module.css";

const MateriaisDescartaveis = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Materiais Descartáveis</title>
        <meta
          name="description"
          content="Oferecemos materiais descartáveis em Ponte Nova MG como máscara, sachê de gel, espéculo e preservativo não lubrificado, ideais para atender às necessidades de consumos de clínicas e cuidados pessoais, com qualidade e praticidade."
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
        <Container className="p-5 mt-4">
          <Row>
            {materiaisdescartaveis &&
              materiaisdescartaveis.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/descartaveis/${id}`}>
                      <Card.Img
                        className={styles.images_materiais_descartaveis}
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

export default MateriaisDescartaveis;
