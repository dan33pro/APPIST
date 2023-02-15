import TargetInfo from '@components/TargetInfo';
import styles from '@styles/ContainerInfo.module.scss';
import BigGrilla from './BigGrilla';

const ContainerInfo = () => {
  return (
    <div className={styles.ContainerInfo}>
      <BigGrilla />
      <TargetInfo />
    </div>
  );
};

export default ContainerInfo;
