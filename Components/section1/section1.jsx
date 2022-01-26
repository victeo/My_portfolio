import styles from "./section1.module.css";
export default function Section1() {
  return (
    <>
      <div className={styles.conteudo}>
        <h1 className={styles.conteudo__nome}>Victor Teodoro</h1>
        <h3 className={styles.conteudo__description}>
          We build brands and beautiful experiences
        </h3>
        <div className={styles.slied1__buttons}>
          <a className={styles.btn} >HOME</a>
          <a className={styles.btn} href="#work">WORK</a>
          <button className={styles.btn}>SERVICES</button>
          <button className={styles.btn}>CONTACT</button>
        </div>
      </div>
    </>
  );
}
