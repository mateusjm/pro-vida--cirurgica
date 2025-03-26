import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import novidades from "../../data/novidades.json";

// CSS
import styles from "./Novidades.module.css";

const Novidades = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Novidades em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos sapatos hospitalares em Ponte Nova impermeáveis, ideais para o ambiente de trabalho em hospitais. Confortáveis, leves e macios, esses calçados foram desenvolvidos para garantir conforto
          durante toda a rotina, proporcionando segurança e praticidade no dia
          a dia."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <div>
        <Container className="p-4 mt-4">
          <h1 className="text-center text-success mb-5">Novidades em Ponte Nova</h1>
          <Row>
            {novidades &&
              novidades.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/novidades/${id}`}>
                      <Card.Img
                        className={styles.images_novidades}
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

export default Novidades;
