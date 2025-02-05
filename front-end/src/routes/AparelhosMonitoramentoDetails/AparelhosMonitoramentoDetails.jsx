import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import aparelhosmonitoramento from "../../data/aparelhosmonitoramento.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./AparelhosMonitoramentoDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const AparelhosMonitoramentoDetails = ({favicon}) => {
  const { id } = useParams();
  const [aparelhos, setAparelhos] = useState(null);

  useEffect(() => {
    const aparelhosMonitoramento = aparelhosmonitoramento.find(
      (colchoesTravesseiros) => colchoesTravesseiros.id === id
    );
    setAparelhos(aparelhosMonitoramento);
  }, [id]);

  if (!aparelhos) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{aparelhosmonitoramento.name}</title>
        <meta
          name="description"
          content={`${aparelhos.description}`}
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{aparelhos.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={aparelhos.image}
              alt={aparelhos.name}
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
            <p>{aparelhos.description}</p>
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

export default AparelhosMonitoramentoDetails;
