import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import colchoestravesseiros from "../../data/colchoestravesseiros.json";

// CSS
import styles from "./ColchoesTravesseiros.module.css";

const ColchoesTravesseiros = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Colchões e Travesseiros em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos colchão e travesseiro especializados na prevenção de escaras. Encontre colchão pneumático em Ponte Nova MG e caixa de ovo, ideais para proporcionar conforto, alívio da pressão e cuidados essenciais para pacientes acamados."
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
            Colchões e Travesseiros em Ponte Nova
          </h1>
          <p className="text-center mb-5">
            Encontre colchões e travesseiros especializados na prevenção de escaras,colchão pneumático em Ponte Nova e caixa de ovo, ideais para proporcionar conforto, alívio da pressão e cuidados essenciais para pacientes acamados.
          </p>
          <Row>
            {colchoestravesseiros &&
              colchoestravesseiros.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/colchoes/${id}`}>
                      <Card.Img
                        className={styles.images_colchoes_travesseiros}
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

export default ColchoesTravesseiros;
