import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import colchoestravesseiros from "../../data/colchoestravesseiros.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./ColchoesTravesseirosDetails.module.css";
import ErrorPage from "../ErrorPage/ErrorPage";

const ColchoesTravesseirosDetails = ({favicon}) => {
  const { id } = useParams();
  const [colchoesTravesseiros, setColchoesTravesseiros] = useState(null);

  useEffect(() => {
    const colchoesTravesseiros = colchoestravesseiros.find(
      (colchoesTravesseiros) => colchoesTravesseiros.id === id
    );
    setColchoesTravesseiros(colchoesTravesseiros);
  }, [id]);

  if (!colchoesTravesseiros) {
    return <ErrorPage />;
  }

  return (
    <>
      <Helmet>
        <title>{colchoesTravesseiros.name} em Ponte Nova</title>
        <meta
          name="description"
          content={`${colchoesTravesseiros.description}`}
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{colchoesTravesseiros.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={colchoesTravesseiros.image}
              alt={colchoesTravesseiros.name}
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
            <p>{colchoesTravesseiros.description}</p>
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

export default ColchoesTravesseirosDetails;
