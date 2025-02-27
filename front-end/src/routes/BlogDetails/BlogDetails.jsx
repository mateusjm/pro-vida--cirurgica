import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup, Container } from "react-bootstrap";
import blog from "../../data/blog.json";
import styles from "./BlogDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const BlogDetails = () => {
  const { id } = useParams();

  // Encontrar o post com useMemo para evitar re-renderizações desnecessárias
  const blogPost = useMemo(() => blog.find((post) => post.id === id), [id]);


  if (!blogPost) {
    return <ErrorPage />;
  }

  return (
    <Container fluid className="bg-light">
      <Row className="mb-4 bg-success">
        <Col className="mb-5 mt-5">
          <h1 className="text-white fs-3">{blogPost.titulo}</h1>
        </Col>
      </Row>

      {/* Imagem principal, se existir */}
      {blogPost.imagem && (
        <Row className="d-flex justify-content-center align-items-center">
          <img
            className="img-fluid my-4 mb-5"
            style={{ width: "90%" }}
            src={blogPost.imagem}
            alt={blogPost.titulo}
          />
        </Row>
      )}

      <Row>
        {/* Barra Lateral de Tópicos */}
        <Col xxl={3} md={4}>
          <div className={`${styles.barra_lateral} bg-white p-4 rounded mb-2`}>
            <h5 className="mb-3">Conteúdo do Post</h5>
            <ListGroup>
              {blogPost.topicos.map((topico, index) => {
                const idTopico = topico.toLowerCase().replace(/\W+/g, "-");
                return (
                  <ListGroup.Item key={index}>
                    {index + 1}. <a href={`#${idTopico}`} className={styles.barra_lateral}>{topico}</a>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        </Col>

        {/* Conteúdo do Post */}
        <Col xxl={9} md={8}>
          <div className={`p-4 rounded bg-white mb-5 ${styles.textJustify}`}>
            <p>{blogPost.descricao}</p>

            {blogPost.conteudo.map((section, index) => {
              const idSection = section.subtitulo.toLowerCase().replace(/\W+/g, "-");
              return (
                <section id={idSection} key={index}>
                  <h2 className="mt-5 mb-3 text-start">{section.subtitulo}</h2>
                  <p className="text-justify">{section.texto}</p>
                  {section.imagem && (
                    <Row className="d-flex justify-content-center align-items-center">
                      <img
                        className="img-fluid my-4"
                        style={{ width: "90%" }}
                        src={section.imagem}
                        alt={section.subtitulo}
                      />
                    </Row>
                  )}
                </section>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetails;
