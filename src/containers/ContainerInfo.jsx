import TargetInfo from '@components/TargetInfo';
import styles from '@styles/ContainerInfo.module.scss';
import BigGrilla from './BigGrilla';

const ContainerInfo = (props) => {
  const { info } = props;
  return (
    <div className={styles.ContainerInfo} id={info?.id}>
      <BigGrilla />
      <TargetInfo info={info} />
    </div>
  );
};

export default ContainerInfo;
