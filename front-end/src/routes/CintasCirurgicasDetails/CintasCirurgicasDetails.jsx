import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import cintas from "../../data/cintas.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./CintasCirurgicasDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const CintasCirurgicasDetails = () => {
  const { id } = useParams();
  const [cintasCirurgicas, setCintasCirurgicas] = useState(null);

  useEffect(() => {
    const cintasCirurgicas = cintas.find(
      (cintasCirurgicas) => cintasCirurgicas.id === id
    );
    setCintasCirurgicas(cintasCirurgicas);
  }, [id]);

  if (!cintasCirurgicas) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{cintasCirurgicas.name}</title>
        <meta
          name="description"
          content={`${cintasCirurgicas.description}`}
        />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{cintasCirurgicas.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={cintasCirurgicas.image}
              alt={cintasCirurgicas.name}
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
            <p>{cintasCirurgicas.description}</p>
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

export default CintasCirurgicasDetails;
