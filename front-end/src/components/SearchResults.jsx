import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Col, Row, Card, Button} from "react-bootstrap";

// CSS
import styles from "./Search.module.css";

// Importando os arquivos de produtos
import colchoesTravesseiros from "../data/colchoestravesseiros.json";
import curativos from "../data/curativos.json";
import dietasEnterais from "../data/dietasenterais.json";
import materiaisDescartaveis from "../data/materiaisdescartaveis.json";
import materiaisOrtopedicos from "../data/materiaisortopedicos.json";
import meiasDeCompressao from "../data/meiasdecompressao.json";
import sapatos from "../data/sapatos.json";

// Dados de locações e serviços
import locacoes from "../data/locacoes.json";
import servicos from "../data/servicos.json";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  const allProdutos = [
    ...meiasDeCompressao,
    ...sapatos,
    ...dietasEnterais,
    ...curativos,
    ...materiaisOrtopedicos,
    ...colchoesTravesseiros,
    ...materiaisDescartaveis,
  ];

  // Filtrando os resultados
  const filteredProdutos = allProdutos.filter((produto) =>
    produto.name.toLowerCase().includes(query)
  );
  const filteredLocacoes = locacoes.filter((locacao) =>
    locacao.name.toLowerCase().includes(query)
  );
  const filteredServicos = servicos.filter((servico) =>
    servico.name.toLowerCase().includes(query)
  );

  const hasResults =
    filteredProdutos.length ||
    filteredLocacoes.length ||
    filteredServicos.length;

  return (
    <div className="container py-4">
      <h2 className="mt-5 text-center">
        Resultados para: "<span className="text-success">{query}</span>"
      </h2>
      {hasResults ? (
        <div>
          {filteredProdutos.length > 0 && (
            <section>
              <h3 className="mt-5">Produtos</h3>
              <ul>
                <Container className="p-5 mt-4">
                  <Row>
                    {filteredProdutos.map((produto) => (
                      <Col
                        key={produto.id}
                        xl={3}
                        md={4}
                        xs={6}
                        className="mb-4"
                      >
                        <Card>
                          <Link to={`/produtos/${produto.tipo}/${produto.id}`}>
                            <Card.Img
                              className={styles.images_search}
                              variant="top"
                              src={produto.image}
                              alt={produto.name}
                            />
                          </Link>
                        </Card>
                        <Card.Title className="text-center mt-3">
                          {produto.name}
                        </Card.Title>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </ul>
            </section>
          )}

          {filteredLocacoes.length > 0 && (
            <section>
              <h3 className="mt-5">Locações</h3>
              <ul>
                <Container className="p-5 mt-4">
                  <Row>
                    {filteredLocacoes.map((locacao) => (
                      <Col
                        key={locacao.id}
                        xl={3}
                        md={4}
                        xs={6}
                        className="mb-4"
                      >
                        <Card>
                          <Link to={`/locacoes/${locacao.id}`}>
                            <Card.Img
                              className={styles.images_search}
                              variant="top"
                              src={locacao.image}
                              alt={locacao.name}
                            />
                          </Link>
                        </Card>
                        <Card.Title className="text-center mt-3">
                          {locacao.name}
                        </Card.Title>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </ul>
            </section>
          )}

          {filteredServicos.length > 0 && (
            <section>
              <h3 className="mt-5">Serviços</h3>
              <ul>
                <Container className="p-5 mt-4">
                  <Row>
                    {filteredServicos.map((servico) => (
                      <Col
                        key={servico.id}
                        xl={3}
                        md={4}
                        xs={6}
                        className="mb-4"
                      >
                        <Card>
                          <Link to={`/servicos/${servico.id}`}>
                            <Card.Img
                              className={styles.images_search}
                              variant="top"
                              src={servico.image}
                              alt={servico.name}
                            />
                          </Link>
                        </Card>
                        <Card.Title className="text-center mt-3">
                          {servico.name}
                        </Card.Title>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </ul>
            </section>
          )}
        </div>
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
              <Button href="/busca" variant="success" size="md" className="mt-3">
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
