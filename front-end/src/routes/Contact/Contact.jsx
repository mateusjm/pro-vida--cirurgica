import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import styles from "./Contact.module.css";

const Contact = ({favicon}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatus("✅ Sua mensagem foi enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" });
          setShowModal(true);
        },
        (error) => {
          setStatus("Erro ao enviar mensagem. Tente novamente.");
          setShowModal(true);
          console.error("Erro:", error);
        }
      );
  };

  const handleRetry = () => {
    setShowModal(false); // Fecha o modal
  };

  return (
    <>
      <Helmet>
        <title>Contato</title>
        <meta
          name="description"
          content="Entre em contato conosco para saber mais sobre os produtos e serviços da Pró-Vida Cirúrgica."
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Container className="mt-5 mb-5 p-4">
        <h1 className="mb-3 text-center">
          Entre em Contato {" "}
          <span className="text-success">Pró-Vida Cirúrgica em Ponte Nova MG</span>
        </h1>
        <p className="mb-5 text-center">
          A Pró-Vida Cirúrgica fica localizada na cidade de Ponte Nova MG e
          conta com os melhores especialistas em produtos hospitalares.
        </p>

        <Row className="justify-content-center">
            <Form className={styles.form_contact} onSubmit={sendEmail}>
              <Form.Control
                className={styles.textarea}
                type="text"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Form.Control
                className={styles.input_contact}
                type="email"
                name="email"
                placeholder="Seu E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Form.Control
                as="textarea"
                rows={3}
                className={styles.textarea}
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button className={styles.button_contact} type="submit" variant="success" block>
                Enviar
              </Button>
            </Form>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{status.includes("sucesso") ? "Sucesso!" : "Erro!"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{status}</p>
            {status.includes("sucesso") ? (
              <Button variant="success" className="w-100" onClick={() => setShowModal(false)}>
                Agradecemos pelo contato!
              </Button>
            ) : (
              <Button variant="danger" className="w-100" onClick={handleRetry}>
                Tentar novamente
              </Button>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Contact;
