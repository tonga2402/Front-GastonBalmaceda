import React from "react";
import styles from '../styles/contact.module.css'
import { useState } from 'react'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [fullName, setFameName] = useState("");
  const [email, setEmail] = useState("");
  const [imputError, setImputError] = useState("");

  const handlerFullName = (e) => {
    const value = e.target.value;
    setFameName(value);
  };

  const handlerEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim().length < 6) {
      return setImputError("Please verify your information");
    } else {
      setImputError("");
      console.log(
        `Gracias ${fullName}, te contactaremos cuando antes vía mail`
      );
    }
    setFameName("");
    setEmail("");
  };

  return (
    <>
      <div>
        <form className={styles.formContain} onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handlerFullName}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handlerEmail}
          />
          <button className={styles.formButton} type="submit">
            Send
          </button>
          <label>
            <div className={styles.formError}>{imputError}</div>
          </label>
        </form>
      </div>
    </>
  );
};

export default Form;
