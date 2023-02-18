import styles from '@styles/Card.module.scss';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';

import iconFlecha from '@icons/flecha.png';
import { useEffect, useContext } from 'react';

const Card = (props) => {
  const { state, toggleMenu } = useContext(AppContext);
  const router = useRouter();
  const { cardInfo } = props;
  let cont = 1;

  useEffect(() => {
    let elements = document.querySelectorAll('.' + styles.Card);
    elements.forEach((elem) => {
      if (cont <= 3) {
        elem.classList.add('card-' + cont);
        cont++;
      }
    });
  }, [cont]);

  const handleRedirigir = () => {
    toggleMenu(false);
    router.push(state.options[cardInfo.id]);
  };

  return (
    <article className={styles.Card}>
      <div className={styles['container-info']}>
        <div className={styles.info}>
          <h3>{cardInfo?.title}</h3>
          <span>{cardInfo?.info}</span>
        </div>
        <Image onClick={handleRedirigir} onKeyDown={handleRedirigir} className={styles['icon-arrow']} src={iconFlecha} alt="icono flecha" />
      </div>
      <Image className={styles.imgCard} src={cardInfo.img} alt={cardInfo?.title + ' imagen'} />
    </article>
  );
};

export default Card;
