import React from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import styles from "./SearchBlog.module.css";

// Importando dados
import blog from "../data/blog.json";

const SearchBlog = ({ favicon }) => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  const filteredBlog = blog.filter((item) =>
    [item.titulo, item.descricao].some((campo) =>
      campo.toLowerCase().includes(query)
    )
  );

  console.log(filteredBlog);

  return (
    <div className="container py-4">
      <h2 className="mt-5 mb-5 text-center">
        Resultados para: "<span className="text-success">{query}</span>"
      </h2>
      <>
        <Helmet>
          <title>Blog</title>
          <meta
            name="description"
            content="Conheça nosso blog com as principais notícias sobre artigos hospitalares,produtos e aluguel de equipamentos hospitalares."
          />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
        {filteredBlog.length > 0 && (
          <section>
            <h3 className="mt-5">
              <Link className={styles.link} to={`/blog`}>
                Blog
              </Link>
            </h3>
            <Container className="p-3 mt-3">
              <Row>
                {filteredBlog.map((item) => (
                  <Col key={item.id} xl={4} md={6} xs={12} className="mb-4">
                    <Card className={styles.images_services}>
                      <Link
                        to={`/blog/${item.id}`}
                        className="d-flex justify-content-center"
                      >
                        <Card.Img
                          className="mt-3"
                          style={{
                            width: "90%",
                            objectFit: "contain",
                          }}
                          variant="top"
                          src={item.imagem}
                          alt={item.titulo}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Text className="text-start">
                          <span className="badge bg-success">{item.data}</span>
                        </Card.Text>
                        <Card.Title className="text-start text-success">
                          {item.titulo}
                        </Card.Title>
                        <Card.Text className="mb-4">
                          {item.descricao.length > 125
                            ? item.descricao.substring(0, 126) + "..."
                            : item.descricao}
                        </Card.Text>
                        <Link
                          to={`/blog/${item.id}`}
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
        )}
      </>
      {filteredBlog.length === 0 && (
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
        >
          <Row>
            <Col>
              <p className="fs-4 text-secondary">
                Ops! Nenhum resultado encontrado.
              </p>
              <Button
                href="/busca-blog"
                variant="success"
                size="md"
                className="mt-3"
              >
                Voltar para a Página de Busca
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SearchBlog;
