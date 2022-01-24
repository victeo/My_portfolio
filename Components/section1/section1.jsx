import styles from "./section1.module.css"
export default function Section1() {
  return (
    <>
      <div className={styles.conteudo}>
        <h1 className={styles.conteudo__nome}>Victor Teodoro</h1>
        <h3 className={styles.conteudo__description}>
          We build brands and beautiful experiences
        </h3>
      </div>
    </>
  );
}
