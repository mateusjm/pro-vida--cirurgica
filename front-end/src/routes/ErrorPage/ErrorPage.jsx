import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

function ErrorPage({ favicon }) {
  return (
    <>
      <Helmet>
        <title>Pró-Vida Cirúrgica</title>
        <meta
          name="description"
          content="Somos especialistas em produtos hospitalares, ortopédicos e cuidados pessoais."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
      >
        <Row>
          <Col>
            <h1 className="display-1 fw-bold text-success">404</h1>
            <p className="fs-4 text-secondary">
              Ops! A página que você está procurando não foi encontrada.
            </p>
            <Button href="/" variant="success" size="md" className="mt-3">
              Voltar para a Página Inicial
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ErrorPage;
