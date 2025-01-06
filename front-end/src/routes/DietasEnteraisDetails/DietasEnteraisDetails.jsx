import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import dietasenterais from "../../data/dietasenterais.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./DietasEnteraisDetails.module.css";

const DietasEnteraisDetails = () => {
  const { id } = useParams();
  const [dieta, setDieta] = useState(null);

  useEffect(() => {
    const dietaEncontrada = dietasenterais.find((dieta) => dieta.id === id);
    setDieta(dietaEncontrada);
  }, [id]);

  if (!dieta) {
    return <div>Dieta Enteral não encontrada.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{dieta.name}</title>
        <meta name="description" content={`${dieta.description}`} />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{dieta.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={dieta.image}
              alt={dieta.name}
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
            <p>{dieta.description}</p>
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

export default DietasEnteraisDetails;
