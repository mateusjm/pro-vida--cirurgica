import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import curativos from "../../data/curativos.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./CurativosDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const CurativosDetails = ({favicon}) => {
  const { id } = useParams();
  const [curativo, setCurativo] = useState(null);

  useEffect(() => {
    const curativoEncontrado = curativos.find((curativo) => curativo.id === id);
    setCurativo(curativoEncontrado);
  }, [id]);

  if (!curativo) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{curativo.name} em Ponte Nova</title>
        <meta name="description" content={`${curativo.description}`} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{curativo.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={curativo.image}
              alt={curativo.name}
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
            <p>{curativo.description}</p>
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

export default CurativosDetails;
