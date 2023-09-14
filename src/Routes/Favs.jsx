import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/favs.module.css";
import { ContextGlobal } from "../Components/utils/global.context";
import doctor from "../images/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    const recuperado = JSON.parse(localStorage.getItem("dentistFav"));
    setDentist(recuperado);
  }, []);

  return (
    <div
      className={state.theme === "light" ? styles.favsLight : styles.favsDark}
    >
      <h1 className={styles.favsH1}>Dentists Favs</h1>
      <div className={styles.divFav}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentist &&
          dentist.map((data) => (
            <div key={data.id} className={styles.divCardFav}>
              <img src={doctor} alt={doctor} className={styles.imgCardFav} />
              <h3 className={styles.cardFavH3}>{data.name}</h3>
              <h4 className={styles.cardFavH4}>{data.username}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favs;
