import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import meiasdecompressao from "../../data/meiasdecompressao.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./MeiasDeCompressaoDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const MeiasDeCompressaoDetails = () => {
  const { id } = useParams();
  const [meia, setMeia] = useState(null);

  useEffect(() => {
    const meiaEncontrada = meiasdecompressao.find((meia) => meia.id === id);
    setMeia(meiaEncontrada);
  }, [id]);

  if (!meia) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{meia.name}</title>
        <meta name="description" content={`${meia.description}`} />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{meia.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={meia.image}
              alt={meia.name}
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
            <p>{meia.description}</p>
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

export default MeiasDeCompressaoDetails;
