import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import avaliacoes from "../../data/avaliacoes.json";

const Avaliacoes = ({favicon}) => {
  return (
    <>
      <Helmet>
        <title>Avaliações</title>
        <meta
          name="description"
          content="Avaliações da Pró-Vida Cirúrgica em Ponte Nova."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">
              O que nossos clientes dizem sobre nós:
            </h1>

            {/* Lista de Avaliações */}
            <div className="mb-4">
              {avaliacoes.map((avaliacao, index) => (
                <div key={index} className="p-3 mb-3 border rounded shadow-sm">
                  <h5>{avaliacao.nome}</h5>
                  <p>{avaliacao.avaliacao}</p>
                  <p>{"⭐".repeat(avaliacao.nota)}</p>
                  <small>{avaliacao.data}</small>
                </div>
              ))}
            </div>

            {/* Botão para Deixar Avaliação */}
            <div className="text-center">
              <Button
                variant="success"
                href="https://g.page/r/CW_HoPfM9dhaEBE/review"
                target="_blank"
              >
                Deixe sua avaliação!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Avaliacoes;
