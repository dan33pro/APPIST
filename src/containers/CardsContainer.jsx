import styles from '@styles/CardsContainer.module.scss';
import Card from '@components/Card';

import imgDoc from '@images/documentos.jpg';
import imgProj from '@images/proyecto.jpg';
import imgTeam from '@images/equipo.jpg';

const CardsContainer = () => {
    const cardOne = {
        id: 1,
        title: 'Documentos',
        info: 'Documentación actual y enlaces a archivos',
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

    return (
        <main className={styles.CardsContainer}>
            <div className={styles.grayB}></div>
            <Card cardInfo={cardOne} key={'card'+cardOne.id}/>
            <Card cardInfo={cardTwo} key={'card'+cardTwo.id}/>
            <Card cardInfo={cardThree} key={'card'+cardThree.id}/>
        </main>
    );
}

export default CardsContainer;