import React, { useContext } from "react";
import Form from "../Components/Form";
import styles from "../styles/contact.module.css";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div
      className={
        state.theme === "light" ? styles.contactLight : styles.contactDark
      }
    >
      <h2 className={styles.contactH2}>Want to know more?</h2>
      <p className={styles.contactP}>
        Send us your questions and we will contact you
      </p>
      <Form />
    </div>
  );
};

export default Contact;
