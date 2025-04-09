import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import curativos from "../../data/curativos.json";

// CSS
import styles from "./Curativos.module.css";

const Curativos = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Curativos Cirúrgicos em Ponte Nova</title>
        <meta
          name="description"
          content="Oferecemos curativos cirúrgicos em Ponte Nova MG especializados para o tratamento de feridas, incluindo Petrolatum e Lomatuel Pro. Soluções cirúrgicas para proteção, cicatrização e lavagem adequada, garantindo o melhor cuidado para a recuperação da pele"
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
            Curativos Cirúrgicos em Ponte Nova
          </h1>
          <p className="text-center mb-5">
            Oferecemos curativos cirúrgicos em Ponte Nova especializados para
            o tratamento de feridas, incluindo Petrolatum e Lomatuel Pro.
            Soluções cirúrgicas para proteção, cicatrização e lavagem adequada,
            garantindo o melhor cuidado para a recuperação da pele.
          </p>
          <Row>
            {curativos &&
              curativos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/curativos/${id}`}>
                      <Card.Img
                        className={styles.images_curativos}
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

export default Curativos;
