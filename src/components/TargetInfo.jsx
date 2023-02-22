import styles from '@styles/TargetInfo.module.scss';

const TargetInfo = (props) => {
  const {info} = props;

  return (
    <article className={styles.TargetInfo}>
      <div className={styles['container-info']}>
        <h3>{info?.title}</h3>
        <p>{info?.text}</p>
      </div>
    </article>
  );
};

export default TargetInfo;
