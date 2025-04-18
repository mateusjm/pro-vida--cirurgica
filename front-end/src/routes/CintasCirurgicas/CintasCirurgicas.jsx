import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import cintas from "../../data/cintas.json";

// CSS
import styles from "./CintasCirurgicas.module.css";

const CintasCirurgicas = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Sutiãs e Cintas Pós-Cirúrgicas em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos sutiãs e cintas pós-cirúrgicas em Ponte Nova MG ideais para recuperação de cirurgias plásticas, abdominoplastia, lipoaspiração, mamoplastia e cesárea. Conforto, compressão e segurança para o melhor suporte no pós-operatório."
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
            Sutiãs e Cintas Pós-Cirúrgicas em Ponte Nova
          </h1>
          <p className="text-center mb-5">
            Encontre sutiãs e cintas pós-cirúrgicas ideais para recuperação de cirurgias plásticas, abdominoplastia, lipoaspiração, mamoplastia e cesárea. Conforto, compressão e segurança para o melhor suporte no pós-operatório.
          </p>
          <Row>
            {cintas &&
              cintas.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/pos-cirurgico/${id}`}>
                      <Card.Img
                        className={styles.images_cintas}
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

export default CintasCirurgicas;
