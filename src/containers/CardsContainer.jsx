import styles from '@styles/CardsContainer.module.scss';
import Card from '@components/Card';

import imgDoc from '@images/documentos-min.jpg';
import imgProj from '@images/proyecto-min.jpg';
import imgTeam from '@images/equipo-min.jpg';

const cardOne = {
  id: 1,
  title: 'Documentos Fase 1',
  info: 'Documentación Fase 1 y acceso a archivos',
  img: imgDoc,
};
const cardTwo = {
  id: 2,
  title: 'Proyecto',
  info: 'Información del proyecto y enlaces',
  img: imgProj,
};
const cardThree = {
  id: 3,
  title: 'Equipo',
  info: 'Integrantes y contacto',
  img: imgTeam,
};
const cardFour = {
  id: 4,
  title: 'Documentos Fase 2',
  info: 'Documentacion Fase Actual y acceso a archivos',
  img: imgTeam,
};

const CardsContainer = () => {

  return (
    <main className={styles.CardsContainer}>
      <div className={styles.grayB}></div>
      <Card cardInfo={cardOne} key={'card' + cardOne.id} />
      <Card cardInfo={cardFour} key={'card' + cardFour.id} />
      <Card cardInfo={cardTwo} key={'card' + cardTwo.id} />
      <Card cardInfo={cardThree} key={'card' + cardThree.id} />
    </main>
  );
};

export default CardsContainer;
