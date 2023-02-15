import React, { useEffect } from 'react';
import styles from '@styles/Hero.module.scss';
import useIsView from '@hooks/useIsView';

const Hero = () => {
  let titlesElement;
  
  useEffect(() => {
    titlesElement = document.querySelector('.'+styles['container-titles']);

    window.addEventListener('scroll', (e) => {
      isView.changeState(titlesElement);
      
      if (isView.isView) {
        titlesElement.classList.add('isView');
      }
    });
  }, []);

  let isView = useIsView(titlesElement);

  return (
    <section className={styles.Hero}>
      <div className={styles['container-titles']}>
        <h2>Appist</h2>
        <h4>Tú seguridad en nuestras manos</h4>
      </div>
      <div className={styles['image-container']}></div>
    </section>
  );
};

export default Hero;
