import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import aparelhosmonitoramento from "../../data/aparelhosmonitoramento.json";

// CSS
import styles from "./AparelhosMonitoramento.module.css";

const ColchoesTravesseiros = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Aparelhos de Monitoramento em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos aparelhos de monitoramento para saúde, como oxímetro, medidor de glicose e aparelho de pressão em Ponte Nova MG. Precisão e segurança para acompanhar sua saturação, glicemia e pressão arterial no dia a dia."
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
          <h1 className="text-center text-success mb-4">
            Aparelhos de Monitoramento em Ponte Nova
          </h1>
          <p className="text-center mb-5">
            Encontre os melhores aparelhos de monitoramento para acompanhar sua saturação, glicemia e pressão arterial no dia a dia.
          </p>
          <Row>
            {aparelhosmonitoramento &&
              aparelhosmonitoramento.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/aparelhos/${id}`}>
                      <Card.Img
                        className={styles.images_aparelhos}
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

export default ColchoesTravesseiros;
