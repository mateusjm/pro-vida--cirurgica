import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import materiaisortopedicos from "../../data/materiaisortopedicos.json";

// bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// CSS
import styles from "./MateriaisOrtopedicosDetails.module.css";

const MateriaisOrtopedicosDetails = () => {
  const { id } = useParams();
  const [materialOrtopedico, setMaterialOrtopedico] = useState(null);

  useEffect(() => {
    const materialOrtopedico = materiaisortopedicos.find(
      (materialOrtopedico) => materialOrtopedico.id === id
    );
    setMaterialOrtopedico(materialOrtopedico);
  }, [id]);

  if (!materialOrtopedico) {
    return <div>Material Ortopédico não encontrado.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{materialOrtopedico.name}</title>
        <meta
          name="description"
          content={`${materialOrtopedico.description}`}
        />
      </Helmet>
      <Container className={`mb-5`}>
        <h1 className="mt-5 mb-5">{materialOrtopedico.name}</h1>
        <Row>
          <Col xxl={6} xl={6} md={6} sm={12} className="text-center">
            <img
              width={500}
              className="img-fluid"
              src={materialOrtopedico.image}
              alt={materialOrtopedico.name}
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
            <p>{materialOrtopedico.description}</p>
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

export default MateriaisOrtopedicosDetails;
