import { Link } from "react-router-dom";
import doctor from '../images/doctor.jpg'
import styles from '../styles/card.module.css'
import { IoIosStarOutline } from "react-icons/io";
import { useContext , useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const [iconFav, setIconFav] = useState(false);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const returnFav = JSON.parse(localStorage.getItem("dentistFav")) || [];

    const favDentist = { name: name, username: username, id: id };

    const usersId = returnFav.map((users) => users.id);

    if (!usersId.includes(favDentist.id)) {
      setIconFav(true);
      returnFav.push(favDentist);
      localStorage.setItem("dentistFav", JSON.stringify(returnFav));
    } else {
      setIconFav(false);
      returnFav.pop(favDentist);
      localStorage.setItem("dentistFav", JSON.stringify(returnFav));
    }
  }; 
  
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme === "light" ? styles.divLight : styles.divDark}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"dentist/" + id} className={styles.containLink}>
        <img src={doctor} alt={doctor} className={styles.imgCard} />
        <h3 className={styles.cardH3}>{name}</h3>
        <h4 className={styles.cardH4}>{username}</h4>
      </Link>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={styles.cardButton}>
        <IoIosStarOutline
          className={iconFav ? styles.iconTrue : state.iconFalse}
        />
      </button>
    </div>
  );
};

export default Card;
