import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import servicos from "../../data/servicos.json";

// CSS
import styles from "./Services.module.css";

const Services = ({ banner4 }) => {
  return (
    <>
      <Helmet>
        <title>Serviços</title>
        <meta
          name="description"
          content="Conheça nossos serviços hospitalares, produtos sob medida, Palmilhas Ortopédicas, Colete OTLS, Próteses Ortopédicas e Colar Aspen em Ponte Nova Mg."
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
            className={`img-fluid image-carousel-servicos`}
            src={banner4}
            alt="Servicos hospitalares da Pró-Vida Cirúrgica em Ponte Nova Mg"
          />
        </Container>
      </div>
      <section aria-label="Serviços disponíveis">
        <Container className="p-5 mt-4">
          <Row>
            {servicos &&
              servicos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/servicos/${id}`}>
                      <Card.Img
                        className={styles.images_services}
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
      </section>
    </>
  );
};

export default Services;
