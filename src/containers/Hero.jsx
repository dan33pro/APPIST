import React from 'react';
import styles from '@styles/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles['container-titles']}>
        <h2>Appist</h2>
        <h4>Tú seguridad en nuestras manos</h4>
      </div>
    </section>
  );
};

export default Hero;
