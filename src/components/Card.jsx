import styles from '@styles/Card.module.scss';
import Image from 'next/image';

import iconFlecha from '@icons/flecha.png';
import { useEffect } from 'react';

const Card = (props) => {
    const { cardInfo } = props;
    let cont = 1;

    useEffect(() => {
        let elements = document.querySelectorAll('.'+styles.Card);
        elements.forEach( elem => {
            if (cont <= 3) {
                elem.classList.add('card-'+cont);
                cont++;
            }
        });
    }, [])

    return (
        <article className={styles.Card}>
            <div className={styles['container-info']}>
                <div className={styles.info}>
                    <h3>{cardInfo?.title}</h3>
                    <span>{cardInfo?.info}</span>
                </div>
                <Image className={styles['icon-arrow']} src={iconFlecha} alt="icono flecha" />
            </div>
            <Image className={styles.imgCard} src={cardInfo.img} alt={cardInfo?.title + " imagen"} />
        </article>
    );
}

export default Card;