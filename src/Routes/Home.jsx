import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "../styles/home.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main
      className={state.theme === "dark" ? styles.mainDark : styles.mainLight}
    >
      <h1 className={styles.mainH1}>Home</h1>
      <div className={styles.mainDiv}>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            id={user.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
