import React, { useContext } from 'react'
import { IoLogoGithub , IoLogoLinkedin } from "react-icons/io";
import styles from '../styles/footer.module.css'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer
      className={
        state.theme === "light" ? styles.footerLight : styles.footerDark
      }
    >
      <div className={styles.footerDiv}>
        <ul className={styles.footerUl}>
          <li>
            <a
              href="https://github.com/tonga2402"
              target="_blank"
              className={styles.footerA}
            >
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gaston-balmaceda/"
              target="_blank"
              className={styles.footerA}
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>

        <p className={styles.footerP}>
          Created by <span>Gaston Balmaceda</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
