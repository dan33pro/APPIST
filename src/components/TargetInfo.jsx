import styles from '@styles/TargetInfo.module.scss';

const TargetInfo = () => {
  return (
    <article className={styles.TargetInfo}>
      <div className={styles['container-info']}>
        <h3>Qué queremos</h3>
        <p>
          Desarrollar e implementar una plataforma para el reporte de escenarios de urbanismo táctico, priorización de lugares con mayor índice de accidentalidad y un consolidado en donde se ofrecen
          distintas soluciones de señalización en espacios públicos.
        </p>
      </div>
    </article>
  );
};

export default TargetInfo;
