import style from "../work/work.module.css";
export default function Work() {
  return (
    <>
      <section id="work" className={style.work}>
        <div className={style.work__work}>
          <div className={style.work__box__col8}>
            <h1 className={style.work__title}>HOW ARE I</h1>
            <h5 className={style.work__frase}>
              “The simpler explanation is preferable to the more complex one.”
              <br />
              <i>Occam's razor </i>
            </h5>
            
            <p className={style.work__text}>
              I'm a designer that believes that simplicity that is better than
              complexity. The creative and hard work is the better way to
              came in our goal. I believe too that universe conspiracies with
              us, where the universe law is the action and reaction. So, is
              important we to be good with each other.
            </p>
          </div>
          <div className={style.work__box__col4}></div>
        </div>
      </section>
    </>
  );
}
