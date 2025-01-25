import { Container, Row, Col, Button } from "react-bootstrap";

function ErrorPage() {
  return (
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
          <Button
            href="/"
            variant="success"
            size="md"
            className="mt-3"
          >
            Voltar para a Página Inicial
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
