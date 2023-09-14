import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { ContextGlobal } from "./utils/global.context";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [iconChange, setIconChange] = useState(true);

  const changeTheme = () => {
    dispatch({ type: "GET_THEME" });
    setIconChange(!iconChange);
  };

  return (
    <nav className={iconChange ? styles.navLight : styles.navDark}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link to="contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link to="favs" className={styles.navLink}>
            Favs
          </Link>
        </li>
      </ul>
      <button
        onClick={changeTheme}
        className={iconChange ? styles.moon : styles.sunny}
      >
        {iconChange ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </nav>
  );
};

export default Navbar;
