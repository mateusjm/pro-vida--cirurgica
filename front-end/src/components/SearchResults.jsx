import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import styles from "./Search.module.css";

// Importando dados
import meiasDeCompressao from "../data/meiasdecompressao.json";
import dietasEnterais from "../data/dietasenterais.json";
import sapatos from "../data/sapatos.json";
import curativos from "../data/curativos.json";
import materiaisOrtopedicos from "../data/materiaisortopedicos.json";
import colchoesTravesseiros from "../data/colchoestravesseiros.json";
import materiaisDescartaveis from "../data/materiaisdescartaveis.json";
import locacoes from "../data/locacoes.json";
import servicos from "../data/servicos.json";

const sections = [
  { title: "Meias de Compressão", data: meiasDeCompressao },
  { title: "Dietas Enterais", data: dietasEnterais },
  { title: "Sapatos Profissionais", data: sapatos },
  { title: "Curativos", data: curativos },
  { title: "Materiais Ortopédicos", data: materiaisOrtopedicos },
  { title: "Colchões e Travesseiros", data: colchoesTravesseiros },
  { title: "Materiais Descartáveis", data: materiaisDescartaveis },
  { title: "Locações", data: locacoes },
  { title: "Serviços", data: servicos },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  // Filtrar todos os dados dinamicamente
  const filteredSections = sections.map(({ title, data }) => ({
    title,
    results: data.filter((item) => item.name.toLowerCase().includes(query)),
  }));

  // Verificar se há resultados
  const hasResults = filteredSections.some(
    (section) => section.results.length > 0
  );

  return (
    <div className="container py-4">
      <h2 className="mt-5 mb-5 text-center">
        Resultados para: "<span className="text-success">{query}</span>"
      </h2>

      {hasResults ? (
        filteredSections.map(
          ({ title, results }) =>
            results.length > 0 && (
              <section key={title}>
                <h3 className="mt-5">{title}</h3>
                <Container className="p-3 mt-3">
                  <Row>
                    {results.map((item) => (
                      <Col key={item.id} xl={3} md={4} xs={6} className="mb-4">
                        <Card>
                          <Link to={`/produtos/${item.tipo}/${item.id}`}>
                            <Card.Img
                              className={styles.images_search}
                              variant="top"
                              src={item.image}
                              alt={item.name}
                            />
                          </Link>
                        </Card>
                        <Card.Title className="text-center mt-3">
                          {item.name}
                        </Card.Title>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            )
        )
      ) : (
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
        >
          <Row>
            <Col>
              <p className="fs-4 text-secondary">
                Nenhum resultado encontrado.
              </p>
              <Button
                href="/busca"
                variant="success"
                size="md"
                className="mt-3"
              >
                Voltar para a Página de Busca
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SearchResults;
