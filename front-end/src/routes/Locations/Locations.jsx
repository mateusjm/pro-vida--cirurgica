import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import locacoes from "../../data/locacoes.json";

import ButtonSearch from '../../components/ButtonSearch'

// CSS
import styles from "./Locations.module.css";

const Locations = ({ banner3, favicon}) => {
  return (
    <>
      <Helmet>
        <title>Locações Hospitalares em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos aluguel de equipamentos hospitalares em Ponte Nova Mg, como CPAP, Cama Hospitalar, Cadeira de Rodas, Cadeira de Banho, Muletas e Andadores. Conforto, segurança e praticidade para a recuperação e mobilidade do paciente"
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
            className={`img-fluid image-carousel`}
            src={banner3}
            alt="Locações de equipamentos hospitalares da Pró-Vida Cirúrgica em Ponte Nova Mg"
          />
        </Container>
      </div>
      <ButtonSearch searchPath="/busca"  placeholder="Pesquisar locações..." />
      <section aria-label="Locações disponíveis">
        <Container className="p-5 mt-3">
          <Row>
            {locacoes &&
              locacoes.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/locacoes/${id}`}>
                      <Card.Img
                        className={styles.images_locations}
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

export default Locations;
