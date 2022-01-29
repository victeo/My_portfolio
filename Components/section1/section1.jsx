import styles from "./section1.module.css";
import Section2 from "../section2/section2";
export default function Section1() {
  return (
    <>
          <section className={styles.select}>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.header__logo}>Victor Teodoro</div>

          </div>
        </div>
        <div className={styles.conteudo}>
          <div className={styles.container}>
          <Section2 />  
        
          </div>
        </div>
      </section>
    </>
  );
}
