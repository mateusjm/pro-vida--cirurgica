import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import servicos from "../../data/servicos.json";

import ButtonSearch from '../../components/ButtonSearch'

// CSS
import styles from "./Services.module.css";

const Services = ({ banner4, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Serviços Hospitalares em Ponte Nova</title>
        <meta
          name="description"
          content="Conheça nossos serviços hospitalares, produtos sob medida, Palmilhas Ortopédicas, Colete OTLS, Próteses Ortopédicas e Colar Aspen em Ponte Nova Mg."
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
            className={`img-fluid image-carousel-servicos`}
            src={banner4}
            alt="Servicos hospitalares da Pró-Vida Cirúrgica em Ponte Nova Mg"
          />
        </Container>
      </div>
      <ButtonSearch searchPath="/busca"  placeholder="Pesquisar produtos..." />
      <section aria-label="Serviços disponíveis">
        <Container className="p-4 mt-3">
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
                        alt={`${name} em Ponte Nova`}
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
