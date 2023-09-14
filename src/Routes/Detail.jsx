import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/detail.module.css";
import { IoMdMail, IoMdPhonePortrait, IoIosLink } from "react-icons/io";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, []);

  return (
    <div
      className={
        state.theme === "light" ? styles.datailLight : styles.datailDark
      }
    >
      <h1 className={styles.datailH1}>Detail Dentist id {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className={styles.datailDiv}>
        <h2 className={styles.datailH2}>{dentist.name}</h2>
        <h2 className={styles.iconH2}>
          <IoMdMail className={styles.icon} />
          {dentist.email}
        </h2>
        <h2 className={styles.iconH2}>
          <IoMdPhonePortrait className={styles.icon} />
          {dentist.phone}
        </h2>
        <h2 className={styles.iconH2}>
          <IoIosLink className={styles.icon} />
          {dentist.website}
        </h2>
      </div>
    </div>
  );
};

export default Detail;
