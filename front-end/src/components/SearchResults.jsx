import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import styles from "./SearchResults.module.css";

// Importando dados
import meias from "../data/meiasdecompressao.json";
import dietas from "../data/dietasenterais.json";
import sapatos from "../data/sapatos.json";
import curativos from "../data/curativos.json";
import ortopedicos from "../data/materiaisortopedicos.json";
import colchoes from "../data/colchoestravesseiros.json";
import descartaveis from "../data/materiaisdescartaveis.json";
import aparelhos from "../data/aparelhosmonitoramento.json";
import cintas from '../data/cintas.json'
import locacoes from "../data/locacoes.json";
import servicos from "../data/servicos.json";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  // Dados organizados em seções
  const generalSections = [
    { title: "Meias de Compressão", data: meias },
    { title: "Dietas Enterais", data: dietas },
    { title: "Sapatos Profissionais", data: sapatos },
    { title: "Curativos", data: curativos },
    { title: "Materiais Ortopédicos", data: ortopedicos },
    { title: "Colchões e Travesseiros", data: colchoes },
    { title: "Materiais Descartáveis", data: descartaveis },
    { title: "Aparelhos de Monitoramento", data: aparelhos },
    { title: "Sutiãs e Cintas Pós-Cirúrgicas", data: cintas }
  ];

  const filteredGeneral = generalSections.map(({ title, data }) => ({
    title,
    results: data.filter((item) => item.name.toLowerCase().includes(query)),
  }));

  const filteredLocacoes = locacoes.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  const filteredServicos = servicos.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  const hasResults =
    filteredGeneral.some((section) => section.results.length > 0) ||
    filteredLocacoes.length > 0 ||
    filteredServicos.length > 0;

  return (
    <div className="container py-4">
      <h2 className="mt-5 mb-5 text-center">
        Resultados para: "<span className="text-success">{query}</span>"
      </h2>

      {hasResults ? (
        <>
          {filteredGeneral.map(
            ({ title, results }) =>
              results.length > 0 && (
                <section key={title}>
                  <h3 className="mt-5">
                    <Link className={styles.link} to={`/produtos`}>
                      {title}
                    </Link>
                  </h3>
                  <Container className="p-3 mt-3">
                    <Row>
                      {results.map((item) => (
                        <Col
                          key={item.id}
                          xl={3}
                          md={4}
                          xs={6}
                          className="mb-4"
                        >
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
          )}

          {filteredLocacoes.length > 0 && (
            <section>
              <h3 className="mt-5">
                <Link className={styles.link} to={`/locacoes`}>
                  Locações
                </Link>
              </h3>
              <Container className="p-3 mt-3">
                <Row>
                  {filteredLocacoes.map((item) => (
                    <Col key={item.id} xl={3} md={4} xs={6} className="mb-4">
                      <Card>
                        <Link to={`/locacoes/${item.id}`}>
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
          )}

          {filteredServicos.length > 0 && (
            <section>
              <h3 className="mt-5">
                <Link className={styles.link} to={`/servicos`}>
                  Serviços
                </Link>
              </h3>
              <Container className="p-3 mt-3">
                <Row>
                  {filteredServicos.map((item) => (
                    <Col key={item.id} xl={3} md={4} xs={6} className="mb-4">
                      <Card>
                        <Link to={`/servicos/${item.id}`}>
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
          )}
        </>
      ) : (
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
        >
          <Row>
            <Col>
              <p className="fs-4 text-secondary">
                Ops! Nenhum resultado encontrado.
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
