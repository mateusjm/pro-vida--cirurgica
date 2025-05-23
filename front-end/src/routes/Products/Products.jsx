import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import secoesprodutos from "../../data/secoesprodutos.json";

import ButtonSearch from '../../components/ButtonSearch'

// CSS
import styles from "./Products.module.css";

const Products = ({ banner2, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Produtos Hospitalares em Ponte Nova</title>
        <meta
          name="description"
          content="Linha de Produtos e Materiais Hospitalares em Ponte Nova."
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
            alt="Produtos hospitalares da Pró-Vida Cirúrgica em Ponte Nova Mg"
          />
        </Container>
      </div>
      <ButtonSearch searchPath="/busca"  placeholder="Pesquisar produtos..." />
      <section aria-label="Produtos disponíveis">
        <Container className="p-4 mt-3">
          <Row>
            {secoesprodutos &&
              secoesprodutos.map(({ id, name, image }) => (
                <Col key={id} xl={3} md={4} xs={6} className="mb-4">
                  <Card>
                    <Link to={`/produtos/${id}`}>
                      <Card.Img
                        className={styles.images_products}
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
      </section>
    </>
  );
};

export default Products;
