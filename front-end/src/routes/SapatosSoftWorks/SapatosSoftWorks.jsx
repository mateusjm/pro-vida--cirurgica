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
        <title>Sapatos Profissionais</title>
        <meta
          name="description"
          content="Sapatos Profissionais SoftWorks em Ponte Nova."
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
                    <Link to={`/produtos/sapatos-profissionais/${id}`}>
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
