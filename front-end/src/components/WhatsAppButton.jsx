import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/K7V37SCXJ72KG1"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;
