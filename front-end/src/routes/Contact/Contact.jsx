import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const Contact = () => {
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
      </Helmet>
      <div className="container mt-5 mb-5 p-5">
        <h1 className="mb-3">
          Entre em Contato -{" "}
          <span className="text-success">Pró-Vida Cirúrgica em Ponte Nova MG</span>
        </h1>
        <p className="mb-5 text-center">
          A Pró-Vida Cirúrgica fica localizada na cidade de Ponte Nova MG e
          conta com os melhores especialistas em produtos hospitalares.
        </p>
        <div className="d-flex justify-content-center">
          <form className={styles.form_contact} onSubmit={sendEmail}>
            <input
              className={styles.textarea}
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className={styles.input_contact}
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              style={{ height: 100 }}
              className={styles.textarea}
              name="message"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className={styles.button_contact} type="submit">
              Enviar
            </button>
          </form>
        </div>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>{status.includes("sucesso") ? "Sucesso!" : "Erro!"}</h2>
                <button
                  className={styles.closeModal}
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>
              <p className={styles.error}>{status}</p>
              {status.includes("sucesso") ? (
                <button
                  className="btn btn-success"
                  onClick={() => setShowModal(false)}
                >
                  Agradecemos pelo contato!
                </button>
              ) : (
                <button className={styles.retryButton} onClick={handleRetry}>
                  Tentar novamente
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
