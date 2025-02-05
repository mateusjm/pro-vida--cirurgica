import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// bootstrap
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog from "../../data/blog.json";

// CSS
import styles from "./Blog.module.css";

const Blog = ({ banner4, favicon }) => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="Confira nossos artigos sobre cuidados com a saúde, equipamentos hospitalares e bem-estar."
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
            alt="Blog da Pró-Vida Cirúrgica"
          />
        </Container>
      </div>
      <section aria-label="Posts do blog">
        <Container className="p-5 mt-4">
          <Row>
            {blog &&
              blog.map(({ id, titulo, descricao, imagem, data }) => (
                <Col key={id} xl={4} md={6} xs={12} className="mb-4">
                  <Card className={styles.images_services}>
                    <Link
                      to={`/blog/${id}`}
                      className="d-flex justify-content-center"
                    >
                      <Card.Img
                        className="mt-3"
                        style={{
                          width: '90%',
                          objectFit: "contain",
                        }}
                        variant="top"
                        src={imagem}
                        alt={titulo}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Text className="text-start">
                        <span className="badge bg-success">{data}</span>
                      </Card.Text>
                      <Card.Title className="text-start text-success">
                        {titulo}
                      </Card.Title>
                      <Card.Text className="mb-4">{descricao}</Card.Text>
                      <Link
                        to={`/blog/${id}`}
                        className="btn btn-success d-block text-center"
                      >
                        Leia mais
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
