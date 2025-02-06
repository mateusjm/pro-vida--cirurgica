import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, ListGroup, Container } from "react-bootstrap";
import blog from "../../data/blog.json";

// CSS
import styles from "./BlogDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const post = blog.find((post) => post.id === parseInt(id));
    setBlogPost(post);
  }, [id]);

  if (!blogPost) {
    return <ErrorPage />;
  }

  return (
    <Container fluid className="bg-light">
      {/* Caminho de Navegação */}
      <Row className="mb-4 bg-success">
        <Col className="mb-5 mt-5">
          <h1 className="text-center text-white">{blogPost.titulo}</h1>
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
        <Col md={3}>
          <div className={`${styles.barra_lateral} bg-white p-4 rounded  mb-2`}>
            <h5 className="mb-3">Conteúdo do Post</h5>
            <ListGroup>
              {blogPost.topicos.map((topico, index) => (
                <ListGroup.Item key={index}>
                  {index + 1}.{" "}
                  <a
                    href={`#${topico.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`${styles.barra_lateral}`}
                  >
                    {topico}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>

        {/* Conteúdo do Post */}
        <Col md={9}>
          <div className="p-4 rounded bg-white mb-5">
            <p>{blogPost.descricao}</p>

            {blogPost.conteudo.map((section, index) => (
              <section
                id={section.subtitulo.toLowerCase().replace(/\s+/g, "-")}
                key={index}
              >
                <h2 className="mt-5 mb-3 text-start">{section.subtitulo}</h2>
                <p>{section.texto}</p>

                {/* Verificando e exibindo imagem apenas se houver */}
                {section.imagem && (
                  <Row className="d-flex justify-content-center align-items-center">
                    <img
                      className="img-fluid my-4"
                      style={{ width: "100%" }}
                      src={section.imagem}
                      alt={section.subtitulo}
                    />
                  </Row>
                )}
              </section>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetails;
