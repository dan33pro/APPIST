import styles from '@styles/Footer.module.scss';
import Image from 'next/image';

import logo from '@logos/logo_appist.png';
import iconFacebook from '@logos/facebook.png';
import iconTwitter from '@logos/twitter.png';
import iconInstagram from '@logos/instagram.png';
import iconLinkedin from '@logos/linkedin.png';

const Footer = () => {
  return (
    <footer className={styles.Bottom}>
      <article className={styles.contacto}>
        <section className={styles['contacto-top']}>
          <div className={styles['contacto-info']}>
            <span>appist.team@gmail.com</span>
            <span>Universidad Piloto de Colombia</span>
          </div>
          <ul className={styles['list-redes-icon']}>
            <li>
              <Image className={styles.iconFacebook} src={iconFacebook} alt={'icono de facebook'} />
            </li>
            <li>
              <Image className={styles.iconTwitter} src={iconTwitter} alt={'icono de Twitter'} />
            </li>
            <li>
              <Image className={styles.iconInstagram} src={iconInstagram} alt={'icono de Instagram'} />
            </li>
            <li>
              <Image className={styles.iconLinkedin} src={iconLinkedin} alt={'icono de Linkedin'} />
            </li>
          </ul>
        </section>
        <section className={styles['contacto-bottom']}>
          <div>
            <span>© 2023 Appist Team</span>
          </div>
          <Image className={styles.logo} src={logo} alt={'logo Appist'} />
          <div>
            <span>Website by Appist Team</span>
          </div>
        </section>
      </article>
      <p className={styles['info-footer']}>
        Este es un proyecto de estudiantes de ingeniería de la Universidad Piloto de Colombia, por lo que su publicación es plenamente academica, no pretendemos continuar luego de la culminación del
        proyecto.
      </p>
    </footer>
  );
};

export default Footer;
