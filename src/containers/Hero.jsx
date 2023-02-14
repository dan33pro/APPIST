import React from 'react';
import Image from 'next/image';
import styles from '@styles/Hero.module.scss';

import heroImage from '@images/hero_image.jpg';

const Hero = () => {
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
