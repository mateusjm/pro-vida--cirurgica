import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import servicos from "../../data/servicos.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./ServicesDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const ServicesDetails = ({ favicon }) => {
  const { id } = useParams();
  const [servico, setServico] = useState(null);

  useEffect(() => {
    const servicoEncontrado = servicos.find((servico) => servico.id === id);
    setServico(servicoEncontrado);
  }, [id]);

  if (!servico) {
    return <ErrorPage />;
  }

  return (
    <>
      {" "}
      <Helmet>
        <title>{servico.name}</title>
        <meta name="description" content={`${servico.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{servico.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={servico.image}
              alt={servico.name}
            />
          </Col>
          <Col
            xxl={6}
            xl={5}
            md={6}
            sm={12}
            className={`p-4 ${styles.text_justify_custom}`}
          >
            <p>{servico.description}</p>
            <p>{servico.description1}</p>
            <Col className="text-end">
              <Button className={styles.button_link} variant="success">
                <a
                  className=""
                  href="https://wa.me/message/K7V37SCXJ72KG1"
                  target="blank"
                >
                  Entrar em contato
                </a>
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServicesDetails;
