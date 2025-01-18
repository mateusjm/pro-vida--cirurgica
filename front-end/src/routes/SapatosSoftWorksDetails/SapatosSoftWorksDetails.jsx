import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import sapatos from "../../data/sapatos.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./SapatosSoftWorksDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const SapatosSoftWorksDetails = () => {
  const { id } = useParams();
  const [sapato, setSapatos] = useState(null);

  useEffect(() => {
    const sapatoEncontrado = sapatos.find((sapato) => sapato.id === id);
    setSapatos(sapatoEncontrado);
  }, [id]);

  if (!sapato) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{sapato.name}</title>
        <meta
          name="description"
          content={`${sapato.description}`}
        />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{sapato.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={sapato.image}
              alt={sapato.name}
            />
          </Col>
          <Col
            xxl={6}
            xl={5}
            md={6}
            sm={12}
            xs={12}
            className={`p-4 ${styles.text_justify_custom}`}
          >
            <p>{sapato.description}</p>
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

export default SapatosSoftWorksDetails;
