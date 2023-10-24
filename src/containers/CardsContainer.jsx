import styles from '@styles/CardsContainer.module.scss';
import Card from '@components/Card';

import imgDoc from '@images/documentos-min.jpg';
import imgTeam from '@images/equipo-min.jpg';

const cardOne = {
  id: 1,
  title: 'Docs Fase 1',
  info: 'Documentación y acceso a archivos',
  img: imgDoc,
};

const cardFour = {
  id: 4,
  title: 'Docs Fase 2',
  info: 'Documentacion y acceso a archivos',
  img: imgTeam,
};

const CardsContainer = () => {

  return (
    <main className={styles.CardsContainer}>
      <div className={styles.grayB}></div>
      <Card cardInfo={cardOne} key={'card' + cardOne.id} />
      <Card cardInfo={cardFour} key={'card' + cardFour.id} />
    </main>
  );
};

export default CardsContainer;
