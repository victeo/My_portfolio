import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  return (
    <>
      <header className={styles.headerH}>
        <div className={active ? styles.header__icon+ ' ' + styles.header__iconActive : styles.header__icon} onClick={ToggleMode}>
          <div className={styles.header__hamburguer }></div>
        </div>
        <div className={active ? styles.header__menu+ ' ' + styles.header__menuOpen : styles.header__menu+ ' ' + styles.header__menuClose }>
            <ul className={styles.header__ul}>
                <li className={styles.header__li}>HOME</li>
                <li className={styles.header__li}>WORK</li>
                <li className={styles.header__li}>SERVICES</li>
                <li className={styles.header__li}>CONTACT</li>

            </ul>
        </div>
      </header>

 
    </>
  );
}
