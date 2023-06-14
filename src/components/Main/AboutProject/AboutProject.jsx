function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__title landing-title">О проекте</h2>
      <div className="about__blocks">
        <div className="about__block">
          <h3 className="about__block-title">
          Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about__block-text">
          Составление плана, работу над бэкендом, вёрстку, добавление
функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about__block">
          <h3 className="about__block-title">
          На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about__block-text">
          У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было
соблюдать, чтобы успешно защититься.
          </p>
        </div>
        </div>
        <div className="time">
          <p className="time__firstweek week">1&nbsp;неделя</p>
          <p className="time__fourweek week">4&nbsp;недели</p>
          <p className="time__web week">Back-end</p>
          <p className="time__web week">Front-end</p>
        </div>
    </section>
  );
}

export default AboutProject;
