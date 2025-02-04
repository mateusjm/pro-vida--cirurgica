import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import materiaisortopedicos from "../../data/materiaisortopedicos.json";

// CSS
import styles from "./MateriaisOrtopedicos.module.css";

const MateriaisOrtopedicos = ({ banner2 }) => {
  return (
    <>
      <Helmet>
        <title>Materiais Ortopédicos</title>
        <meta
          name="description"
          content="Oferecemos materiais ortopédicos como tipoia, imobilizador de joelho, joelheira e palmilha ortopédica em Ponte Nova Mg. Produtos essenciais para o alívio de dores, prevenção e recuperação de lesões musculoesqueléticas com conforto e qualidade"
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
            {materiaisortopedicos &&
              materiaisortopedicos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/ortopedicos/${id}`}>
                      <Card.Img
                        className={styles.images_materiais_ortopedicos}
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

export default MateriaisOrtopedicos;
