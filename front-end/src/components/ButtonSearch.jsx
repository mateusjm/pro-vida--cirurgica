import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormControl, Button, Container, Col, Row } from "react-bootstrap";

function ButtonSearch({searchPath, placeholder = "Pesquisar..." }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    navigate(`${searchPath}?q=${encodeURIComponent(normalizedSearchTerm)}`);
    setSearchTerm(""); 
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={11} xl={8}>
          <Form className="mt-5 d-flex" onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder={placeholder}
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Pesquisar"
              style={{
                outline: "none",
                boxShadow: "none",
                borderColor: "green",
              }}
            />
            <Button variant="outline-success" type="submit">
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonSearch;
