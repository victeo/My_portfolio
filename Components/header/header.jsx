import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <section className={styles.select}>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.header__logo}>Victor Teodoro</div>
            <div className={styles.header__menu}>
              <input
                type="checkbox"
                id="checkbox-menu"
                className={styles.header__menu_input}
              />
              <label
                htmlFor="checkbox-menu"
                className={styles.header__menu_label}
              >
                <span className={styles.header__menu_span}></span>
                <span className={styles.header__menu_span}></span>
                <span className={styles.header__menu_span}></span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
